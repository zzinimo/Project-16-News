import { useContext, useState } from "react";
import "./Card.css";
import { ActiveModalContext } from "../../contexts";

function Card({
  card,
  handleSaveClick,
  isSaved,
  isLoggedIn,
  clickedUrl,
  showDeleteBtn,
  handleDeleteClick,
  variant = "default",
}) {
  const { setActiveModal } = useContext(ActiveModalContext);

  const [deleteButtonHoverd, setDeleteButtonHoverd] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <li className="card">
      {variant === "default" && (
        <>
          <button
            onClick={() => handleSaveClick(card)}
            className={`card__save-btn ${isSaved ? "card__save-btn_saved" : "card__save-btn_normal"}`}
          />
          {!isLoggedIn && clickedUrl === card.url && (
            <button
              onClick={() => setActiveModal("loginModal")}
              className="card__sign-in-btn"
            >
              Sign in to save articles
            </button>
          )}
        </>
      )}
      {variant === "profile" && showDeleteBtn && (
        <>
          <button
            onMouseEnter={() => setDeleteButtonHoverd(true)}
            onMouseLeave={() => {
              setDeleteButtonHoverd(false);
            }}
            onClick={() => handleDeleteClick(card)}
            className={
              deleteButtonHoverd
                ? "card__hover-delete-btn"
                : "card__delete-btn-default"
            }
          />
          {deleteButtonHoverd ? (
            <button className="card__delete-btn-hoverd">
              Remove from saved
            </button>
          ) : (
            ""
          )}
          <button className="card__users-search">
            {card.searchTerm[0].toUpperCase() + card.searchTerm.slice(1)}
          </button>
        </>
      )}
      <img className="card__image" src={card.urlToImage} alt={card.title} />
      <div className="card__text-content">
        <p className="card__date">{formatDate(card.publishedAt)}</p>
        <h3 className="card__title">{card.title}</h3>
        <p className="card__description">{card.description}</p>
        <p className="card__author">{card.author}</p>
      </div>
    </li>
  );
}

export default Card;

import { useState } from "react";
import "./NewsCard.css";
import saved from "../../assets/saved.svg";
import savedHover from "../../assets/savedHover.svg";
import savedNormal from "../../assets/savedNormal.svg";

function NewsCard({ cards, handleSaveClick, savedCards }) {
  const [cardsToShow, setCardsToShow] = useState(3);
  const [saveButton, setSaveButton] = useState(savedNormal);

  console.log("saved cards :", savedCards);

  const isSaved = (card) => {
    return savedCards.some((individualCard) => {
      return card.url === individualCard.url;
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleShowMoreClick = () => {
    setCardsToShow((prevData) => {
      return prevData + 3;
    });
  };

  return (
    <div className="card__section">
      {cards.length > 0 && (
        <h1 className="card__section-title">Search results</h1>
      )}
      <ul className="card__container">
        {cards.slice(0, cardsToShow).map((card) => {
          return (
            <li key={card.url} className="card">
              <img
                onClick={() => handleSaveClick(card)}
                className="card__save-btn"
                src={isSaved(card) ? saved : savedNormal}
                alt="Save Button"
              />
              <img
                className="card__image"
                src={card.urlToImage}
                alt={card.title}
              />
              <div className="card__text-content">
                <p className="card__date">{formatDate(card.publishedAt)}</p>
                <h3 className="card__title">{card.title}</h3>
                <p className="card__description">{card.description}</p>
                <p className="card__author">{card.author}</p>
              </div>
            </li>
          );
        })}
      </ul>
      {cards.length > 0 && cardsToShow < cards.length && (
        <div className="card__section-button-container">
          <button
            onClick={handleShowMoreClick}
            className="card__section-button"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
}

export default NewsCard;

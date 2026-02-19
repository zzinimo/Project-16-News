import { useState } from "react";
import "./NewsCard.css";
import Card from "../Card/Card";
import NotFound from "../NotFound/NotFound";

function NewsCard({
  cards,
  handleSaveClick,
  savedCards,
  isLoggedIn,
  clickedUrl,
  handleDeleteClick,
  setSearchAttempted,
  isLoading,
  searchAttempted,
}) {
  const [cardsToShow, setCardsToShow] = useState(3);

  const isSaved = (card) => {
    return savedCards.some((individualCard) => {
      return card.url === individualCard.url;
    });
  };

  const handleShowMoreClick = () => {
    setCardsToShow((prevData) => {
      return prevData + 3;
    });
  };

  return (
    <div className="card__section">
      {searchAttempted && !isLoading && cards.length < 1 && <NotFound />}
      {cards.length > 0 && (
        <h1 className="card__section-title">Search results</h1>
      )}
      <ul className="card__container">
        {cards.slice(0, cardsToShow).map((card) => (
          <Card
            key={card.url}
            card={card}
            handleSaveClick={handleSaveClick}
            isSaved={isSaved(card)}
            isLoggedIn={isLoggedIn}
            clickedUrl={clickedUrl}
            variant="default"
            handleDeleteClick={handleDeleteClick}
          />
        ))}
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

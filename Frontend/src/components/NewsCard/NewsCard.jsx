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
    <section className="newscard">
      {searchAttempted && !isLoading && cards.length < 1 && <NotFound />}
      {cards.length > 0 && <h1 className="newscard__title">Search results</h1>}
      <ul className="newscard__list">
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
        <div className="newscard__button-container">
          <button onClick={handleShowMoreClick} className="newscard__button">
            Show More
          </button>
        </div>
      )}
    </section>
  );
}

export default NewsCard;

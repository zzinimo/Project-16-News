import "./NewsCard.css";

function NewsCard({ cards }) {
  // In NewsCard.jsx
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="card__section">
      <h1 className="card__section-title">Search results</h1>
      <ul className="card__container">
        {cards.map((card) => {
          return (
            <li key={card.url} className="card">
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
    </div>
  );
}

export default NewsCard;

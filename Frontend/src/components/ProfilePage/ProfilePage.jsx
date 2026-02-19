import "./ProfilePage.css";
import Card from "../Card/Card";

function ProfilePage({ savedCards, userSearch, handleDeleteClick, userName }) {
  // Get all search keywords from saved cards
  const allKeywords = savedCards
    .map((card) => card.searchTerm)
    .filter((keyword) => keyword); // Remove undefined/null

  // Remove duplicates - keep only first occurrence
  const uniqueKeywords = allKeywords.filter((keyword, index) => {
    return allKeywords.indexOf(keyword) === index;
  });

  // Build the display text
  let keywordText = "None";
  if (uniqueKeywords.length === 1) {
    keywordText =
      uniqueKeywords[0][0].toUpperCase() + uniqueKeywords[0].slice(1);
  } else if (uniqueKeywords.length === 2) {
    keywordText = `${uniqueKeywords[0][0].toUpperCase() + uniqueKeywords[0].slice(1)}, ${uniqueKeywords[1][0].toUpperCase() + uniqueKeywords[1].slice(1)}`;
  } else if (uniqueKeywords.length > 2) {
    keywordText = `${uniqueKeywords[0][0].toUpperCase() + uniqueKeywords[0].slice(1)}, ${uniqueKeywords[1][0].toUpperCase() + uniqueKeywords[1].slice(1)}, and ${uniqueKeywords.length - 2} other`;
  }

  return (
    <div className="profile__page-content">
      <div className="profile__page-text-container">
        <h3 className="profile__page-main-title">Saved articles</h3>
        <h1 className="profile__page-sub-title">
          {userName || "User"}, you have {savedCards.length} saved articles
        </h1>
        <p className="profile__page-sub-text">
          By keywords: <strong>{keywordText}</strong>
        </p>
      </div>

      <ul className="profile__page-card-container">
        {savedCards.map((individualCard) => (
          <Card
            key={individualCard.url}
            card={individualCard}
            variant="profile"
            showDeleteBtn={true}
            userSearch={userSearch}
            handleDeleteClick={handleDeleteClick}
          />
        ))}
      </ul>
    </div>
  );
}

export default ProfilePage;

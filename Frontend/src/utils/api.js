// getItems returns a promise that resolves to an array
// of article data. You can render this array on the
// /saved-news route.

export const getItems = () => {
  return new Promise((resolve) => {
    resolve([
      {
        _id: "65f7368dfb74bd6a92114c85",
        title: "some news article",
        url: "https://www.google.com/ ",
      },
    ]);
  });
};

// saveArticle accepts an article object as an argument and
// pretends to save it to the DB. It returns a promise that
// resolves to the "saved" article, and an _id field to it.
// Add this article to your array of saved news items.

export function saveArticle(article) {
  // article is a search result from the NewsAPI
  return new Promise((resolve) => {
    resolve({
      _id: "65f7371e7bce9e7d331b11a0",
      url: article,
      title: article.title,
      imageUrl: article.imagUrl,
    });
  });
}

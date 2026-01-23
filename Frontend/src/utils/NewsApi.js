const apiKey = "322c53d44886425f8347b03e604f7ee3";

const newsApiBaseUrl =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

const getNews = (q, from, to, pageSize = 100, sortBy = "popularity") => {
  const url = `${newsApiBaseUrl}?q=${q}&from=${from}&to=${to}&pageSize=${pageSize}&sortBy=${sortBy}`;

  return fetch(url, {
    method: "GET",
    headers: {
      authorization: `Bearer ${apiKey}`,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error(`HTTP Error: ${res.status}`));
    })
    .then((data) => {
      // Check if API returned an error in the response body
      if (data.status === "error") {
        return Promise.reject(new Error(`API Error: ${data.message}`));
      }
      return data;
    });
};

export { getNews, apiKey, newsApiBaseUrl };

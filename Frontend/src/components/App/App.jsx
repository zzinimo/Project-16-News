import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

//fonts photos and css
import "../../vendor/fonts.css";
import "./App.css";

//contexts
import { isLoadingContext, activeModalContext } from "../../contexts";

//components
import Main from "../Main/Main";
import ProfilePage from "../ProfilePage/ProfilePage";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";

// modals
import LoginModal from "../LoginModal/LoginModal";
import SignUpModal from "../SignUpModal/SignUpModal";
import SuccessModal from "../SuccessModal/SuccessModal";
import NewsCard from "../NewsCard/NewsCard";

// from utils
import { getNews, apiKey, newsApiBaseUrl } from "../../utils/NewsApi";

function App() {
  // state
  const [activeModal, setActiveModal] = useState("");
  const [cards, setCards] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [savedCards, setSavedCards] = useState([
    { url: "", urlToImage: "", title: "", author: "", description: "" },
  ]);

  const handleSearchButtonClick = (searchTerm) => {
    return getNews(searchTerm, "2026-01-15", "2026-01-22")
      .then((data) => {
        setCards(data.articles);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load news:", err);
        setIsLoading(false);
      });
  };

  // LEFT HERE
  const handleSaveClick = (cardtosave) => {
    // If card is already saved, UNSAVE it
    if (savedCards.some((card) => card.url === cardtosave.url)) {
      setSavedCards(
        savedCards.filter((alreadySavedCard) => {
          return alreadySavedCard.url !== cardtosave.url; // Keep all cards EXCEPT this one
        }),
      );
      return; // Exit early - don't run the save logic below
    }
    // If card is NOT saved, SAVE it
    setSavedCards((prevCards) => {
      return [...prevCards, cardtosave];
    });
  };

  return (
    <activeModalContext.Provider value={{ activeModal, setActiveModal }}>
      <isLoadingContext.Provider value={{ isLoading, setIsLoading }}>
        <div className="app">
          {/* modals */}
          {activeModal === "loginModal" && (
            <LoginModal
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              setActiveModal={setActiveModal}
            />
          )}
          {activeModal === "signUpModal" && (
            <SignUpModal setActiveModal={setActiveModal} />
          )}
          {activeModal === "success" && (
            <SuccessModal setActiveModal={setActiveModal} />
          )}
          <div className="app__hero-section">
            <Header isLoggedIn={isLoggedIn} />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    handleSearchButtonClick={handleSearchButtonClick}
                    isLoading={isLoading}
                  />
                }
              ></Route>
              <Route path="/saved-news" element={<ProfilePage />}></Route>
            </Routes>
          </div>
          {isLoading && <Preloader />}

          <NewsCard
            handleSaveClick={handleSaveClick}
            cards={cards}
            savedCards={savedCards}
          />
          <About />
          <Footer />
        </div>
      </isLoadingContext.Provider>
    </activeModalContext.Provider>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

//fonts photos and css
import "../../vendor/fonts.css";
import "./App.css";

//contexts
import { isLoadingContext } from "../../contexts";

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
  const [activeModal, setActiveModal] = useState("");
  const [cards, setCards] = useState([]);

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

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

  useEffect(() => {}, []);

  // <Routes>
  //   <Route path="/" element={<Main />}></Route>
  //   <Route path="/saved-news" element={<ProfilePage />}></Route>
  // </Routes>;

  return (
    <isLoadingContext.Provider value={{ isLoading, setIsLoading }}>
      <div className="app">
        {/* modals */}
        {activeModal === "loginModal" && (
          <LoginModal setActiveModal={setActiveModal} />
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

        <NewsCard cards={cards} />
        <About />
        <Footer />
      </div>
    </isLoadingContext.Provider>
  );
}

export default App;

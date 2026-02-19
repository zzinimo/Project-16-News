import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
import { checkToken } from "../../utils/auth";

function App() {
  // state
  const [activeModal, setActiveModal] = useState("");
  const [userName, setUserName] = useState(null);
  const [cards, setCards] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [savedCards, setSavedCards] = useState([]);
  const [clickedUrl, setClickedUrl] = useState(null);
  const [userSearch, setUserSearch] = useState([]);
  const [searchAttempted, setSearchAttempted] = useState(false);

  const navigate = useNavigate();

  const handleDeleteClick = (cardToDelete) => {
    if (savedCards.some((card) => card.url === cardToDelete.url)) {
      setSavedCards(
        savedCards.filter((alreadySavedCard) => {
          return alreadySavedCard.url !== cardToDelete.url;
        }),
      );
    }
  };

  const handleSaveClick = (cardtosave) => {
    // If user is not logged in, show sign-in prompt instead
    if (!isLoggedIn) {
      handleSaveClickNotLoggedIn(cardtosave.url);
      return;
    }

    // If card is already saved, UNSAVE it
    if (savedCards.some((card) => card.url === cardtosave.url)) {
      setSavedCards(
        savedCards.filter((alreadySavedCard) => {
          return alreadySavedCard.url !== cardtosave.url;
        }),
      );
      return;
    }
    setSavedCards((prevCards) => {
      return [...prevCards, { ...cardtosave, searchTerm: userSearch }];
    });
  };

  const handleSaveClickNotLoggedIn = (cardUrl) => {
    setClickedUrl(cardUrl);
  };

  const handleSearchButtonClick = (searchTerm) => {
    setSearchAttempted(true);
    return getNews(searchTerm, "2026-01-30", "2026-02-10")
      .then((data) => {
        setCards(data.articles);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load news:", err);
        setIsLoading(false);
      });
  };

  const handleLogOutClick = (e) => {
    setIsLoggedIn(false);
    navigate("/", { replace: true });
  };

  useEffect(() => {
    async function checkUserToken() {
      console.log("from app.jsx", localStorage);
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const user = await checkToken(token);
          setIsLoggedIn(true);
          setUserName(user.data.name);
        } else {
          console.log("an error has occurred, loggin out");
          setIsLoggedIn(false);
        }
      } catch (err) {
        console.error(err);
      }
    }
    checkUserToken();
  }, []);

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
            <SignUpModal
              setUserName={setUserName}
              setActiveModal={setActiveModal}
            />
          )}
          {activeModal === "success" && (
            <SuccessModal setActiveModal={setActiveModal} />
          )}
          <div className="app__content">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <div className="app__hero-section">
                      <Header
                        handleLogOutClick={handleLogOutClick}
                        userName={userName}
                        isLoggedIn={isLoggedIn}
                        setActiveModal={setActiveModal}
                      />
                      <Main
                        handleSearchButtonClick={handleSearchButtonClick}
                        isLoading={isLoading}
                        setUserSearch={setUserSearch}
                        userSearch={userSearch}
                      />
                    </div>
                    {isLoading && <Preloader />}
                    <NewsCard
                      handleSaveClick={handleSaveClick}
                      cards={cards}
                      savedCards={savedCards}
                      isLoggedIn={isLoggedIn}
                      handleSaveClickNotLoggedIn={handleSaveClickNotLoggedIn}
                      clickedUrl={clickedUrl}
                      handleDeleteClick={handleDeleteClick}
                      setSearchAttempted={setSearchAttempted}
                      searchAttempted={searchAttempted}
                      isLoading={isLoading}
                    />
                    <About />
                  </>
                }
              ></Route>
              <Route
                path="/saved-news"
                element={
                  <>
                    <div className="profile-section">
                      <Header
                        handleLogOutClick={handleLogOutClick}
                        userName={userName}
                        isLoggedIn={isLoggedIn}
                        variant="profile"
                        setActiveModal={setActiveModal}
                      />
                    </div>
                    <ProfilePage
                      userSearch={userSearch}
                      savedCards={savedCards}
                      handleDeleteClick={handleDeleteClick}
                      userName={userName}
                    />
                  </>
                }
              ></Route>
            </Routes>
          </div>

          <Footer />
        </div>
      </isLoadingContext.Provider>
    </activeModalContext.Provider>
  );
}

export default App;

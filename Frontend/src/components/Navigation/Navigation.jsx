import { ActiveModalContext } from "../../contexts";
import "./Navigation.css";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import logOut from "../../assets/logout.svg";
import logOutProfileView from "../../assets/logoutProfileView.svg";

function Navigation({
  isLoggedIn,
  userName,
  handleLogOutClick,
  variant = "home",
}) {
  const { setActiveModal } = useContext(ActiveModalContext);
  const location = useLocation();

  const isProfile = variant === "profile";
  const isHomePage = location.pathname === "/";
  const isSavedPage = location.pathname === "/saved-news";

  const handleSignInButtonClick = () => {
    if (!isLoggedIn) {
      setActiveModal("loginModal");
    }
  };

  return (
    <nav className="navigation__content-buttons">
      <Link
        to="/"
        className={`navigation__content-button navigation__content-button_type_home ${isProfile ? "navigation__content-button_profile" : ""} ${isHomePage ? "navigation__content-button_active" : ""}`}
      >
        Home
      </Link>
      {isLoggedIn && (
        <Link
          to="/saved-news"
          className={`navigation__content-button navigation__content-button_type_saved ${isProfile ? "navigation__content-button_profile" : ""} ${isSavedPage ? "navigation__content-button_active" : ""}`}
        >
          Saved articles
        </Link>
      )}
      <button
        type="button"
        onClick={handleSignInButtonClick}
        className={`navigation__content-button navigation__content-button_type_sign-in ${isProfile ? "navigation__content-button_profile" : ""}`}
      >
        {isLoggedIn ? userName : "Sign in"}
        {isLoggedIn ? (
          <img
            onClick={handleLogOutClick}
            src={isSavedPage ? logOutProfileView : logOut}
            alt="Log Out"
          />
        ) : (
          ""
        )}
      </button>
    </nav>
  );
}

export default Navigation;

import "./Header.css";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import menuIcon from "../../assets/menu.svg";
import menuDark from "../../assets/menuDark.svg";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

function Header({
  isLoggedIn,
  userName,
  handleLogOutClick,
  setActiveModal,
  variant = "home",
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const items = isLoggedIn
    ? ["Home", "Saved Articles", "Profile"]
    : ["Home", "Sign in"];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    if (item === "Sign in") {
      setActiveModal("loginModal");
    } else if (item === "Home") {
      navigate("/");
    } else if (item === "Profile" && isLoggedIn) {
      navigate("/saved-news");
    } else if (item === "Saved Articles") {
      navigate("/saved-news");
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <header
      className={`header ${variant === "profile" ? "header_profile" : ""} ${isOpen ? "header_dropdown-open" : ""}`}
    >
      <div className="header__wrapper">
        <div className="header__anchor">
          <h1
            style={
              location.pathname === "/saved-news"
                ? isOpen
                  ? { color: "white" }
                  : { color: "black" }
                : { color: "white" }
            }
            className="header__title"
          >
            NewsExplorer{" "}
          </h1>
          <Navigation
            userName={userName}
            isLoggedIn={isLoggedIn}
            variant={variant}
            handleLogOutClick={handleLogOutClick}
            isOpen={isOpen}
          />
          {isOpen && (
            <DropdownMenu
              isOpen={isOpen}
              items={items}
              handleItemClick={handleItemClick}
              setActiveModal={setActiveModal}
            />
          )}
        </div>
        <button
          className="header__menu-btn"
          type="button"
          aria-label="Open menu"
        >
          <img
            onClick={toggleMenu}
            className="header__icon"
            src={
              location.pathname === "/saved-news"
                ? isOpen
                  ? menuIcon
                  : menuDark
                : menuIcon
            }
            alt="Menu"
          />
        </button>
      </div>
    </header>
  );
}

export default Header;

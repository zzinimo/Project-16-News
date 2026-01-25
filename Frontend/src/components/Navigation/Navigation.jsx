import { activeModalContext } from "../../contexts";
import "./Navigation.css";
import { useContext } from "react";

function Navigation({ isLoggedIn }) {
  const { activeModal, setActiveModal } = useContext(activeModalContext);

  const handleSignInButtonClick = () => {
    setActiveModal("loginModal");
  };

  return (
    <div className="navigation__content-buttons">
      <button className="navigation__content-button navigation__content-button_type_home">
        Home
      </button>
      {isLoggedIn && (
        <button className="navigation__content-button navigation__content-button_type_saved">
          Saved articles
        </button>
      )}
      <button
        onClick={handleSignInButtonClick}
        className="navigation__content-button navigation__content-button_type_sign-in"
      >
        Sign in
      </button>
    </div>
  );
}

export default Navigation;

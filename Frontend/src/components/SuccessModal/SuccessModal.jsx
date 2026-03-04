import "./SuccessModal.css";
import { useEffect, useCallback } from "react";
import closeButton from "../../assets/closeButton.svg";

function SuccessModal({ setActiveModal }) {
  const handleCloseModal = useCallback(() => {
    setActiveModal("");
  }, [setActiveModal]);

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    const handleOverlayClick = (e) => {
      if (e.target.classList.contains("success")) {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    document.addEventListener("click", handleOverlayClick);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("click", handleOverlayClick);
    };
  }, [handleCloseModal]);

  const handleSignInClick = () => {
    setActiveModal("loginModal");
  };
  return (
    <div className="success">
      <div className="success__content">
        <button
          className="success__close-btn"
          type="button"
          onClick={handleCloseModal}
        >
          <img src={closeButton} alt="Close Button" />
        </button>
        <h1 className="success__title">Registration Successfully completed!</h1>
        <button className="success__submit-btn" onClick={handleSignInClick}>
          Sign in
        </button>
      </div>
    </div>
  );
}

export default SuccessModal;

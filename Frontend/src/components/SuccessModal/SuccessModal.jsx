import "./SuccessModal.css";
import closeButton from "../../assets/closeButton.svg";

function SuccessModal({ setActiveModal }) {
  const handleSignInClick = () => {
    setActiveModal("loginModal");
  };
  return (
    <div className="success">
      <div className="success__content">
        <button className="success__close-btn" type="button">
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

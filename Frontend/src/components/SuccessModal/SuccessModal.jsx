import "./SuccessModal.css";
import closeButton from "../../assets/closeButton.svg";

function SuccessModal({ setActiveModal }) {
  const handleSignInClick = () => {
    setActiveModal("loginModal");
  };
  return (
    <>
      <div className="success__modal">
        <div className="success__modal__content">
          <button className="success__lmodal__content_close-btn" type="button">
            <img src={closeButton} alt="Close Button" />
          </button>
          <h1 className="success__modal__content_title">
            Registration Successfully completed!
          </h1>
          <button
            className="success__modal__content_submit-btn"
            onClick={handleSignInClick}
          >
            Sign in
          </button>
        </div>
      </div>
    </>
  );
}

export default SuccessModal;

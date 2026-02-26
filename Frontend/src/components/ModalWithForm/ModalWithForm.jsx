import closeButton from "../../assets/closeButton.svg";

function ModalWithForm({
  blockName,
  title,
  onClose,
  onSubmit,
  isSubmitDisabled,
  submitButtonText,
  children,
  footer,
}) {
  return (
    <div className={blockName}>
      <form className={`${blockName}__form`} onSubmit={onSubmit}>
        <button
          className={`${blockName}__close-btn`}
          type="button"
          onClick={onClose}
        >
          <img src={closeButton} alt="Close Button" />
        </button>
        <h1 className={`${blockName}__title`}>{title}</h1>

        <div className={`${blockName}__content`}>
          <div className={`${blockName}__labels`}>{children}</div>
        </div>
        <div className={`${blockName}__footer`}>
          <button
            type="submit"
            className={`${blockName}__submit-btn`}
            disabled={isSubmitDisabled}
          >
            {submitButtonText}
          </button>
          {footer}
        </div>
      </form>
    </div>
  );
}

export default ModalWithForm;

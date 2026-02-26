import "./LoginModal.css";
import { useState, useEffect } from "react";
import { authorize } from "../../utils/auth";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ setActiveModal, setIsLoggedIn }) {
  const [emailError, setEmailError] = useState("");
  const [formValue, setFormValue] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // set form values in one piece of state
    setFormValue({
      ...formValue,
      [name]: value,
    });

    // Validate email if it's the email field
    if (name === "email") {
      if (value && !value.includes("@")) {
        setEmailError("Invalid email address");
      } else {
        setEmailError("");
      }
    }
  };

  //close sign in modal
  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSignupBtnClick = () => {
    setActiveModal("signUpModal");
  };

  const signInBtnClick = async (e) => {
    e.preventDefault(); // Prevent form submission/page refresh
    try {
      const token = await authorize(formValue.email, formValue.password);
      localStorage.setItem("token", token.token);
      setIsLoggedIn(true);
      setActiveModal("");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        setActiveModal("");
      }
    };

    const handleOverlayClick = (e) => {
      if (e.target.classList.contains("login")) {
        setActiveModal("");
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    document.addEventListener("click", handleOverlayClick);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("click", handleOverlayClick);
    };
  }, [setActiveModal]);

  return (
    <ModalWithForm
      blockName="login"
      title="Sign in"
      onClose={handleCloseModal}
      onSubmit={signInBtnClick}
      isSubmitDisabled={
        !formValue.email ||
        !formValue.password ||
        !formValue.email.includes("@")
      }
      submitButtonText="Sign in"
      footer={
        <p>
          {"or "}
          <button
            type="button"
            className="login__sign-up-btn"
            onClick={handleSignupBtnClick}
          >
            Sign up
          </button>
        </p>
      }
    >
      <label htmlFor="email" className="login__label">
        Email
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Enter email"
          className="login__input"
          value={formValue.email}
          onChange={handleChange}
        />
        {emailError && <span className="login__error">{emailError}</span>}
      </label>
      <label htmlFor="password" className="login__label">
        Password
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Enter password"
          className="login__input"
          value={formValue.password}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;

import { useState } from "react";
import "./SignUpModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function SignUpModal({ setActiveModal, setUserName }) {
  const [emailError, setEmailError] = useState("");
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });

    if (name === "email") {
      if (value && !value.includes("@")) {
        setEmailError("Invalid email address");
      } else {
        setEmailError("");
      }
    }
  };

  const handleSignUpBtnClick = () => {
    setActiveModal("success");
    setUserName(formValue.username);
  };

  return (
    <ModalWithForm
      blockName="signUp"
      title="Sign Up"
      onClose={handleCloseModal}
      onSubmit={(e) => {
        e.preventDefault();
        handleSignUpBtnClick();
      }}
      isSubmitDisabled={
        !formValue.email ||
        !formValue.password ||
        !formValue.username ||
        !formValue.email.includes("@")
      }
      submitButtonText="Sign in"
      footer={
        <p>
          {"or "}
          <button type="button" className="signUp__sign-in-btn">
            Sign in
          </button>
        </p>
      }
    >
      <label htmlFor="email" className="signUp__label">
        Email
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Enter email"
          className="signUp__input"
          value={formValue.email}
          onChange={handleChange}
        />
        {emailError && <span className="signUp__error">{emailError}</span>}
      </label>
      <label htmlFor="password" className="signUp__label">
        Password
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Enter email"
          className="signUp__input"
          value={formValue.password}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="username" className="signUp__label">
        Username
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Enter your username"
          className="signUp__input"
          value={formValue.username}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
}

export default SignUpModal;

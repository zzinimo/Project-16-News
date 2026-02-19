import { useState } from "react";

import "./SignUpModal.css";
import closeButton from "../../assets/closeButton.svg";

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
    <>
      <div className="signUp__modal">
        <form action="signUp__form" className="signUp__form">
          <button className="signUp__modal-close-btn" type="button">
            <img src={closeButton} alt="close" onClick={handleCloseModal} />
          </button>
          <h1 className="signUp__form-title">Sign Up</h1>

          <div className="signUp__modal-content">
            <div className="signUp__modal-labels">
              <label htmlFor="email" className="signUp__form-label">
                Email
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Enter email"
                  className="signUp__form-input"
                  value={formValue.email}
                  onChange={handleChange}
                />
                {emailError && (
                  <span class="signUp__form-error">{emailError}</span>
                )}
              </label>
              <label htmlFor="password" className="signUp__form-label">
                Password
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter email"
                  className="signUp__form-input"
                  value={formValue.password}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="username" className="signUp__form-label">
                Username
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Enter your username"
                  className="signUp__form-input"
                  value={formValue.username}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
          <div className="signUp__form-footer">
            <button
              type="submit"
              className="signUp__form-btn"
              onClick={handleSignUpBtnClick}
              disabled={
                !formValue.email ||
                !formValue.password ||
                !formValue.username ||
                !formValue.email.includes("@")
              }
            >
              Sign in
            </button>
            <p>
              {"or "}

              <button className="signUp__form-footer-sign-in-btn">
                Sign in
              </button>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUpModal;

import "./LoginModal.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import closeButton from "../../assets/closeButton.svg";

function LoginModal({ setActiveModal, setIsLoggedIn, isLoggedIn }) {
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

  const signInBtnClick = (e) => {
    e.preventDefault(); // Prevent form submission/page refresh
    setIsLoggedIn(true);
    setActiveModal("");
  };

  return (
    <>
      <div className="login__modal">
        <form className="login__form">
          <button
            className="login__modal-close-btn"
            type="button"
            onClick={handleCloseModal}
          >
            <img src={closeButton} alt="Close" />
          </button>
          <h1 className="login__form-title"> Sign in</h1>

          <div className="login__modal-content">
            <div className="login__modal-labels">
              <label htmlFor="email" className="login__form-label">
                Email
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Enter email"
                  className="login__form-input"
                  value={formValue.email}
                  onChange={handleChange}
                />
                {emailError && (
                  <span className="login__form-error">{emailError}</span>
                )}
              </label>
              <label htmlFor="password" className="login__form-label">
                Password
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  className="login__form-input"
                  value={formValue.password}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
          <div className="login__form-footer">
            <button
              type="submit"
              className="login__form-submit-btn"
              disabled={
                !formValue.email ||
                !formValue.password ||
                !formValue.email.includes("@")
              }
              onClick={signInBtnClick}
            >
              Sign in
            </button>
            <p>
              {"or "}
              <button
                className="login__form-footer-sign-up-btn"
                onClick={handleSignupBtnClick}
              >
                Sign up
              </button>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginModal;

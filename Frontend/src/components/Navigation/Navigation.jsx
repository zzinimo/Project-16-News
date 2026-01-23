import "./Navigation.css";

function Navigation({isLoggedIn}) {


  
  return (
    <div className="navigation__content-buttons">
      <button className="navigation__content-button navigation__content-button_type_home">
        Home
      </button>
      {isLoggedIn && 
      <button className="navigation__content-button navigation__content-button_type_saved">Saved articles</button>
      }
      <button className="navigation__content-button navigation__content-button_type_sign-in">
        Sign in
      </button>
    </div>
  );
}

export default Navigation;

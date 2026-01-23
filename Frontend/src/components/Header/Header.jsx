import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({isLoggedIn}) {

  return (
    <>
      <div className="header">
        <div className="header__content">
          <h1 className="header__content-title">NewsExplorer 1</h1>
          <Navigation isLoggedIn={isLoggedIn} />
        </div>
      </div>
    </>
  );
}

export default Header;

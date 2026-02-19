import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";

function Main({ handleSearchButtonClick, setUserSearch, userSearch }) {
  return (
    <div className="main__content">
      <div className="main__content-text">
        <h1 className="main__content-title">What's going on in the world?</h1>
        <p className="main__content-subtext">
          Find the latest news on any topic and save them in your personal
          account
        </p>
      </div>
      <SearchForm
        setUserSearch={setUserSearch}
        handleSearchButtonClick={handleSearchButtonClick}
        userSearch={userSearch}
      />
    </div>
  );
}

export default Main;

import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";

function Main({ handleSearchButtonClick, setUserSearch, userSearch }) {
  return (
    <main className="main">
      <div className="main__content">
        <h1 className="main__title">What&apos;s going on in the world?</h1>
        <p className="main__subtitle">
          Find the latest news on any topic and save them in your personal
          account
        </p>
      </div>
      <SearchForm
        setUserSearch={setUserSearch}
        handleSearchButtonClick={handleSearchButtonClick}
        userSearch={userSearch}
      />
    </main>
  );
}

export default Main;

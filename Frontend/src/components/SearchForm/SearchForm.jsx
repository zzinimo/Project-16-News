import { useState, useContext } from "react";
import { isLoadingContext } from "../../contexts";
import "./SearchForm.css";

function SearchForm({ handleSearchButtonClick, userSearch, setUserSearch }) {
  const { isLoading, setIsLoading } = useContext(isLoadingContext);

  const handleInputChange = (e) => {
    setUserSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (userSearch.trim()) {
      await handleSearchButtonClick(userSearch);
      setIsLoading(false);
    }
  };

  return (
    <form className="search__container" onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        value={userSearch}
        className="search__container-input"
        placeholder="Enter topic"
        onChange={handleInputChange}
      />
      <button type="submit" className="search__container-input-button">
        Search
      </button>
    </form>
  );
}

export default SearchForm;

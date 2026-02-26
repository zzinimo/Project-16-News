import { useContext } from "react";
import { IsLoadingContext } from "../../contexts";
import "./SearchForm.css";

function SearchForm({ handleSearchButtonClick, userSearch, setUserSearch }) {
  const { setIsLoading } = useContext(IsLoadingContext);

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
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        value={userSearch}
        className="search__input"
        placeholder="Enter topic"
        onChange={handleInputChange}
      />
      <button type="submit" className="search__button">
        Search
      </button>
    </form>
  );
}

export default SearchForm;

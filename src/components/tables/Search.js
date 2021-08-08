import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = (props) => {
  const searchIcon = <FontAwesomeIcon icon={faSearch} />;

  const searchChangeHandler = (event) => {
    props.onChangeSearchFilter(event.target.value);
  };

  return (
    <p className="control has-icons-right">
      <input
        className="input is-medium"
        type="text"
        placeholder="Search contracts..."
        value={props.searchValue}
        onChange={searchChangeHandler}
      />
      <span className="icon is-small is-right">{searchIcon}</span>
    </p>
  );
};

export default Search;

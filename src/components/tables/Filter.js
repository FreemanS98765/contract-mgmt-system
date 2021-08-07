import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faSearch } from "@fortawesome/free-solid-svg-icons";

const Filter = (props) => {
  const filterIcon = <FontAwesomeIcon icon={faAngleDown} />;
  const searchIcon = <FontAwesomeIcon icon={faSearch} />;

  const filterItems = (
    <div className="dropdown-content">
      {props.filters.map((filterItem) => (
        <a className="dropdown-item" href={filterItem.href}>
          {filterItem.value}
        </a>
      ))}
    </div>
  );

  return (
    <div className={`dropdown mr-4${props.toggled ? " is-active" : ""}`}>
      <div className="dropdown-trigger">
        <button
          className="button is-outlined is-medium"
          aria-haspopup="true"
          aria-controls={props.menuId}
          onClick={props.onClick}
        >
          <span>{props.filterName}: {props.selected}</span>
          <span className="icon is-small">{filterIcon}</span>
        </button>
      </div>

      <div className="dropdown-menu" id={props.menuId} role="menu">
        {filterItems}
      </div>
    </div>
  );
};

export default Filter;

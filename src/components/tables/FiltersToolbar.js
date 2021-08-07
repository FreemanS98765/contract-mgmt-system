import { useState } from "react";

import Filter from "./Filter";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faSearch } from "@fortawesome/free-solid-svg-icons";

const FiltersToolbar = () => {
  const [filteredStatus, setFilteredStatus] = useState("All");
  const [filteredDate, setFilteredDate] = useState("All");
  const [toggleStatusFilter, setToggleStatusFilter] = useState(false);
  const [toggleDateFilter, setToggleDateFilter] = useState(false);

  const searchIcon = <FontAwesomeIcon icon={faSearch} />;

  const toggleStatusFiltersHandler = () => {
    setToggleStatusFilter(!toggleStatusFilter);
  };

  const toggleDateFiltersHandler = () => {
    setToggleDateFilter(!toggleDateFilter);
  };

  const statusFilterChangeHandler = (selectedStatus) => {
    setFilteredStatus(selectedStatus);
  };

  const dateFilterChangeHandler = (selectedDate) => {
    setFilteredDate(selectedDate);
  };

  const STATUS_FILTERS = [
    { href: "#all", value: "all" },
    { href: "#draft", value: "draft" },
    { href: "#expired", value: "expired" },
  ];

  const DATE_FILTERS = [
    { href: "#all", value: "all" },
    { href: "#thisMonth", value: "This Month" },
    { href: "#lastMonth", value: "Last Month" },
  ];

  return (
    <div className="filters-toolbar mb-4">
      <div className="flex space-between">
        <div className="field is-grouped">
          <Filter
            filterName={"Status"}
            filters={STATUS_FILTERS}
            menuId={"status-menu"}
            onClick={toggleStatusFiltersHandler}
            toggled={toggleStatusFilter}
            onChangeFilter={statusFilterChangeHandler}
            selected={filteredStatus}
          />
          <Filter 
            filterName={"Date"}
            filters={DATE_FILTERS}
            menuId={"date-menu"}
            onClick={toggleDateFiltersHandler}
            onChangeFilter={dateFilterChangeHandler}
            selected={filteredDate}
            toggled={toggleDateFilter}
          />
          <p className="control has-icons-right">
            <input
              className="input is-medium"
              type="text"
              placeholder="Search contracts..."
            />
            <span className="icon is-small is-right">{searchIcon}</span>
          </p>
        </div>
        {/* <button
          className="button is-danger is-outlined"
          onClick={changeSortingHandler}
        >
          Sort {isSortingAscending ? "Descending" : "Ascending"}
        </button> */}
      </div>
    </div>
  );
};

export default FiltersToolbar;

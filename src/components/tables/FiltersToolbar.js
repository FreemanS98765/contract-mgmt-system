import { useState } from "react";

import Filter from "./Filter";
import Search from "./Search";

const STATUS_FILTERS = [
  { value: "all", name: "All" },
  { value: "active", name: "Active" },
  { value: "draft", name: "Draft" },
  { value: "expired", name: "Expired" },
];

const DATE_FILTERS = [
  { value: "all", name: "All" },
  { value: "2022", name: "2022" },
  { value: "2021", name: "2021" },
  { value: "2020", name: "2020" },
  { value: "2019", name: "2019" },
  { value: "2018", name: "2018" },
];

const FiltersToolbar = (props) => {

  return (
    <div className="filters-toolbar mb-4">
      <div className="flex space-between">
        <div className="field is-grouped">
          <Filter
            filterName={"Status"}
            filters={STATUS_FILTERS}
            menuId={"status-menu"}
            onChangeStatusFilter={props.onChangeStatusFilter}
            selected={props.selectedStatus}
          />
          <Filter
            filterName={"Date"}
            filters={DATE_FILTERS}
            menuId={"date-menu"}
            onChangeDateFilter={props.onChangeDateFilter}
            selected={props.selectedDate}
          />
          <Search searchValue={props.searchValue} onChangeSearchFilter={props.onChangeSearchFilter} />
        </div>
      </div>
    </div>
  );
};

export default FiltersToolbar;

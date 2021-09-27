import { Fragment, useState } from "react";

import FiltersToolbar from "./FiltersToolbar";
import {EventsTable} from "./Table";

import Spinner from "../UI/LoadingSpinner";

import "bulma/css/bulma.min.css";

const TableList = (props) => {

  const postTypeArr = props.postTypeState;

  const [filteredStatus, setFilteredStatus] = useState();
  const [filteredDate, setFilteredDate] = useState();

  const [query, setQuery] = useState("");
  const [searchParam] = useState(["client", "title"]);

  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState([]);

  const statusFilterChangeHandler = (selectedStatus) => {
    setFilteredStatus(selectedStatus);
  };

  const dateFilterChangeHandler = (selectedDate) => {
    setFilteredDate(selectedDate);
  };

  const searchFilterChangeHandler = (query) => {
    setQuery(query);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  console.log("Filtered props are: ", props.postTypeState);

  const filteredPostType = postTypeArr.filter((postType) => {

    if (
      (filteredStatus === "All" ||
        filteredStatus === "draft" ||
        filteredStatus === "expired" ||
        filteredStatus === "active") &&
      filteredStatus !== null
    ) {
      return postType.status.toLowerCase() === filteredStatus;
    }

    // If some searchParam's value matches the value of the contract
    // Return true

    if (
      (filteredDate === "2022" ||
        filteredDate === "2021" ||
        filteredDate === "2020" ||
        filteredDate === "2019" ||
        filteredDate === "2018") &&
      filteredDate !== null
    ) {
      return postType.startDate.getFullYear().toString() === filteredDate;
    }

    return searchParam.some((param) => {
      const searchItem = postType[param];

      if (searchItem === null) {
        console.log("Search value is null");
        return;
      }

      return (
        searchItem.toString().toLowerCase().indexOf(query.toLowerCase()) >
        -1
      );
    });
  });

  if (!filteredPostType || filteredPostType.length === 0) {
    return (
      <Fragment>
        <FiltersToolbar
          selectedStatus={filteredStatus}
          selectedDate={filteredDate}
          onChangeStatusFilter={statusFilterChangeHandler}
          onChangeDateFilter={dateFilterChangeHandler}
          searchValue={query}
        />
        <h2>No entries found.</h2>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <FiltersToolbar
          selectedStatus={filteredStatus}
          selectedDate={filteredDate}
          onChangeStatusFilter={statusFilterChangeHandler}
          onChangeDateFilter={dateFilterChangeHandler}
          onChangeSearchFilter={searchFilterChangeHandler}
          order={order}
          orderBy={orderBy}
          onRequestSort={handleRequestSort}
        />

        {props.isLoading && <Spinner />}

        <EventsTable
          filteredPostType={filteredPostType}
          order={order}
          orderBy={orderBy}
          dispatchData={props.dispatchData}
          filters={props.filters}
        />
      </Fragment>
    );
  }
};

export default TableList;

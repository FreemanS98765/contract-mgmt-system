import { Fragment, useState } from "react";

import FiltersToolbar from "../tables/FiltersToolbar";
import { EventsTable } from "../tables/Table";
import NoEventsFound from "./NoEventsFound";

import Spinner from "../UI/LoadingSpinner";

import "bulma/css/bulma.min.css";

const EventList = (props) => {
  const events = props.events;
  let filteredEvents = [];

  console.log("Events inside list ", events);

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

  if (!events.length) {
    return (
      <h2>No Events found!</h2>
    )
  } else {
    filteredEvents = events.filter((item) => {
      if (
        (filteredStatus === "All" ||
          filteredStatus === "draft" ||
          filteredStatus === "expired" ||
          filteredStatus === "active") &&
        filteredStatus !== null
      ) {
        return item.status.toLowerCase() === filteredStatus;
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
        return item.startDate.getFullYear().toString() === filteredDate;
      }

      return searchParam.some((param) => {
        const searchItem = item[param];

        if (searchItem === null) {
          console.log("Search value is null");
          return;
        }

        return (
          searchItem.toString().toLowerCase().indexOf(query.toLowerCase()) > -1
        );
      });
    });
  }

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <FiltersToolbar
          selectedStatus={filteredStatus}
          selectedDate={filteredDate}
          onChangeStatusFilter={statusFilterChangeHandler}
          onChangeDateFilter={dateFilterChangeHandler}
          searchValue={query}
        />
        <h2>No events found.</h2>
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
          events={filteredEvents}
          order={order}
          orderBy={orderBy}
          dispatchData={props.dispatchData}
          filters={props.filters}
        />
      </Fragment>
    );
  }
};

export default EventList;

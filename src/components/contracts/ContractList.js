import { Fragment, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import ContractItem from "./ContractItem";
import FiltersToolbar from "../tables/FiltersToolbar";

import { ContractsTable } from "../tables/Table";

import "bulma/css/bulma.min.css";
import classes from "./ContractList.module.css";

const ContractList = (props) => {
  const [filteredStatus, setFilteredStatus] = useState();
  const [filteredDate, setFilteredDate] = useState();

  const [query, setQuery] = useState("");
  const [searchParam] = useState(["client", "contractName"]);

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

  const filteredContracts = props.contracts.filter((contract) => {
    if (
      filteredStatus === "draft" ||
      filteredStatus === "expired" ||
      filteredStatus === "active"
    ) {
      return contract.status.toLowerCase() === filteredStatus;
    }

    if (
      filteredDate === "2022" ||
      filteredDate === "2021" ||
      filteredDate === "2020" ||
      filteredDate === "2019" ||
      filteredDate === "2018"
    ) {
      return contract.startDate.getFullYear().toString() === filteredDate;
    }

    return searchParam.some((filteredContract) => {
      return (
        contract[filteredContract]
          .toString()
          .toLowerCase()
          .indexOf(query.toLowerCase()) > -1
      );
    });
  });

  if (filteredContracts.length === 0) {
    return (
      <Fragment>
        <FiltersToolbar
          selectedStatus={filteredStatus}
          selectedDate={filteredDate}
          onChangeStatusFilter={statusFilterChangeHandler}
          onChangeDateFilter={dateFilterChangeHandler}
          searchValue={query}
        />
        <h2>No contracts found.</h2>
      </Fragment>
    );
  }

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

      <ContractsTable
        contracts={filteredContracts}
        order={order}
        orderBy={orderBy}
        onRemoveHandler={props.onRemoveHandler}
      />
    </Fragment>
  );
};

export default ContractList;

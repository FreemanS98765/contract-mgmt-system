import { Fragment, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import ContractItem from "./ContractItem";
import FiltersToolbar from "../tables/FiltersToolbar";

import "bulma/css/bulma.min.css";
import classes from "./ContractList.module.css";

const tableSort = (array, ascending, prop) => {
  return array.sort((a, b, prop) => {
    if (ascending) {
      return a.prop > b.prop ? 1 : -1;
    } else {
      return a.prop < b.prop ? 1 : -1;
    }
  });
};

const ContractList = (props) => {
  const [filteredStatus, setFilteredStatus] = useState();
  const [filteredDate, setFilteredDate] = useState();

  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get("sort") === "asc";

  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  const sortedContracts = tableSort(
    props.contracts,
    isSortingAscending,
    props.client
  );

  const changeSortingHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${isSortingAscending ? "desc" : "asc"}`,
    });
  };

  const statusFilterChangeHandler = (selectedStatus) => {
    setFilteredStatus(selectedStatus);
  };

  const dateFilterChangeHandler = (selectedDate) => {
    setFilteredDate(selectedDate);
  };

  console.log(filteredStatus);

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

    return contract;
  });

  if (filteredContracts.length === 0) {
    return (
      <Fragment>
        <FiltersToolbar
          selectedStatus={filteredStatus}
          selectedDate={filteredDate}
          onChangeStatusFilter={statusFilterChangeHandler}
          onChangeDateFilter={dateFilterChangeHandler}
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
      />
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            {props.contractHeaders.map((header) => {
              return <th className="table-head">{header.label}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {filteredContracts.map((contract) => (
            <ContractItem
              contract={contract}
              key={contract.id}
              id={contract.id}
              startDate={contract.startDate}
              endDate={contract.endDate}
              contractName={contract.contractName}
              client={contract.client}
              amount={contract.amount}
              status={contract.status}
              action={contract.action}
            />
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ContractList;

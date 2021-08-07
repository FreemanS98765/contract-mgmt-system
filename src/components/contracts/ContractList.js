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
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get("sort") === "asc";

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

  return (
    <Fragment>
      <FiltersToolbar />
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            {props.contractHeaders.map((header) => {
              return <th className="table-head">{header.label}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {props.contracts.map((contract) => (
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

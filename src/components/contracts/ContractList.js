import { Fragment, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import ContractItem from "./ContractItem";
import FiltersToolbar from "../tables/FiltersToolbar";

import "bulma/css/bulma.min.css";
import classes from "./ContractList.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

// const tableSort = (array, ascending, prop) => {
//   return array.sort((a, b, prop) => {
//     if (ascending) {
//       return a.prop > b.prop ? 1 : -1;
//     } else {
//       return a.prop < b.prop ? 1 : -1;
//     }
//   });
// };

const ContractList = (props) => {
  const [filteredStatus, setFilteredStatus] = useState();
  const [filteredDate, setFilteredDate] = useState();

  const [query, setQuery] = useState("");
  const [searchParam] = useState(["client", "contractName"]);

  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState([]);

  const faAngleDownIcon = <FontAwesomeIcon icon={faAngleDown} />;
  const faAngleUpIcon = <FontAwesomeIcon icon={faAngleUp} />;

  // const history = useHistory();
  // const location = useLocation();

  // const queryParams = new URLSearchParams(location.search);

  // const isSortingAscending = queryParams.get("sort") === "asc";

  // const sortedContracts = tableSort(
  //   props.contracts,
  //   isSortingAscending,
  //   props.client
  // );

  const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }

    return 0;
  };

  const getComparator = (order, orderBy) => {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  };

  const tableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  };

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

  // const changeSortingHandler = () => {
  //   history.push({
  //     pathname: location.pathname,
  //     search: `?sort=${isSortingAscending ? "desc" : "asc"}`,
  //   });
  // };

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
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            {props.contractHeaders.map((header) => {
              return (
                <th
                  onClick={() => handleRequestSort("click", header.id)}
                  className="table-head is-hoverable table-head__cell"
                >
                  {header.label}
                  <span className="icon">{ (order === 'asc') ? faAngleDownIcon : faAngleUpIcon}</span>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {tableSort(filteredContracts, getComparator(order, orderBy)).map(
            (contract) => {
              return (
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
              );
            }
          )}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ContractList;

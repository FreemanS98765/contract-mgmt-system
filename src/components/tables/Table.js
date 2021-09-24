import { useState } from "react";
import { connect } from "react-redux";

import LoadingSpinner from "../UI/LoadingSpinner";

import TableRow from "./TableRow";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

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

const ContractsTable = (props) => {
  const [isSelected, setIsSelected] = useState(
    new Array(props.contracts.length).fill(false)
  );

  const toggleDropdown = (position) => {
    const updatedToggledState = isSelected.map((item, index) =>
      index === position ? !item : item
    );

    setIsSelected(updatedToggledState);
  };

  return (
    <>
      {props.isLoading ? (
        <div className="center">
          <LoadingSpinner />
        </div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Client</th>
              <th>Company</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableSort(
              props.contracts,
              getComparator(props.order, props.orderBy)
            ).map((c, i) => {
              return (
                <TableRow
                  key={c.id}
                  id={c.id}
                  {...c}
                  selected={isSelected[i]}
                  onClick={() => toggleDropdown(i)}
                  dispatchData={props.dispatchData}
                  filters={props.filters}
                  //onRemove={props.removeContractHandler.bind(null, c.id)}
                />
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default connect()(ContractsTable);

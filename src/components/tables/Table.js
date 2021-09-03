import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisH,
  faEye,
  faEdit,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { getFormattedAmount, getFormattedDate } from "../../helpers/FormatOutput";

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

export const ContractsTable = (props) => {
  const [isSelected, setIsSelected] = useState(
    new Array(props.contracts.length).fill(false)
  );

  const toggleDropdown = (position) => {
    const updatedToggledState = isSelected.map((item, index) =>
      index === position ? !item : item
    );

    setIsSelected(updatedToggledState);
  };

  const TableRow = (props) => {
    const { id, startDate, endDate, contract, client, amount, status } = props;
    const statusVariant =
      status === "Active"
        ? "has-text-success-dark"
        : status === "Draft"
        ? "has-text-warning-dark"
        : status === "Expired"
        ? "has-text-danger-dark"
        : "primary";

    return (
      <tr>
        <td>{client}</td>
        <td>{contract}</td>
        <td>{getFormattedDate(startDate)}</td>
        <td>{getFormattedDate(endDate)}</td>
        <td>{getFormattedAmount(amount)}</td>
        <td>
          <span className={statusVariant}>{status}</span>
        </td>
        <td>
          <div className={`dropdown ${props.selected ? "is-active" : ""} `}>
            <div className="dropdown-trigger">
              <button
                className="button"
                aria-haspopup="true"
                aria-controls="dropdown-menu"
                onClick={props.onClick}
              >
                <span className="icon is-small">
                  <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
                </span>
              </button>
            </div>
            <div
              className="dropdown-menu"
              id={`actions-menu-${props.id}`}
              role="menu"
            >
              <div className="dropdown-content">
                <Link className="dropdown-item" to={`/contracts/${props.id}`}>
                  <span className="icon-text">
                    <span className="icon">
                      <FontAwesomeIcon icon={faEye} />
                    </span>
                    <span>View Details</span>
                  </span>
                </Link>
                <Link className="dropdown-item" to={`/contracts/${props.id}`}>
                  <span className="icon-text">
                    <span className="icon">
                      <FontAwesomeIcon icon={faEdit} />
                    </span>
                    <span>Edit</span>
                  </span>
                </Link>
                <button className="dropdown-item" onClick={props.onRemoveHandler}>
                  <span className="icon-text has-text-danger">
                    <span className="icon">
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </span>
                    <span>Remove</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Client</th>
          <th>Contract</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Amount</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tableSort(props.contracts, getComparator(props.order, props.orderBy)).map((c, i) => (
          <TableRow
            key={c.id}
            {...c}
            selected={isSelected[i]}
            onClick={() => toggleDropdown(i)}
            onRemoveHandler={() => props.onRemoveHandler(i)}
          />
        ))}
      </tbody>
    </table>
  );
};

import { useState } from "react";
import { connect } from "react-redux";

import LoadingSpinner from "../UI/LoadingSpinner";

import { removeContract } from "../../actions/contracts";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisH,
  faEye,
  faEdit,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import {
  getFormattedAmount,
  getFormattedDate,
} from "../../helpers/FormatOutput";

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

  props.contracts.map((el) => {
    console.log(el.id);
  });

  console.log("Table props are: ", props);

  const toggleDropdown = (position) => {
    const updatedToggledState = isSelected.map((item, index) =>
      index === position ? !item : item
    );

    setIsSelected(updatedToggledState);
  };

  const removeContractHandler = async (id) => {
    await new Promise((r) => setTimeout(r, 2000));

    // post contract data
    props.dispatchData(removeContract({ id }));
  };

  const TableRow = (props) => {
    //const { id, startDate, endDate, contract, client, price, status } = props;

    const statusVariant =
      props.status === "Active"
        ? "has-text-success-dark"
        : props.status === "Draft"
        ? "has-text-warning-dark"
        : props.status === "Expired"
        ? "has-text-danger-dark"
        : "primary";

    console.log("Table Row: ", props.key);

    return (
      <tr id={props.key}>
        <td>{props.client}</td>
        <td>{props.title}</td>
        <td>{!props.startDate ? "" : getFormattedDate(props.startDate)}</td>
        <td>{!props.endDate ? "" : getFormattedDate(props.endDate)}</td>
        <td>{!props.price ? "" : getFormattedAmount(props.price)}</td>
        <td>
          <span className={statusVariant}>{props.status}</span>
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
                <button
                  className="dropdown-item"
                  onClick={(e) => {
                    const id = props.id;

                    //await sleep(1000);
                    //props.dispatchData(removeContract({ id }));
                    removeContractHandler(id);

                    console.log("Remove item: ", id);
                  }}
                >
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
    <>
      {props.isLoading ? (
        <div className="center">
          <LoadingSpinner />
        </div>
      ) : (
        <table className="table">
          <thead>
            <tr>
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
              console.log("Table Row Id: ", c.id);
              return (
                <TableRow
                  key={c.id}
                  {...c}
                  selected={isSelected[i]}
                  onClick={() => toggleDropdown(i)}
                  dispatchData={props.dispatchData}
                  onRemove={removeContractHandler.bind(null, c.id)}
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

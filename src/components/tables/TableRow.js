import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { updateFilters } from "../../filters/actions";
import { removeContract } from "../../actions/contracts";
import Checkbox from "./Checkbox";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisH,
  faEye,
  faEdit,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

import { getFormattedPrice, getFormattedDate } from "../../utils/utils";

class TableRow extends Component {
  //const { id, startDate, endDate, contract, client, price, status } = props;

  componentDidMount() {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = (label) => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }

    //this.props.updateFilters(Array.from(this.selectedCheckboxes));
  };

  createCheckbox = (label) => (
    <Checkbox
      classes="checkbox checkbox--medium"
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
    />
  );

  createCheckboxes = () => this.createCheckbox();

  statusVariant =
    this.props.status === "Active"
      ? "has-text-success-dark"
      : this.props.status === "Draft"
      ? "has-text-warning-dark"
      : this.props.status === "Expired"
      ? "has-text-danger-dark"
      : "primary";

  removeContractHandler = (id) => {
    //await new Promise((r) => setTimeout(r, 2000));

    // post contract data
    this.props.dispatchData(removeContract({ id }));
  };

  render() {
    return (
      <tr id={`table-row-${this.props.id}`}>
        <td className="is-flex is-justify-content-center is-align-content-center">
          {this.createCheckboxes("checkbox")}
        </td>
        <td>{this.props.client}</td>
        <td>{this.props.company}</td>
        <td>
          {!this.props.startDate ? "" : getFormattedDate(this.props.startDate)}
        </td>
        <td>
          {!this.props.endDate ? "" : getFormattedDate(this.props.endDate)}
        </td>
        <td>{!this.props.price ? "" : getFormattedPrice(this.props.price)}</td>
        <td>
          <span className={this.statusVariant}>{this.props.status}</span>
        </td>
        <td>
          <div
            className={`dropdown ${this.props.selected ? "is-active" : ""} `}
          >
            <div className="dropdown-trigger">
              <button
                className="button"
                aria-haspopup="true"
                aria-controls="dropdown-menu"
                onClick={this.props.onClick}
              >
                <span className="icon is-small">
                  <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
                </span>
              </button>
            </div>
            <div
              className="dropdown-menu"
              id={`actions-menu-${this.props.id}`}
              role="menu"
            >
              <div className="dropdown-content">
                <Link
                  className="dropdown-item"
                  to={`/contracts/${this.props.id}`}
                >
                  <span className="icon-text">
                    <span className="icon">
                      <FontAwesomeIcon icon={faEye} />
                    </span>
                    <span>View Details</span>
                  </span>
                </Link>
                <Link
                  className="dropdown-item"
                  to={`/contracts/${this.props.id}`}
                >
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
                    const id = this.props.id;

                    //await sleep(1000);
                    //props.dispatchData(removeContract({ id }));
                    this.removeContractHandler(id);
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
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters.items,
});

export default TableRow;

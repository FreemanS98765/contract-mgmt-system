import React, { Component } from "react";
import { connect } from "react-redux";

import TableDropdown from "./TableDropdown";

import { updateFilters } from "../../filters/actions";
import { removeEvent } from "../../actions/events";
import Checkbox from "./Checkbox";

import removeItemHandler, {
  getFormattedPrice,
  getFormattedDate,
} from "../../utils/utils";

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

  removeItemHandler = (id) => {
    //await new Promise((r) => setTimeout(r, 2000));

    // post contract data
    this.props.dispatchData(removeEvent({ id }));
  };

  render() {
    return (
      <tr id={`table-row-${this.props.id}`}>
        <td className="is-flex is-justify-content-center is-align-content-center">
          {this.createCheckboxes("checkbox")}
        </td>
        <td>{this.props.event}</td>
        <td>{this.props.company}</td>
        <td>
          {!this.props.startDate ? "" : getFormattedDate(this.props.startDate)}
        </td>
        <td>
          {!this.props.endDate ? "" : getFormattedDate(this.props.endDate)}
        </td>
        <td>{!this.props.lastYearsPrice ? "" : getFormattedPrice(this.props.lastYearsPrice)}</td>
        <td>
          <span className={this.statusVariant}>{this.props.status}</span>
        </td>
        <td>
          <TableDropdown
            id={this.props.id}
            selected={this.props.selected}
            onRemove={removeItemHandler}
            onClick={this.props.onClick}
          />
        </td>
      </tr>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters.items,
});

export default TableRow;

import React, { Component } from "react";
import { connect } from "react-redux";

import TableDropdown from "./TableDropdown";

import { updateFilters } from "../../filters/actions";
import { removeContract } from "../../actions/contracts";
import Checkbox from "./Checkbox";

import removeContractHandler, {
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
          <TableDropdown
            slug={this.props.slug}
            selected={this.props.selected}
            onRemove={removeContractHandler}
            onClick={this.props.onClick}
            postType={this.props.postType}
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

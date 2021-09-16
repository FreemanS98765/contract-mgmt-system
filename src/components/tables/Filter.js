import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import Selectbox from "./Selectbox";

class Filter extends Component {
  // static propTypes = {
  //   updateFilters: PropTypes.func.isRequired,
  //   filters: PropTypes.array,
  // };

  dropdownChangeHandler = (event) => {

    if (event.target.id === "status-menu") {
      this.props.onChangeStatusFilter(event.target.value);
    }

    if (event.target.id === "date-menu") {
      this.props.onChangeDateFilter(event.target.value);
    }

    return 'cannot find option';
  };

  filterItems = (
    <Fragment>
      {/* <select
        id={this.props.menuId}
        value={this.props.selected}
        onChange={this.dropdownChangeHandler}
      >
        {this.props.filters.map((filterItem, i) => (
          <option key={i} value={filterItem.value}>
            {`${this.props.filterName}: ${filterItem.name}`}
          </option>
        ))}
      </select> */}
      <Selectbox
        id={this.props.menuId}
        filterName={this.props.filterName}
        value={this.props.selected}
        onChange={this.dropdownChangeHandler}
        options={this.props.filters}
      />
    </Fragment>
  );

  render() {
    return <div className="select is-medium mr-3">{this.filterItems}</div>;
  }
}

export default Filter;

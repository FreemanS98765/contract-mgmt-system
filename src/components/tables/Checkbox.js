import React, { Component } from "react";
import PropTypes from "prop-types";

import "bulma/css/bulma.min.css";

class Checkbox extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    handleCheckboxChange: PropTypes.func.isRequired,
  };

  state = {
    isChecked: false,
  };

  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = this.props;

    this.setState(({ isChecked }) => ({
      isChecked: !isChecked,
    }));

    handleCheckboxChange(label);
  };

  render() {
    const { label } = this.props;
    const { isChecked } = this.state;

    return (
      <label className={this.props.classes}>
        <input
          type="checkbox"
          className="checkbox--medium"
          value={label}
          checked={isChecked}
          onChange={this.toggleCheckboxChange}
        />
        <span className="checkmark">{label}</span>
      </label>
    );
  }
}

export default Checkbox;

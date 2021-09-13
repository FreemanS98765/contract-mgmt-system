import React from "react";
import PropTypes from "prop-types";

const Selectbox = ({id, filterName, options, classes, handleOnChange }) => {
  const createOptions = (options) =>
    options.map((o) => (
      <option value={o.value} key={o.value}>
        {`${filterName}: ${o.name}`}
      </option>
    ));

  return (
    <select
      onChange={(e) => handleOnChange(e.target.value)}
      id={id}
    >
      {createOptions(options)}
    </select>
  );
};

Selectbox.propTypes = {
  options: PropTypes.array.isRequired,
  classes: PropTypes.string,
  handleOnChange: PropTypes.func.isRequired,
};

export default Selectbox;

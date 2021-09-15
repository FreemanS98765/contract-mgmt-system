import React from "react";
import PropTypes from "prop-types";

const Selectbox = ({ id, value, filterName, options, classes, onChange }) => {
  const createOptions = (options) =>
    options.map((o) => (
      <option value={o.value} key={o.value}>
        {`${filterName}: ${o.name}`}
      </option>
    ));

  return (
    <select id={id} value={value} onChange={onChange}>
      {createOptions(options)}
    </select>
  );
};

// Selectbox.propTypes = {
//   options: PropTypes.array.isRequired,
//   classes: PropTypes.string,
//   handleOnChange: PropTypes.func.isRequired,
// };

export default Selectbox;

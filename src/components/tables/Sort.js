import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { updateSort } from "../../../services/sort/actions";
import Selectbox from "../../Selectbox";

const sortBy = [
  { value: "", label: "Select" },
  { value: "lowestprice", label: "Lowest to highest" },
  { value: "highestprice", label: "Highest to lowest" },
];

const STATUS_FILTERS = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "draft", label: "Draft" },
  { value: "expired", label: "Expired" },
];

const DATE_FILTERS = [
  { value: "all", label: "All" },
  { value: "2022", label: "2022" },
  { value: "2021", label: "2021" },
  { value: "2020", label: "2020" },
  { value: "2019", label: "2019" },
  { value: "2018", label: "2018" },
];

const Sort = ({ updateSort, sort }) => (
  <div className="sort">
    Order by
    <Selectbox
      options={STATUS_FILTERS}
      handleOnChange={(value) => updateSort(value)}
    />
    <Selectbox
      options={DATE_FILTERS}
      handleOnChange={(value) => updateSort(value)}
    />
  </div>
);

Sort.propTypes = {
  updateSort: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  sort: state.sort.type,
});

export default connect(mapStateToProps, { updateSort })(Sort);

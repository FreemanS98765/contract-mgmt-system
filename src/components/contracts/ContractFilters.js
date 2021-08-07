import { Fragment, useState } from "react";

import FiltersToolbar from "../tables/FiltersToolbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faSearch } from "@fortawesome/free-solid-svg-icons";

const ContractFilters = (props) => {
  

  const filterIcon = <FontAwesomeIcon icon={faAngleDown} />;
  const searchIcon = <FontAwesomeIcon icon={faSearch} />;

  return (
      <Fragment>
        <FiltersToolbar />
      </Fragment>
    
  );
};

export default ContractFilters;

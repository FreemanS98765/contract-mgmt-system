import { Link } from "react-router-dom";

import classes from "./NoContractsFound.module.css";

const NoContractsFound = () => {
  return (
    <div className={classes.nocontracts}>
      <p>No contracts found!</p>
      <Link className="btn" to='/new-contract'>
        Add a Contract
      </Link>
    </div>
  );
};

export default NoContractsFound;

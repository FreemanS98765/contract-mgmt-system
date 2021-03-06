import { Link } from "react-router-dom";

const NoContractsFound = () => {
  return (
    <div className="noContracts">
      <h4>No contracts found!</h4>
      <div>
        <Link
          className="button btn has-shadow is-success is-small"
          to="/contracts"
        >
          Add a Contract
        </Link>
      </div>
    </div>
  );
};

export default NoContractsFound;

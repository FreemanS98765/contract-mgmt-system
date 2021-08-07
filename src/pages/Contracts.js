import ContractList from "../components/contracts/ContractList";
import { CONTRACT_DATA, CONTRACT_TABLE_HEADERS } from "../data/data.js";

import "bulma/css/bulma.min.css";
import classes from "./Contracts.module.css";

const Contracts = () => {
  return (
    <div>
      <div className="page-header">
        <h1 className="is-size-4">Contracts</h1>
        <button className="button is-primary">Create Contract</button>
      </div>
      <ContractList
        contracts={CONTRACT_DATA}
        contractHeaders={CONTRACT_TABLE_HEADERS}
      />
    </div>
  );
};

export default Contracts;

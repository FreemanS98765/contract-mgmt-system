import { useSelector } from "react-redux";

import { CONTRACT_DATA, CONTRACT_TABLE_HEADERS } from "../data/data.js";

import ContractList from "../components/contracts/ContractList";
import ContractButton from "../components/contracts/ContractButton";
import ContractModal from "../components/contracts/ContractModal.js";

import "bulma/css/bulma.min.css";
import classes from "./Contracts.module.css";

const Contracts = () => {
  const showContractModal = useSelector(
    (state) => state.ui.contractModalIsVisible
  );

  return (
    <div>
      <div className="page-header flex space-between">
        <h1 className="is-size-4">Contracts</h1>
        <ContractButton />
      </div>
      <div className="container content">
        <ContractList
          contracts={CONTRACT_DATA}
          contractHeaders={CONTRACT_TABLE_HEADERS}
        />
      </div>
      {showContractModal && <ContractModal toggleModal={showContractModal ? 'is-active' : 'false'} />}
    </div>
  );
};

export default Contracts;

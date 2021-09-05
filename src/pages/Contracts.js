import React from 'react';
import { connect } from "react-redux";
import { useSelector } from "react-redux";

import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoContractsFound from "../components/contracts/NoContractsFound";

import { CONTRACT_TABLE_HEADERS } from "../data/data.js";

import { getContracts } from "../actions/contracts";

import ContractList from "../components/contracts/ContractList";
import ContractButton from "../components/contracts/ContractButton";
import ContractModal from "../components/contracts/ContractModal.js";

import "bulma/css/bulma.min.css";
import classes from "./Contracts.module.css";

const Contracts = (props) => {
  const CONTRACT_DATA = useSelector((state) => state.contacts);

  //console.log(JSON.stringify(CONTRACT_DATA));

  const showContractModal = useSelector(
    (state) => state.ui.contractModalIsVisible
  );

  // const addContractHandler = (contract) => {
  //   setContracts((prevContracts) => {
  //     return [contract, ...prevContracts];
  //   });
  // };

  // const removeContractHandler = (contract) => {
  //   setContracts((prevContracts) => {
  //     return prevContracts.filter((item, index) => index !== contract);
  //   });
  // };

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
      {showContractModal && (
        <ContractModal
          toggleModal={showContractModal ? "is-active" : "false"}
        />
      )}
    </div>
  );
};

export default connect()(Contracts);

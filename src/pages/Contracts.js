import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import useHttp from "../hooks/use-http";
import NoContractsFound from "../components/contracts/NoContractsFound";

//import { CONTRACT_TABLE_HEADERS } from "../data/data.js";

import ContractList from "../components/contracts/ContractList";
import ContractButton from "../components/contracts/ContractButton";
import ContractModal from "../components/contracts/ContractModal.js";

import "bulma/css/bulma.min.css";
import classes from "./Contracts.module.css";

const Contracts = (props) => {
  //const CONTRACT_DATA = useSelector((state) => state.contacts);
  const [showModal, setShowModal] = useState(false);
  //const contracts = props.contracts;

  console.log("Contracts props are: ", props);

  // Stores contracts array
  // const CONTRACT_DATA = props.contracts.contractObj.contracts;
  const CONTRACT_DATA = props.contracts.contractObj;
  const DISPATCH_DATA = props.dispatch;
  const CONTRACT_TABLE_HEADERS = props.contractHeaders;

  console.log('contract data', CONTRACT_DATA);
  //console.log('dispatch data', DISPATCH_DATA);


  const showContractModal = () => {
    setShowModal(true);
  };

  const hideContractModal = () => {
    setShowModal(false);
  };

  // useEffect(() => {
  //   sendRequest();
  // }, [sendRequest]);

  // if (error) {
  //   return (
  //     <div className="message is-danger">
  //       <p className="centered focused">{error}</p>
  //       <button className="delete" aria-label="delete"></button>
  //     </div>
  //   );
  // }

  if (
    CONTRACT_DATA === undefined ||
    (CONTRACT_DATA && (!CONTRACT_DATA || CONTRACT_DATA.length === 0))
  ) {
    return <NoContractsFound />;
  }

  return (
    <div>
      {console.log("contracts are: ", CONTRACT_DATA)}
      <div className="page-header flex space-between">
        <h1 className="is-size-4">Contracts</h1>
        <ContractButton onShowModal={showContractModal} />
      </div>

      <div className="container content">
        <ContractList
          contracts={CONTRACT_DATA}
          isLoading={props.isLoading}
          dispatchData={DISPATCH_DATA}
        />
      </div>

      {showModal && (
        //<ContractModal onClose={showContractModal ? "is-active" : "false"} />
        <ContractModal
          onHideModal={hideContractModal}
          onShowModal={showModal}
          dispatchData={DISPATCH_DATA}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    contracts: state,
    isLoading: state,
  };
};

export default connect(mapStateToProps)(Contracts);

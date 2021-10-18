import React, { useState } from "react";
import { connect } from "react-redux";

import ContractList from "../components/contracts/ContractList";
import Header from "../components/Header";
import ContractModal from "../components/contracts/ContractModal.js";

const Contracts = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  let contracts = props.contractState;

  //let contracts = props.contractState.contractObj.contracts === undefined ? [] : props.contractState.contractObj.contracts;
  const dispatchData = props.dispatch;
  let filters = props.filters.items;

  const openFormModal = () => {
    setIsOpen(true);
  };

  const closeFormModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Header title="Contracts" onOpenModal={openFormModal} />

      <div className="container content">
        <ContractList
          contracts={contracts}
          isLoading={isLoading}
          dispatchData={dispatchData}
          filters={filters}
        />
      </div>

      {isOpen && (
        //<ContractModal onClose={showContractModal ? "is-active" : "false"} />
        <ContractModal
          onHideModal={closeFormModal}
          onShowModal={openFormModal}
          dispatchData={dispatchData}
          isOpen={isOpen}
          contracts={contracts}
          text="Submit"
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  contractState: state.contracts,
  filters: state.filters,
  sort: state,
  dispatchData: state.dispatch,
});

export default connect(mapStateToProps)(Contracts);

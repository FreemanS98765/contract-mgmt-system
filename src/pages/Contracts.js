import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getContracts } from "../actions/contracts";

import ContractList from "../components/contracts/ContractList";
import ContractButton from "../components/contracts/ContractButton";
import ContractModal from "../components/contracts/ContractModal.js";

import "bulma/css/bulma.min.css";

class Contracts extends Component {
  // static propTypes = {
  //   contracts: PropTypes.object,
  //   getContracts: PropTypes.func.isRequired,
  //   filters: PropTypes.object,
  //   sort: PropTypes.string,
  // };

  state = {
    isLoading: false,
    isOpen: false,
  };

  openFormModal = () => {
    this.setState({ isOpen: true });
  };

  closeFormModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    console.log("Props are now: ", this.props);

    const contracts = this.props.contractState;
    const dispatchData = this.props.dispatch;
    const filters = this.props.filters;
    const { isLoading } = this.state;
    const { isOpen } = this.state;

    console.log("Contracts are: ", isLoading);

    return (
      <div>
        <div className="page-header flex space-between">
          <h1 className="is-size-4">Contracts</h1>
          <ContractButton text='New Contract' onShowModal={this.openFormModal} />
        </div>

        <div className="container content">
          <ContractList
            contracts={contracts}
            isLoading={isLoading}
            dispatchData={dispatchData}
            filters={filters}
          />
        </div>

        {console.log("isOpen: ", isOpen)}

        {isOpen && (
          //<ContractModal onClose={showContractModal ? "is-active" : "false"} />
          <ContractModal
            onHideModal={this.closeFormModal}
            onShowModal={this.openFormModal}
            dispatchData={dispatchData}
            isOpen={isOpen}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contractState: state.contracts,
  filters: state,
  sort: state,
  dispatchData: state.dispatch,
});

export default connect(mapStateToProps)(Contracts);

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ContractList from "../components/contracts/ContractList";
import Header from "../components/Header";
import ContractModal from "../components/contracts/ContractModal.js";

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

    let contracts = this.props.contractState;
    const dispatchData = this.props.dispatch;
    const filters = this.props.filters;
    const { isLoading } = this.state;
    const { isOpen } = this.state;

    console.log("Contracts are: ", contracts);

    return (
      <div>
        <Header onOpenModal={this.openFormModal} />
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
            onHideModal={this.closeFormModal}
            onShowModal={this.openFormModal}
            dispatchData={dispatchData}
            isOpen={isOpen}
            contracts={contracts}
            text="Submit"
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

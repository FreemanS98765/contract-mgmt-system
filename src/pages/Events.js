import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ContractList from "../components/contracts/ContractList";
import Header from "../components/Header";
import ContractModal from "../components/contracts/ContractModal.js";

class Events extends Component {

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

    let postTypeState = this.props.eventState;
    const dispatchData = this.props.dispatch;
    const filters = this.props.filters;
    const { isLoading } = this.state;
    const { isOpen } = this.state;

    console.log("Events are: ", postTypeState);

    return (
      <div>
        <Header title='Events' onOpenModal={this.openFormModal} />
       
        <div className="container content">
          <TableList
            postTypeState={postTypeState}
            isLoading={isLoading}
            dispatchData={dispatchData}
            filters={filters}
          />
        </div>

        {isOpen && (
          //<ContractModal onClose={showContractModal ? "is-active" : "false"} />
          <FormModal
            onHideModal={this.closeFormModal}
            onShowModal={this.openFormModal}
            dispatchData={dispatchData}
            isOpen={isOpen}
            postTypeState={postTypeState}
            text="Submit"
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  eventState: state.events,
  filters: state,
  sort: state,
  dispatchData: state.dispatch,
});

export default connect(mapStateToProps)(Events);

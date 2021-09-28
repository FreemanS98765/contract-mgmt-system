import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import EventList from "../components/events/EventList";
import Header from "../components/Header";
import EventModal from "../components/events/EventModal.js";

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

    let events = this.props.eventState;
    const dispatchData = this.props.dispatch;
    const filters = this.props.filters;
    const { isLoading } = this.state;
    const { isOpen } = this.state;

    return (
      <div>
        <Header title='Events' onOpenModal={this.openFormModal} />
       
        <div className="container content">
          <EventList
            events={events}
            isLoading={isLoading}
            dispatchData={dispatchData}
            filters={filters}
          />
        </div>

        {isOpen && (
          //<EventModal onClose={showEventModal ? "is-active" : "false"} />
          <EventModal
            onHideModal={this.closeFormModal}
            onShowModal={this.openFormModal}
            dispatchData={dispatchData}
            isOpen={isOpen}
            events={events}
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

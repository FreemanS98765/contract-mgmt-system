import React, { useState, Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import EventList from "../components/events/EventList";
import Header from "../components/Header";
import EventModal from "../components/events/EventModal.js";

const Events = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  let events = props.eventState;
  const dispatchData = props.dispatch;
  const filters = props.filters;

  const openFormModal = () => {
    setIsOpen(true);
  };

  const closeFormModal = () => {
    setIsOpen(false);
  };

  console.log('Events are: ', events);

  return (
    <div>
      <Header title="Events" onOpenModal={openFormModal} />

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
          onHideModal={closeFormModal}
          onShowModal={openFormModal}
          dispatchData={dispatchData}
          isOpen={isOpen}
          events={events}
          text="Submit"
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  eventState: state.events,
  filters: state,
  sort: state,
  dispatchData: state.dispatch,
});

export default connect(mapStateToProps)(Events);

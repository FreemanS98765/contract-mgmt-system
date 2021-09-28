import React, { useState } from "react";
import { connect } from "react-redux";

import { Fragment } from "react";
import { useParams, NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

import EventHeader from "../components/singleEvent/EventHeader";
import EventClientDetails from "../components/singleEvent/EventClientDetails";
import EventDetails from "../components/singleEvent/EventDetails";
import Attachments from "../components/singleEvent/Attachments";

import EventModal from "../components/events/EventModal.js";

const EventSingle = (props) => {
  //const params = useParams();
  const dispatchData = props.dispatch;

  let { id } = useParams();

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const setActiveLink = (e) => {
    setIsSelected(true);
  };

  const events = props.events;

  console.log('Events in single are ', props.events);

  let event = events.find((c) => {
    return c.id.toString() === id;
  });

  const openFormModal = () => {
    setIsOpen(true);
  };

  const closeFormModal = () => {
    setIsOpen(false);
  };

  if (!event) {
    return <p>Contract not found!</p>;
  }

  // const checkIfEmpty = (data) => {
  //   if (data === email) {
  //     return email ? <a href={`mailto:${email}`}>{email}</a> : `Nothing found`;
  //   }

  //   return data ? data : "Nothing found";
  // };

  return (
    <Fragment>
      <EventHeader
        id={id}
        event={event}
        openFormModal={openFormModal}
      />

      <section id="eventSingle" className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-one-quarter sidebar">
              <div className="box">
                <div className="menu">
                  <ul className="menu-list">
                    <li>
                      <NavHashLink
                        activeClassName="is-active"
                        smooth
                        to="#eventDetails"
                      >
                        Event Details
                      </NavHashLink>
                    </li>
                    <li>
                      <NavHashLink
                        activeClassName="is-active"
                        smooth
                        to="#eventClientDetails"
                      >
                        Client Details
                      </NavHashLink>
                    </li>
                    <li>
                      <NavHashLink
                        activeClassName="is-active"
                        smooth
                        to="#attachments"
                      >
                        Attachments
                      </NavHashLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="column is-three-quarters">
              <EventDetails event={event} />
              <EventClientDetails event={event} />
              <Attachments event={event} />
            </div>
          </div>
        </div>
      </section>

      {isOpen && (
        <EventModal
          type="edit"
          event={event}
          onHideModal={closeFormModal}
          onShowModal={openFormModal}
          dispatchData={dispatchData}
          isOpen={isOpen}
          text="Update Event"
        />
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    events: state.events,
    dispatchData: state.dispatch,
  };
};

export default connect(mapStateToProps)(EventSingle);

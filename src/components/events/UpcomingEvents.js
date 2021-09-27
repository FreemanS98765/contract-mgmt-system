import { connect } from "react-redux";

import EventItem from "./EventItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

const UpcomingEvents = (props) => {
  let contracts = props.contractState;

  const sortedEvents = [];

  return (
    <div className="card upcoming-events">
      <div className="card-header">
        <h5>Upcoming Events</h5>
        <span className="icon-text is-align-items-center">
          <span className="icon">
            <FontAwesomeIcon size="lg" icon={faCalendar} />
          </span>
        </span>
      </div>
      <div className="card-content">
        <aside className="menu">
          <ul className="menu-list">
            {sortedEvents.map((date) => {
              return (
                <EventItem
                  id={date.id}
                  event="An upcoming event"
                  date={date.endDate}
                  company="Some Company"
                />
              );
            })}
          </ul>
        </aside>
      </div>
      <div className="card-footer"></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    contractState: state.contracts,
    dispatchData: state.dispatch,
  };
};

export default connect(mapStateToProps)(UpcomingEvents);

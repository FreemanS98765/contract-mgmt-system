import { Fragment } from "react";

import { Link } from "react-router-dom";

import {
  checkIfEmpty,
  getLongFormattedDate,
  getMonthNames,
} from "../../utils/utils";

const EventItem = (props) => {
  const date = props.date;

  const newDate = new Date(date);

  const eventDay = newDate.getDay();
  const eventMonth = getMonthNames(newDate);

  return (
    <Fragment>
      <div className="block">
        {eventDay ? (
          <span className="upcoming-events__day">{eventDay}</span>
        ) : (
          <span className="upcoming-events__unavailable">Date unavailable</span>
        )}

        <span>{eventMonth}</span>
      </div>
      <div className="block">
        <Link to={`/events/${props.slug}`}>
          <h6 className="upcoming-events__title">{props.event}</h6>
        </Link>
      </div>
      <div className="block upcoming-events__meta">
        <p>7:30 - 8:30</p>
        <span>{props.company}</span>
      </div>
    </Fragment>
  );
};

export default EventItem;

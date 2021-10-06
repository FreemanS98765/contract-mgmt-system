import { Link } from "react-router-dom";

const NoEventsFound = () => {
  return (
    <div className="noEvents">
      <h4>No events found!</h4>
      <div>
        <Link
          className="button btn has-shadow is-success is-small"
          to="/events"
        >
          Add an Event
        </Link>
      </div>
    </div>
  );
};

export default NoEventsFound;

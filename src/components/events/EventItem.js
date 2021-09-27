import { Link } from "react-router-dom";

const EventItem = (props) => {
  return (
    <li>
        <div className="block">

        <span>{props.event}</span>
        <span>{props.date}</span>
        <span>{props.company}</span>
        </div>
      <Link to={`/contracts/${props.id}`}>
        <span className="badge badge-is-success">View Event</span>
      </Link>
    </li>
  );
};

export default EventItem;

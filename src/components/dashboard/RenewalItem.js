import { Link } from "react-router-dom";

const RenewalItem = (props) => {
  return (
    <li>
      <span>{props.date}</span>
      <Link to={`/contracts/${props.id}`}>
        <span className="badge badge-is-success">view</span>
      </Link>
    </li>
  );
};

export default RenewalItem;

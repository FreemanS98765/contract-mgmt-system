import { Link } from "react-router-dom";

import { getFormattedDate, getLongFormattedDate } from "../../utils/utils";

const RenewalItem = (props) => {

    const date = props.date;

    const dateObj = new Date(date);

  return (
    <li>
      <span>{getLongFormattedDate(dateObj)}</span>
      <Link to={`/contracts/${props.id}`}>
        <span className="badge badge-is-success">view</span>
      </Link>
    </li>
  );
};

export default RenewalItem;

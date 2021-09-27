import { Link } from "react-router-dom";

import { getFormattedDate, getLongFormattedDate } from "../../utils/utils";

const RenewalItem = (props) => {
  const date = props.date;
  const dateObj = new Date(date);
  const currentTimestamp = Date.now();

  const getTimeToRenewal = (date) => {
    const minutes = (date - currentTimestamp) / 60000;
    const hours = minutes / 60;
    const days = hours / 24;
    const months = days / 12;

    if (minutes >= 60 && minutes < 1440) {
      return `${hours.toFixed(0)} hrs`;
    } else if (minutes >= 1440 && minutes < 43800) {
      return `${days.toFixed(0)} days`;
    } else if (minutes >= 43800) {
      return `${months.toFixed(0)} months`;
    } else {
      return "Past Due";
    }
  };

  const timeToRenewal = getTimeToRenewal(dateObj);

  const setBadge = (item) => {
    if (item === "Past Due") {
      return <span className="badge badge-is-danger">{item}</span>;
    }

    return <span className="badge badge-is-warning">{item}</span>
  };



  return (
    <li>
      <div>
        {setBadge(timeToRenewal)}
        <span className="renewal-date">{getLongFormattedDate(dateObj)}</span>
      </div>
      <Link to={`/contracts/${props.id}`}>
        <span className="badge badge-is-success">view</span>
      </Link>
    </li>
  );
};

export default RenewalItem;

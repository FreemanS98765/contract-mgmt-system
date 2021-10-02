import { ToastContainer } from "react-toastify";
import OutsideClick from "../../hooks/outside-click";
import { getCreatedAt } from "../../utils/utils";
import { Link } from "react-router-dom";

const ToastMsg = (props) => {
  const notification = props.notification;
  const title = notification.title;
  const msg = notification.message;
  const createdAt = getCreatedAt(notification.createdAt);
  const url = notification.url;

  if (props.status === "pending") {
    return <span className="is-warning">{props.status}</span>;
  }
  if (props.status === "expired") {
    return <span className="is-danger">{props.status}</span>;
  }

  return (
    <div className="card" key={props.index}>
      <div className="card-header">
        <span className="h6 notification__title">
          <Link to={`${url}`}>{title}</Link>
        </span>

        <span className="is-tiny">{createdAt}</span>
      </div>
      <div className="card-content">
        <span className="is-small notification__title">{title}</span>
        <p className="is-small">{msg}</p>
      </div>
    </div>
  );
};

export default ToastMsg;

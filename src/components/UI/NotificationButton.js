import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const NotificationButton = (props) => {
  return (
    <button onClick={props.onShowNotification} className="notification-bell">
      <span className="icon">
        {<FontAwesomeIcon size="2x" icon={faBell} />}
      </span>
    </button>
  );
};

export default NotificationButton;

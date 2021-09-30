import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const NotificationButton = (props) => {
  console.log('Notifications are: ', props.notifications);
  return (
    <button onClick={props.onShowToast} className="notification-bell">
      <span className="icon">
        {<FontAwesomeIcon size="2x" icon={faBell} />}
      </span>
      <span className="notification-counter">
        {props.notifications.length > 0 ? props.notifications.length : '0'}
      </span>
    </button>
  );
};

export default NotificationButton;

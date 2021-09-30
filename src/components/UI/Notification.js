import { useEffect } from "react";
import { useRef } from "react";

import OutsideClick from "../../hooks/outside-click";

const Notification = (props) => {
  let specialClasses = "";
  //const sidebar = useRef(null);
  //const outsideSidebar = OutsideClick(sidebar);

  const notifications = props.notifications;
  const currentTimestamp = Date.now();

  const getCreatedAt = (date) => {
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
      return "Just Now";
    }
  };

  const createdAt = getCreatedAt(notifications.createdAt)

  if (props.status === "pending") {
    return <span className="is-warning">{props.status}</span>;
  }
  if (props.status === "expired") {
    return <span className="is-danger">{props.status}</span>;
  }

  const sidebarClasses = `${
    props.isToggled ? "slide-in-left" : "slide-out-right"
  }`;

  console.log("isToggled is: ", props.isToggled);

  return (
    <aside className={`notification-sidebar card ${sidebarClasses}`}>
      <div className="card-header">
        <h5>Recent Notifications</h5>
        <button onClick={props.onClick} className="delete"></button>
      </div>
      <div className="card-content">
        <ul>
          {notifications.map((notification) => {
            return (
              <li key={notifications.id} className="notification-item">
                <div className="card">
                  <button className="delete"></button>
                  <div className="card-header">
                    <span className="is-small">{notification.title}</span>
                    <span className="is-tiny">{createdAt}</span>
                  </div>
                  <div className="card-content">
                    <span className="is-small">{notification.title}</span>
                    <p className="is-small">{notification.message}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Notification;

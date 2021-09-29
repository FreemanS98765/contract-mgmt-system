import { useEffect } from "react";
import { useRef } from "react";

import OutsideClick from "../../hooks/outside-click";

const Notification = (props) => {
  let specialClasses = "";
  //const sidebar = useRef(null);
  //const outsideSidebar = OutsideClick(sidebar);

  if (props.status === "pending") {
    return <span className="is-warning">{props.status}</span>;
  }
  if (props.status === "expired") {
    return <span className="is-danger">{props.status}</span>;
  }

  const sidebarClasses = `${props.isToggled ? "slide-in-left" : "slide-out-right"}`;

  console.log("isToggled is: ", props.isToggled);

  return (
    <aside className={`notification-sidebar card ${sidebarClasses}`}>
      <div className="card-header">
        <h5>Recent Notifications</h5>
        <button onClick={props.onClick} className="delete"></button>
      </div>
      <div className="card-content">
        <ul>
          <li className="notification-item">
            <div className="card">
              <button
                className="delete"
              ></button>
              <div className="card-header">
                <span className="is-small">Some Title</span>
                <span className="is-small">2 days ago</span>
              </div>
              <div className="card-content">
                <span className="is-small">Some Title</span>
                <p className="is-small">Some Message</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Notification;

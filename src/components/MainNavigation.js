import { NavLink } from "react-router-dom";
import NotificationButton from "./UI/NotificationButton";

const MainNavigation = (props) => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink activeClassName="active" to="/dashboard">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/contracts">
            Contracts
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/events">
            Events
          </NavLink>
        </li>
        <li>
          <NotificationButton
            onShowNotification={props.onShowNotification}
            notifications={props.notifications}
          />
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;

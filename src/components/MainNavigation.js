import { NavLink } from "react-router-dom";

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
          <NavLink activeClassName="active" to="/new-contract">
            New Contract
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;

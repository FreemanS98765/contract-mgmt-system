import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>DanFree Design</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/dashboard">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/contracts">
              Contracts
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/new-contract">
              New Contract
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

import { Fragment } from "react";
import { Link } from "react-router-dom";

export const Breadcrumbs = (props) => {
  return (
    <nav
      className={`breadcrumb ${props.className ? props.className : ""}`}
      aria-label="breadcrumbs"
    >
      <ul>{props.children}</ul>
    </nav>
  );
};

export const BreadcrumbItem = (props) => {
  return (
    <Fragment>
      <li
        className={` ${props.className ? props.className : ""}`}
        aria-current={props.active ? "page" : undefined}
      >
        <Link
          className="is-active"
          to={props.to}
          title={props.title}
          target={props.target}
          {...props}
        >
          {props.children}
        </Link>
      </li>
    </Fragment>
  );
};

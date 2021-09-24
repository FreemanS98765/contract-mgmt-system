import { Fragment } from "react";

import TopBar from "./TopBar";
import Header from "./Header";

const Layout = (props) => {
  return (
    <Fragment>
      <TopBar />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;

import React, { Fragment, useState } from "react";
import { connect } from "react-redux";

import TopBar from "./TopBar";
import Header from "./Header";
import Notification from "./UI/Notification";

const Layout = (props) => {
  const notifications = props.notifications;
  const [notificationIsShown, setNotificationIsShown] = useState(false);

  const showNotifications = () => {
    setNotificationIsShown(true);
  };

  const hideNotifications = () => {
    setNotificationIsShown(false);
  };


  return (
    <Fragment>
      <TopBar
        onShowNotification={showNotifications}
        onHideNotification={hideNotifications}
        notifications={notifications}
      />
      <main>{props.children}</main>
      {notificationIsShown && (
        <Notification
          notifications={notifications}
          onClick={hideNotifications}
          isToggled={notificationIsShown}
        />
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    notifications: state.notifications,
  };
};

export default connect(mapStateToProps)(Layout);

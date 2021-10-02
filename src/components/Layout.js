import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

import TopBar from "./TopBar";
import Header from "./Header";
import Notification from "./UI/Notification-v1";
import ToastMsg from "./UI/ToastMsg";

const Layout = (props) => {
  const notifications = props.notifications;
  const [notificationIsShown, setNotificationIsShown] = useState(false);

  const showNotifications = () => {
    setNotificationIsShown(true);
  };

  const hideNotifications = () => {
    setNotificationIsShown(false);
  };

  const toastMsg = (notification) => {
    const title = notification.title;
    const msg = notification.message;
    const createdAt = notification.createdAt;

    return (
      <div className="card">
        <div className="card-header">
          <span className="is-small notification__title">{title}</span>
          <span className="is-tiny">{createdAt}</span>
        </div>
        <div className="card-content">
          <span className="is-small notification__title">{title}</span>
          <p className="is-small">{msg}</p>
        </div>
      </div>
    );
  };

  const showToast = () => {
    notifications.map((notification, index) => {
      return toast(<ToastMsg notification={notification} index={index} />, {
        position: "top-right",
        autoClose: true,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    });
  };

  const closeButton = ({ closeToast }) => (
    <button className="button" onClick={closeToast}>
      Close Notifications
    </button>
  );

  return (
    <Fragment>
      <TopBar
        onShowNotification={showNotifications}
        onHideNotification={hideNotifications}
        onShowToast={showToast}
        notifications={notifications}
      />
      <main>{props.children}</main>
      {/* {notificationIsShown && (
        <Notification
          notifications={notifications}
          onClick={hideNotifications}
          isToggled={notificationIsShown}
        />
      )} */}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        rtl={false}
        draggable
        pauseOnHover
        limit={5}
        containerId="notification-sidebar"
      />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    notifications: state.notifications,
  };
};

export default connect(mapStateToProps)(Layout);

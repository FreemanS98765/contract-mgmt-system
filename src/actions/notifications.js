import axios from "../axios/axios";

import {
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION,
  GET_NOTIFICATIONS,
  SHOW_NOTIFICATION,
  LOAD_NOTIFICATION_TABLE,
} from "../constants/ActionTypes";

const _addNotification = (notification) => ({
  type: ADD_NOTIFICATION,
  notification,
});

const initialState = {
  title: "",
  status: "",
  message: "",
};

export const addNotification =
  (notificationData = initialState) =>
  (dispatch) => {
    const notification = {
      title: notificationData.title,
      status: notificationData.status,
      message: notificationData.message,
    };

    return axios.post("notifications/add", notification).then((result) => {
      dispatch(_addNotification(result.data));
    });
  };

const _removeNotification = ({ id = {} }) => ({
  type: REMOVE_NOTIFICATION,
  id,
});

export const removeNotification = ({ id } = {}) => {
  return (dispatch) => {
    return axios.delete(`notifications/${id}`).then((res) => {
      dispatch(_removeNotification({ id }));
    });
  };
};

const _getNotifications = (notifications) => ({
  type: GET_NOTIFICATIONS,
  notifications,
});

export const getNotifications = (callback) => (dispatch, getState) => {
  return axios
    .get("notifications")
    .then((response) => {
      const notifications = [];

      response.data.forEach((item) => {
        notifications.push(item);
      });

      dispatch(_getNotifications(notifications));
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
    });
};

export const loadNotificationTable = (notifications) => ({
  type: LOAD_NOTIFICATION_TABLE,
  payload: notifications,
});

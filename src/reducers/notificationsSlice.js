import {
  ADD_NOTIFICATION,
  GET_NOTIFICATIONS,
  REMOVE_NOTIFICATION,
  LOAD_NOTIFICATION_TABLE,
} from "../constants/ActionTypes";

const initialState = {
  notificationObj: {
    notifications: [],
  },
};

export default function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return [...state, action.contract];
    case REMOVE_NOTIFICATION:
      return state.filter(({ id }) => id !== action.id);
    case LOAD_NOTIFICATION_TABLE:
      return {
        ...state,
        notifications: action.payload,
      };
    case GET_NOTIFICATIONS:
      return action.notifications;
    default:
      return state;
  }
}

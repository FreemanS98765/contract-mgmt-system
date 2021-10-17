import { combineReducers } from "redux";
import contractReducer from "../reducers/contractsSlice";
import eventReducer from "../reducers/eventsSlice";
import uploadReducer from "../reducers/uploadsSlice";
import notificationReducer from "../reducers/notificationsSlice";
import uiReducer from "../reducers/uiSlice";
import filtersReducer from "../reducers/filtersSlice";
import sortReducer from "../reducers/sortReducer";

export default combineReducers({
  contracts: contractReducer,
  events: eventReducer,
  notifications: notificationReducer,
  ui: uiReducer,
  filters: filtersReducer,
  uploads: uploadReducer,
  //sort: sortReducer,
});

import { combineReducers } from "redux";
import contractReducer from "../reducers/contractsSlice";
import eventReducer from "../reducers/eventsSlice";
import uploadReducer from "../reducers/uploadsSlice";
import pluginReducer from "../reducers/pluginsSlice";
import notificationReducer from "../reducers/notificationsSlice";
import uiReducer from "../reducers/uiSlice";
import filtersReducer from "../reducers/filtersSlice";
import sortReducer from "../reducers/sortReducer";

export default combineReducers({
  contracts: contractReducer,
  events: eventReducer,
  notifications: notificationReducer,
  plugins: pluginReducer,
  ui: uiReducer,
  filters: filtersReducer,
  uploads: uploadReducer,
  //sort: sortReducer,
});

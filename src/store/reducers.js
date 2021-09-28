import { combineReducers } from "redux";
import contractReducer from "../reducers/contractsSlice";
import eventReducer from "../reducers/eventsSlice";
import uiReducer from "../reducers/uiSlice";
import filtersReducer from "../reducers/filtersSlice";
import sortReducer from "../reducers/sortReducer";

export default combineReducers({
  contracts: contractReducer,
  events: eventReducer,
  ui: uiReducer,
  filters: filtersReducer,
  //sort: sortReducer,
});

import { combineReducers } from "redux";
import contractReducer from "../reducers/contractsSlice";
import uiReducer from "../reducers/uiSlice";
import filtersReducer from "../reducers/filtersSlice";
import sortReducer from "../reducers/sortReducer";

export default combineReducers({
  contracts: contractReducer,
  ui: uiReducer,
  filters: filtersReducer,
  //sort: sortReducer,
});

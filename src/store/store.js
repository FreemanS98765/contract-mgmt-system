import { createStore, applyMiddleware, combineReducers } from "redux";
import contractsReducer from "../reducers/contractsSlice";
import uiReducer from "../reducers/uiSlice";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  contractObj: contractsReducer,
  ui: uiReducer,
});

const middlewareEnhancer = applyMiddleware(thunk);

export default () => {
  return createStore(rootReducer, middlewareEnhancer);
};


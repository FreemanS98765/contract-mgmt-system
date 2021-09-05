import { createStore, applyMiddleware, combineReducers } from "redux";
import contractsReducer from "../reducers/contracts";
import uiReducer from "../reducers/ui-slice";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  contracts: contractsReducer,
  ui: uiReducer,
});

const middlewareEnhancer = applyMiddleware(thunk);

export default () => {
  return createStore(rootReducer, middlewareEnhancer);
};

//const store = createStore(rootReducer, initialState, middlewareEnhancer);

//const store = createStore(reducer, applyMiddleware(...middleware));

// import { configureStore } from "@reduxjs/toolkit";

// import counterReducer from "../features/counter/counterSlice";
// import uiReducer from "./ui-slice";

// const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//     ui: uiReducer,
//   },
// });

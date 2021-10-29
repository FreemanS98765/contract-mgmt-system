import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import configureStore from "./store/store";
import { getContracts } from "./actions/contracts";
import "./index.css";

import { Provider } from "react-redux";

import * as serviceWorker from "./serviceWorker";

const store = configureStore();

const Root = (
  <Provider store={store}>
    <App />
  </Provider>
);

store.dispatch(getContracts()).then(() => {
  ReactDOM.render(Root, document.getElementById("root"));
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

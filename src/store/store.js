import { compose, createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { getContracts } from "../actions/contracts";
import { getEvents } from "../actions/events";

//const middlewareEnhancer = applyMiddleware(thunk);

// export default () => {
//   return createStore(rootReducer, middlewareEnhancer);
// };

const configureStore = (preloadedState) => {
  const middleware = [thunk];

  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(...middleware)
      /* window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__() */
    )
  );

  store.dispatch(getEvents());

  store.subscribe(() => {
    const state = store.getState();
    const persist = {
      contracts: state.contracts,
      events: state.events,
      isLoading: state.isLoading,
    };

    window.localStorage.setItem("state", JSON.stringify(persist));
  });

  return store;
};

export default configureStore;

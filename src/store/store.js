import { compose, createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

const middlewareEnhancer = applyMiddleware(thunk);

export default () => {
  return createStore(rootReducer, middlewareEnhancer);
};

// export default initialState => {

//   const middleware = [thunk];

//   const store = createStore(
//     rootReducer,
//     initialState,
//     compose(
//       applyMiddleware(...middleware)
//       /* window.__REDUX_DEVTOOLS_EXTENSION__ &&
//         window.__REDUX_DEVTOOLS_EXTENSION__() */
//     )
//   );

//   store.subscribe(() => {
//     const state = store.getState();
//     const persist = {
//       contracts: state.contracts,
//       isLoading: state.isLoading,
//     };

//     window.localStorage.setItem("state", JSON.stringify(persist));
//   });

//   return store;
// };

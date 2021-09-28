import { COMBINE_ACTIONS } from "../constants/ActionTypes";

const combineReducer = (store) => (next) => (action) => {
  switch (action.type) {
    case COMBINE_ACTIONS: {
      next(action);
      const results = action.payload.actions.map((a) => store.dispatch(a));
      return results;
    }

    default:
      return next(action);
  }
};

import { ADD_PLUGIN } from "../constants/ActionTypes";

const initialState = {
  plugins: [],
};

export default function eventReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PLUGIN:
      return [...state, action.event];

    default:
      return state;
  }
}

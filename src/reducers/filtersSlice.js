import { UPDATE_FILTER } from "../filters/actionTypes";

const initialState = {
  items: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_FILTER:
      return {
        ...state,
        items: {
          ...state.filters,
          status: action.payload,
        },
      };
    default:
      return state;
  }
}

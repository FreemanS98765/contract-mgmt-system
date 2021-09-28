import {
  ADD_EVENT,
  EDIT_EVENT,
  FETCH_EVENT,
  GET_EVENTS,
  LOAD_EVENTS_TABLE,
  REMOVE_EVENT,
} from "../constants/ActionTypes";

const initialState = {
  eventObj: {
    events: [],
    isLoading: false,
  },
};

export default function eventReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_EVENT:
      return [...state, action.event];
    case REMOVE_EVENT:
      return state.filter(({ id }) => id !== action.id);
    case FETCH_EVENT:
      return state.filter(({ id }) => id === action.id);
    case EDIT_EVENT:
      return state.map((event) => {
        if (event.id === action.id) {
          return {
            ...event,
            ...action.updates,
          };
        } else {
          return event;
        }
      });
    case LOAD_EVENTS_TABLE:
      return {
        ...state,
        events: action.payload,
        isLoading: true,
      };
    case GET_EVENTS:
      return action.events;
    default:
      return state;
  }
}

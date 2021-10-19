import {
  ADD_UPLOAD,
  EDIT_UPLOAD,
  GET_UPLOADS,
  LOAD_UPLOADS_TABLE,
  REMOVE_UPLOAD,
} from "../constants/ActionTypes";

const initialState = {
  uploadObj: {
    uploads: [],
  },
};

export default function uploadsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_UPLOAD:
      return [...state, action.upload];
    case REMOVE_UPLOAD:
      return state.filter(({ id }) => id !== action.id);
    case EDIT_UPLOAD:
      return state.map((upload) => {
        if (upload.id === action.id) {
          return {
            ...upload,
            ...action.updates,
          };
        } else {
          return upload;
        }
      });
    case LOAD_UPLOADS_TABLE:
      return {
        ...state,
        uploads: action.payload,
      };
    case GET_UPLOADS:
      return action.uploads;
    default:
      return state;
  }
}

const modalReducerDefaultState = {
  modalIsVisible: false
};

export default (state = modalReducerDefaultState, action) => {
  switch (action.type) {
    case "TOGGLE_MODAL":
      return {
        ...state,
        modalIsVisible: !state.modalIsVisible,
      };
    default:
      return state;
  }
};


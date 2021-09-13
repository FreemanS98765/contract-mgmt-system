import TOGGLE_MODAL from "../constants/ActionTypes";

const initialModalState = {
  contractModal: [
    {
      contractModalIsVisible: false,
    },
  ],
};

const modalReducer = (state = initialModalState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      const newIsToggled = !state.contractModal.contractModalIsVisible;
      const updatedToggleState = {
        ...state.contractModal,
        contractModalIsVisible: newIsToggled,
      };
      return {
        ...state,
        contractModal: updatedToggleState,
      };

    default:
      return state;
  }
};

export default modalReducer;

// export const TOGGLE_MODAL = "TOGGLE_MODAL";

// export const toggleModal = isToggled => {
//   return { type: TOGGLE_MODAL, contractModalIsVisible: isToggled }
// }

const modalReducerDefaultState = {
  contractModalIsVisible: false
};

export default (state = modalReducerDefaultState, action) => {
  switch (action.type) {
    case "TOGGLE_MODAL":
      return {
        ...state,
        contractModalIsVisible: !state.contractModalIsVisible,
      };
    default:
      return state;
  }
};


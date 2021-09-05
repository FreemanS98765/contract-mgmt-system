import { TOGGLE_MODAL } from "../actions/newContractModal";

const initialContractState = [];

const contractReducer = (state = initialContractState, action) => {
  switch (action.type) {
    case "ADD_CONTRACT":
      return [...state, action.contract];
    case "REMOVE_CONTRACT":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_CONTRACT":
      return state.map((contract) => {
        if (contract.id === action.id) {
          return {
            ...contract,
            ...action.updates,
          };
        } else {
          return contract;
        }
      });
    case "GET_CONTRACTS":
      return action.contracts;
    default:
      return state;
  }
};

// const initialModalState = {
//   contractModal: [
//     {
//       contractModalIsVisible: false,
//     },
//   ],
// };

// const modalReducer = (state = initialModalState, action) => {
//   switch (action.type) {
//     case TOGGLE_MODAL:
//       const newIsToggled = !state.contractModal.contractModalIsVisible;
//       const updatedToggleState = {
//         ...state.contractModal,
//         contractModalIsVisible: newIsToggled,
//       };
//       return {
//         ...state,
//         contractModal: updatedToggleState,
//       };

//     default:
//       return state;
//   }
// };

export default contractReducer;

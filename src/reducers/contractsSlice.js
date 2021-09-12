import {
  RECEIVE_CONTRACTS,
  REQUEST_CONTRACTS,
  GET_CONTRACTS,
} from "../constants/ActionTypes";

//const initialContractState = [];
const initialLoadingState = {
  contracts: [],
  isLoading: false,
  addItem: (item) => {},
  removeItem: (id) => {},
};

export default function contractReducer(state = initialLoadingState, action) {
  switch (action.type) {
    case "ADD_CONTRACT":
      console.log("Add contract info: ", state);
      return [...state, action.contract];
    case "REMOVE_CONTRACT":
      console.log("Remove Contract info: ", action.id);
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
    // case REQUEST_CONTRACTS:
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };
    // case RECEIVE_CONTRACTS:
    //   return {
    //     contracts: action.contracts,
    //     isLoading: state.isLoading,
    //   };
    case GET_CONTRACTS:
      return action.contracts;

    default:
      return state;
  }
}
// export default function contractReducer(state = initialLoadingState, action) {
//   switch (action.type) {
//     case "ADD_CONTRACT":
//       return [...state, action.contract];
//     case "REMOVE_CONTRACT":
//       return state.filter(({ id }) => id !== action.id);
//     case "EDIT_CONTRACT":
//       return state.map((contract) => {
//         if (contract.id === action.id) {
//           return {
//             ...contract,
//             ...action.updates,
//           };
//         } else {
//           return contract;
//         }
//       });
//     case "GET_CONTRACTS":
//       return {
//         contracts: action.contracts,
//         isLoading: state.isLoading,
//       };

//     default:
//       return state;
//   }
// }

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

import { ADD_CONTRACT, EDIT_CONTRACT, FETCH_CONTRACT, GET_CONTRACTS, LOAD_TABLE, REMOVE_CONTRACT } from "../constants/ActionTypes";

//const initialContractState = [];
const initialState = {
  contractObj: {

    contracts: [],
    isLoading: false,
  }
};

export default function contractReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CONTRACT:
      return [...state, action.contract];
    case REMOVE_CONTRACT:
      return state.filter(({ id }) => id !== action.id);
    case FETCH_CONTRACT:
      return state.filter(({id}) => id === action.id)
    case EDIT_CONTRACT:
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
    case LOAD_TABLE:
      return {
        ...state,
        contracts: action.payload,
        isLoading: true,
      };
    case GET_CONTRACTS:
      return action.contracts
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

import { setNestedObjectValues } from "formik";
import axios from "../axios/axios";
import { ADD_CONTRACT, GET_CONTRACTS } from "../constants/ActionTypes";

const _addContract = (contract) => ({
  type: ADD_CONTRACT,
  contract,
});

const initialState = {
  client: "",
  company: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zipcode: "",
  title: "",
  startDate: "",
  endDate: "",
  price: 0,
  notes: "",
  upload: "",
  status: "",
};

export const addContract =
  (contractData = initialState) =>
  (dispatch) => {
    const contract = {
      client: contractData.client,
      company: contractData.company,
      email: contractData.email,
      phone: contractData.phone,
      address: contractData.address,
      city: contractData.city,
      state: contractData.state,
      zipcode: contractData.zipcode,
      title: contractData.title,
      startDate: contractData.startDate,
      endDate: contractData.endDate,
      price: contractData.price,
      notes: contractData.notes,
      upload: contractData.upload,
      status: contractData.status,
    };

    return axios.post("contracts/add", contract).then((result) => {
      dispatch(_addContract(result.data));
    });
  };

//export const addContract = (contractData)

// export const addContract = (contractData) => {
//   return (dispatch) => {
//     const contract = {
//       client: contractData.client,
//       company: contractData.company,
//       email: contractData.email,
//       phone: contractData.phone,
//       address: contractData.address,
//       city: contractData.city,
//       state: contractData.state,
//       zipcode: contractData.zipcode,
//       title: contractData.title,
//       startDate: contractData.startDate,
//       endDate: contractData.endDate,
//       price: contractData.price,
//       notes: contractData.notes,
//       upload: contractData.upload,
//       status: contractData.status,
//     };

//     return axios.post("contracts/add", contract).then((result) => {
//       dispatch(_addContract(result.data));
//     });
//   };
// };

const _removeContract = (id) => ({
  type: "REMOVE_CONTRACT",
  id,
});

export const removeContract = (itemId) => {
  return (dispatch) => {
    return axios.delete("contracts/", {params: {id: itemId}}).then((res) => {
      console.log("Remove contract by id: ", itemId);
      dispatch(_removeContract(itemId));
      
    });
  };
};

const _editContract = (id, updates) => ({
  type: "EDIT_CONTRACT",
  id,
  updates,
});

export const editContract = (id, updates) => {
  return (dispatch) => {
    return axios.put(`contracts/${id}`, updates).then(() => {
      dispatch(_editContract(id, updates));
    });
  };
};

const _getContracts = (contracts, loading) => ({
  type: GET_CONTRACTS,
  contracts,
  isLoading: true,
});

// export const _requestContracts = (contracts) => ({
//   type: "REQUEST_CONTRACTS",
//   contracts,
//   isLoading: true,
// });

// const _receiveContracts = (contracts) => ({
//   type: "RECEIVE_CONTRACTS",
//   contracts,
//   receivedAt: Date.now(),
//   isLoading: false,
// });

export const getContracts = () => (dispatch, getState) => {
  return axios
    .get("contracts")
    .then((response) => {
      const contracts = [];

      console.log(contracts);

      response.data.forEach((item) => {
        contracts.push(item);
      });

      dispatch(_getContracts(contracts));
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
    });
};

// Initiate a network request with redux-thunk.
// Create an action creator, getContracts
// export const fetchContracts = (contracts) => (dispatch) => {
//   dispatch(_requestContracts(contracts));
//   return axios
//     .get("contracts")
//     .then((response) => {
//       //const contracts = [];

//       // if (response.status !== 200) {
//       //   throw new Error(response.message || "Could not fetch contracts.");
//       // }

//       // response.data.forEach((item) => {
//       //   contracts.push(item);
//       // });

//       dispatch(_receiveContracts(contracts));
//     })
//     .catch((error) => {
//       if (error.response) {
//         console.log(error.response.data);
//       } else if (error.request) {
//         console.log(error.request);
//       } else {
//         console.log("Error", error.message);
//       }
//     });
// };

const shouldFetchContracts = (state, contracts) => {
  const allContracts = state.contractsBySubreddit[contracts];
  if (!contracts) {
    return true;
  }
  if (contracts.isLoading) {
    return false;
  }
  return contracts.didInvalidate;
};

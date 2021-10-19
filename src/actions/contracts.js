import axios from "../axios/axios";
import {
  ADD_CONTRACT,
  GET_CONTRACTS,
  REMOVE_CONTRACT,
  FETCH_CONTRACT,
  LOAD_TABLE,
  EDIT_CONTRACT,
} from "../constants/ActionTypes";

const _addContract = (contract) => ({
  type: ADD_CONTRACT,
  contract,
});

const initialState = {
  slug: "",
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
      slug: contractData.slug,
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

    return axios
      .post("contracts/add", contract)
      .then((result) => {
        dispatch(_addContract(result.data));
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      });
  };

const _removeContract = ({ id = {} }) => ({
  type: REMOVE_CONTRACT,
  id,
});

export const removeContract = ({ id } = {}) => {
  return (dispatch) => {
    return axios.delete(`contracts/${id}`).then((res) => {
      dispatch(_removeContract({ id }));
    });
  };
};

const _fetchContract = (id) => ({
  type: FETCH_CONTRACT,
  id,
});

export const fetchContract =
  ({ id } = {}) =>
  (dispatch) => {
    return axios.get(`contracts/${id}`).then((res) => {
      dispatch(_fetchContract({ id }));
    });
  };

const _editContract = (id, updates) => ({
  type: EDIT_CONTRACT,
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

export const getContracts = (callback) => (dispatch, getState) => {
  return axios
    .get("contracts")
    .then((response) => {
      const contracts = [];

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

export const loadTable = (contracts) => ({
  type: LOAD_TABLE,
  payload: contracts,
});

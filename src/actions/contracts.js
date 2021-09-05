import axios from "../axios/axios";

const _addContract = (contract) => ({
  type: "ADD_CONTRACT",
  contract,
});

export const addContract = (
  contractData = {
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
  }
) => {
  return (dispatch) => {
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

    return axios
      .post("contracts/add", contract)
      .then((result) => {
        dispatch(_addContract(result.data));
        console.log(`this is the result data: result.data`);
      })
      .catch(function (error) {
        console.log(`Add error -> ${error.response.data}`);
      });
  };
};

const _removeContract = ({ id } = {}) => ({
  type: "REMOVE_CONTRACT",
  id,
});

export const removeContract = ({ id } = {}) => {
  return (dispatch) => {
    return axios.delete(`contracts/${id}`).then(() => {
      dispatch(_removeContract({ id }));
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

const _getContracts = (contracts) => ({
  type: "GET_CONTRACTS",
  contracts,
});

export const getContracts = () => {
  return (dispatch) => {
    return axios.get("contracts").then((result) => {
      const contracts = [];

      result.data.forEach((item) => {
        contracts.push(item);
      });

      dispatch(_getContracts(contracts));
    });
  };
};

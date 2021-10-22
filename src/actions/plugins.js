import axios from "../axios/axios";
import { ADD_PLUGIN } from "../constants/ActionTypes";

const _addPlugin = (plugin) => ({
  type: ADD_PLUGIN,
  plugin,
});

const initialState = {
  title: "",
  price: 0,
  orderDate: "",
  renewalDate: "",
  status: "",
};

export const addPlugin =
  (pluginData = initialState) =>
  (dispatch) => {
    const plugin = {
      title: pluginData.title,
      price: pluginData.price,
      orderDate: pluginData.orderDate,
      renewalDate: pluginData.renewalDate,
      status: pluginData.status,
    };

    return axios.post("plugins/add", plugin).then((result) => {
      dispatch(_addPlugin(result.data));
    });
  };

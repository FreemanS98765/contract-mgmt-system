import axios from "../axios/axios";
import { ADD_PLUGIN, GET_PLUGINS } from "../constants/ActionTypes";

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

const _getPlugins = (plugins, loading) => ({
  type: GET_PLUGINS,
  plugins,
});

export const getPlugins = (callback) => (dispatch, getState) => {
  return axios
    .get("plugins")
    .then((response) => {
      const plugins = [];

      response.data.forEach((item) => {
        plugins.push(item);
      });

      dispatch(_getPlugins(plugins));
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

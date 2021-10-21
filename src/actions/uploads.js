import axios from "../axios/axios";
import {
  ADD_UPLOAD,
  GET_UPLOADS,
  REMOVE_UPLOAD,
  EDIT_UPLOAD,
  LOAD_UPLOADS_TABLE,
} from "../constants/ActionTypes";

const initialState = {
  filename: "",
  files: null,
  path: "",
};

let formData = new FormData();

const config = {
  headers: { "Content-Type": "multipart/form-data" },
  onUploadProgress: (progressEvent) => {
    console.log((progressEvent.loaded / progressEvent.total) * 100 + "%");
  },
};

const _addUpload = (upload) => ({
  type: ADD_UPLOAD,
  upload,
});

export const addUpload =
  (uploadData = initialState) =>
  async (dispatch) => {
    formData.append("filename", uploadData.filename);
    formData.append("files", uploadData.files);
    formData.append("path", uploadData.path);

    console.log("Upload is: ", uploadData);

    try {
      const result = await axios.post("uploads/add", formData, config);
      console.log("result is: ", result);
      dispatch(_addUpload(result.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
    }
  };

const _removeUpload = ({ id = {} }) => ({
  type: REMOVE_UPLOAD,
  id,
});

export const removeUpload = ({ id } = {}) => {
  return (dispatch) => {
    return axios.delete(`uploads/${id}`).then((res) => {
      dispatch(_removeUpload({ id }));
    });
  };
};

const _editUpload = (id, updates) => ({
  type: EDIT_UPLOAD,
  id,
  updates,
});

export const editUpload = (id, updates) => {
  return (dispatch) => {
    return axios.put(`uploads/${id}`, updates).then(() => {
      dispatch(_editUpload(id, updates));
    });
  };
};

const _getUploads = (uploads, loading) => ({
  type: GET_UPLOADS,
  uploads,
});

export const getUploads = (callback) => (dispatch, getState) => {
  return axios
    .get("uploads")
    .then((response) => {
      const uploads = [];

      response.data.forEach((item) => {
        uploads.push(item);
      });

      dispatch(_getUploads(uploads));
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

export const loadUploadsTabls = (uploads) => ({
  type: LOAD_UPLOADS_TABLE,
  payload: uploads,
});

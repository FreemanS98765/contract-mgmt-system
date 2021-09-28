import { setNestedObjectValues } from "formik";
import axios from "../axios/axios";
import {
  ADD_EVENT,
  GET_EVENTS,
  REMOVE_EVENT,
  FETCH_EVENT,
  LOAD_EVENTS_TABLE,
  EDIT_EVENT,
} from "../constants/ActionTypes";

const _addEvent = (event) => ({
  type: ADD_EVENT,
  event,
});

const initialState = {
  event: "",
  client: "",
  company: "",
  isSingleDay: false,
  startDate: "",
  startTime: "",
  endDate: "",
  endTime: "",
  eventItems: '',
  notes: "",
  lastYearsPrice: "",
  upload: "",
  status: "",
};

export const addEvent =
  (eventData = initialState) =>
  (dispatch) => {
    const event = {
      event: eventData.event,
      client: eventData.client,
      company: eventData.company,
      isSingleDay: eventData.isSingleDay,
      startDate: eventData.startDate,
      startTime: eventData.startTime,
      endDate: eventData.endDate,
      endTime: eventData.endTime,
      lastYearsPrice: eventData.lastYearsPrice,
      eventItems: eventData.eventItems,
      notes: eventData.notes,
      upload: eventData.upload,
      status: eventData.status,
    };

    return axios.post("events/add", event).then((result) => {
      dispatch(_addEvent(result.data));
    });
  };

const _removeEvent = ({ id = {} }) => ({
  type: REMOVE_EVENT,
  id,
});

export const removeEvent = ({ id } = {}) => {
  return (dispatch) => {
    return axios.delete(`events/${id}`).then((res) => {
      dispatch(_removeEvent({ id }));
    });
  };
};

const _fetchEvent = (id) => ({
  type: FETCH_EVENT,
  id,
});

export const fetchEvent =
  ({ id } = {}) =>
  (dispatch) => {
    return axios.get(`events/${id}`).then((res) => {
      dispatch(_fetchEvent({ id }));
    });
  };

const _editEvent = (id, updates) => ({
  type: EDIT_EVENT,
  id,
  updates,
});

export const editEvent = (id, updates) => {
  return (dispatch) => {
    return axios.put(`events/${id}`, updates).then(() => {
      dispatch(_editEvent(id, updates));
    });
  };
};

const _getEvents = (events, loading) => ({
  type: GET_EVENTS,
  events,
  isLoading: true,
});

export const getEvents = (callback) => (dispatch, getState) => {
  return axios
    .get("events")
    .then((response) => {
      const events = [];

      response.data.forEach((item) => {
        events.push(item);
      });

      dispatch(_getEvents(events));
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

export const loadEventsTable = (events) => ({
  type: LOAD_EVENTS_TABLE,
  payload: events,
});

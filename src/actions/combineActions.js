import axios from "../axios/axios";

import { getContracts } from "./contracts";
import { getEvents } from "./events";
import { COMBINE_ACTIONS } from "../constants/ActionTypes";

const combineActions = (actions, meta = {}) => ({
  type: COMBINE_ACTIONS,
  payload: { actions },
  meta,
});

export default combineActions;

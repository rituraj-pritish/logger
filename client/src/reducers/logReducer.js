import {
  GET_LOGS,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  LOGS_ERROR,
  SET_FILTERED,
  CLEAR_FILTERED
} from '../actions/types';

const initialState = {
  logs: null,
  current: null,
  loading: true,
  error: null,
  filtered: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_LOGS:
      return {
        ...state,
        logs: payload,
        loading: false,
        error: null
      };
    case ADD_LOG:
      return {
        ...state,
        logs: [payload, ...state.logs],
        error: null
      };
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter(log => log._id !== payload),
        error: null,
        loading: false
      };
    case UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map(log => {
          if (log._id === payload._id) return payload;
          return log;
        }),
        error: null,
        loading: false
      };
    case SET_FILTERED:
      return {
        ...state,
        filtered: state.logs.filter(log => {
          const regex = new RegExp(`${payload}`, 'gi');
          return log.message.match(regex) || log.technician.match(regex);
        })
      };
    case CLEAR_FILTERED:
      return {
        ...state,
        filtered: null
      };
    case SET_CURRENT:
      return {
        ...state,
        current: state.logs.find(log => log._id === payload),
        loading: false,
        error: null
      };
    case LOGS_ERROR:
      console.error(payload);
      return {
        ...state,
        error: payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
        loading: false
      };
    default:
      return state;
  }
};

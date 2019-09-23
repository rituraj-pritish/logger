import {
  GET_LOGS,
  SET_LOADING,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  CLEAR_LOGS,
  LOGS_ERROR,
  SEARCH_LOGS
} from '../actions/types';
import { setCurrent } from '../actions/logs';

const initialState = {
  logs: null,
  current: null,
  loading: true,
  error: null
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
        logs: [...state.logs, payload],
        error: null
      };
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter(log => log.id !== payload),
        error: null,
        loading: false
      };
    case UPDATE_LOG:
      return {
        ...state,
        logs: 
          state.logs.map(log => {
            if (log.id === payload.id) return payload;
            return log;
          })
        ,
        error: null,
        loading: false
      };
    case SEARCH_LOGS:
      return{
        ...state,
        logs: payload
      }
    case SET_CURRENT:
      return {
        ...state,
        current: state.logs.find(log => log.id === payload),
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

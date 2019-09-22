import {
  GET_LOGS,SET_LOADING,ADD_LOG,DELETE_LOG,SET_CURRENT,CLEAR_CURRENT,UPDATE_LOG,CLEAR_LOGS,LOGS_ERROR,SEARCH_LOGS
} from '../actions/types'
import { setCurrent } from '../actions/logs';

const initialState = {
  logs: null,
  current: null,
  loading: true,
  error: null
}

export default (state=initialState,action) => {
  const {type,payload} = action
  switch(type) {
    case GET_LOGS:
      return {
        ...state,
        logs: payload,
        loading: false,
        error: null
      }
    case ADD_LOG:
      return{
        ...state,
        logs: [...state.logs,payload],
        error: null
      }
    case SET_LOADING:
      return {
        ...state,
        loading: false
      }
    case SET_CURRENT:
      return {
        ...state,
        current: state.logs.find(log => log.id === payload),
        loading: false,
        error: null
      }
    case LOGS_ERROR:
      console.error(payload)
      return {
        ...state,
        error: payload
      }
    default:
      return state;
  }
}
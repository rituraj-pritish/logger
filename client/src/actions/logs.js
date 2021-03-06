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
} from './types';

export const getLogs = () => async dispatch => {
  try {
    const res = await fetch('/logs');
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    });
  }
};

export const addLog = log => async dispatch => {
  try {
    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json();

    dispatch({
      type: ADD_LOG,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    });
  }
};

export const deleteLog = id => async dispatch => {
  try {
    fetch(`/logs/${id}`, {
      method: 'DELETE'
    });
    dispatch({
      type: DELETE_LOG,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    });
  }
};

export const updateLog = log => async dispatch => {
  try {
    const res = await fetch(`/logs/${log._id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json();

    dispatch({
      type: UPDATE_LOG,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    });
  }
};

export const filterLogs = text => ({
  type: SET_FILTERED,
  payload: text
});

export const clearFiltered = () => ({
  type: CLEAR_FILTERED
});

export const setCurrent = id => ({
  type: SET_CURRENT,
  payload: id
});

export const clearCurrent = () => ({
  type: CLEAR_CURRENT
});

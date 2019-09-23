import { GET_TECHS, ADD_TECH, DELETE_TECH, TECHS_ERROR } from './types';

export const getTechs = () => async dispatch => {
  try {
    const res = await fetch('/technicians');
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.data
    });
  }
};

export const addTech = tech => async dispatch => {
  try {
    const res = await fetch('/technicians', {
      method: 'POST',
      body: JSON.stringify(tech),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_TECH,
      payload: data
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.data
    });
  }
};

export const deleteTech = id => async dispatch => {
  try {
    await fetch(`/technicians/${id}`, {
      method: 'DELETE'
    });

    dispatch({
      type: DELETE_TECH,
      payload: id
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.data
    });
  }
};

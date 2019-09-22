import {GET_TECHS,ADD_TECH,DELETE_TECH,TECHS_ERROR} from './types';

export const getTechs = () => async dispatch => {
  try {
    const res = await fetch('/technicians');
    const data = await res.json()

    dispatch({
      type: GET_TECHS,
      payload: data
    })
  } catch (err) {
    console.error(err)
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.data
    })
  }
}
import {GET_TECHS,ADD_TECH,DELETE_TECH,TECHS_ERROR} from '../actions/types';
import { getTechs } from '../actions/techs';

const initialState = {
  techs: null,
  loading: true,
  error: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_TECHS:
      return{
        ...state,
        techs: payload,
        loading: false,
        error: null
      }
    case TECHS_ERROR:
      return{
        ...state,
        techs: null,
        loading: false,
        error: payload
      }
    default:
      return state;
  }
};

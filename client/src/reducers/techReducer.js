import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  TECHS_ERROR
} from '../actions/types';

const initialState = {
  techs: null,
  loading: true,
  error: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_TECHS:
      return {
        ...state,
        techs: payload,
        loading: false,
        error: null
      };
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, payload],
        loading: false
      };
    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter(tech => tech._id !== payload)
      };
    case TECHS_ERROR:
      return {
        ...state,
        techs: null,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};

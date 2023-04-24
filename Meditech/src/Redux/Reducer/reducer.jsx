import { POST_RESERVE, POST_RESERVE_ERROR, GET_DOCTORS, GET_DETAIL  } from '../Actions/actions-types';
import {
  SIGNIN_USER,
  SIGNUP_USER,
  CLEAN_DETAIL,
} from '../Actions/Actionslogin';

const initialState = {
  reserva: [],
  reviews: [],
  detail: [],
  doctors: [],
  loading: false,
  error: '',
  userInfo: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_RESERVE:
      return {
        ...state,
        reserva: [...state.reserva, action.payload],
        loading: false,
        error: null,
      };
    case POST_RESERVE_ERROR:
      return {
        ...state,
        reserva: [...state.reserva, action.payload],
        loading: false,
        error: action.payload,
      };
    case SIGNIN_USER:
      return {
        ...state,
        userInfo: action.payload,
      };
    case SIGNUP_USER:
      return {
        ...state,
        userInfo: action.payload,
      };
    case CLEAN_DETAIL:
      return {
        ...state,
        userInfo: {},
      };
    case GET_DOCTORS:
    return{
        ...state,
        doctors: action.payload
    }
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;

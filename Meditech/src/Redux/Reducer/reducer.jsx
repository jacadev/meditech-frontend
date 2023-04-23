import { POST_RESERVE, POST_RESERVE_ERROR } from '../Actions/actions-types';
import {
  SIGNIN_USER,
  SIGNUP_USER,
  CLEAN_DETAIL,
} from '../Actions/Actionslogin';

const initialState = {
  reserva: [],
  reviews: [],
  doctor: {},
  loading: false,
  error: null,
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
      case FETCH_DOCTOR_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_DOCTOR_SUCCESS:
        return {
          ...state,
          loading: false,
          doctor: action.payload,
          error: "",
        };
      case FETCH_DOCTOR_FAILURE:
        return {
          ...state,
          loading: false,
          doctor: {},
          error: action.payload,
        };
    default:
      return state;
  }
};

export default rootReducer;

import { POST_RESERVE, POST_RESERVE_ERROR,FORM_DATA, GET_DOCTOR, CLEAN_DATAIL_ID } from '../Actions/actions-types';
import {
  SIGNIN_USER,
  SIGNUP_USER,
  CLEAN_DETAIL,
} from '../Actions/Actionslogin';

const initialState = {
  reserva: [],
  loading: false,
  error: null,
  userInfo: {},
  objeto:{},
  doctorDetail: []
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
      case FORM_DATA:
        return {
          ...state,
          objeto: action.payload,
        };
        case GET_DOCTOR: 
        return {
          ...state,
          doctorDetail: action.payload
        };
      case CLEAN_DATAIL_ID:
        return {
          ...state,
          doctorDetail: {}
        }
    default:
      return state;
  }
};

export default rootReducer;
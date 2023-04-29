import {
  POST_RESERVE,
  POST_RESERVE_ERROR,
  FORM_DATA,
  GET_DOCTOR,
  CLEAN_DATAIL_ID,
  GET_ESPECIALIDADES,
  GET_DOCTORS,
  GET_DOCTORS_NAME,
} from "../Actions/actions-types";
import {
  SIGNIN_USER,
  SIGNUP_USER,
  CLEAN_DETAIL,
  USERGOOGLE_DATA,
} from "../Actions/Actionslogin";

const initialState = {
  reserva: [],
  loading: false,
  error: null,
  userInfo: {},
  objeto: {},
  doctorDetail: [],
  especialidades: [],
  doctors: [],
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
        doctorDetail: action.payload,
      };
    case CLEAN_DATAIL_ID:
      return {
        ...state,
        doctorDetail: {},
      };
    case GET_ESPECIALIDADES:
      return {
        ...state,
        especialidades: action.payload,
      };
    case USERGOOGLE_DATA:
      return {
        ...state,
        userInfo: action.payload,
      };
    case GET_DOCTORS:
      return {
        ...state,
        doctors: action.payload,
      };
    case GET_DOCTORS_NAME:
      return {
        ...state,
        doctors: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;

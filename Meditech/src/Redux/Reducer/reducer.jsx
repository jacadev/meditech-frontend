import {
  POST_RESERVE,
  POST_RESERVE_ERROR,
  FORM_DATA,
  GET_DOCTOR,
  CLEAN_DATAIL_ID,
  GET_ESPECIALIDADES,
  GET_DOCTORS,
  GET_DOCTORS_NAME,
  GET_APPOINTMENT_PATIENT, 
  GET_PATIENT, 
  GET_SPECIALTIES,
  GET_ALL_PATIENTS,
  GET_ALL_PATIENTS_BY_NAME
} from "../Actions/actions-types";
import {
  SIGNIN_USER,
  SIGNUP_USER,
  USER_SETTINGS,
  CLEAN_DETAIL,
  USERGOOGLE_DATA,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_FAILURE,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAILURE,
  RESET_SUCCESS,
} from '../Actions/Actionslogin';

const initialState = {
  reserva: [],
  loading: false,
  error: null,
  success: false,
  userInfo: {},
  objeto: {},
  doctorDetail: [],
  especialidades: [],
  doctors: [],
  appointmentOfPatientID:[], // aca se guardan los datos del paciente que se traen de la DB para el componente que se encarga de visualizar las citas del paciente 
  infoPatient: [],
  specialties: [],
  patients: [],
  data:null
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
    case USER_SETTINGS:
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
      console.log('modificando el doctor', action.payload);
      return {
        ...state,
        doctorDetail: action.payload,
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
      case CLEAN_DATAIL_ID:
        console.log('si se esta limpiando');
        return {
          ...state,
          doctorDetail: [],
          appointmentOfPatientID: [],
          infoPatient: []
        };
        case RESET_SUCCESS:
          return {
            ...state,
            success: false,
          };
      case USERGOOGLE_DATA:
        return {
          ...state,
          userInfo: action.payload,
        }
      case FORGOT_PASSWORD_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FORGOT_PASSWORD_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
        };
      case FORGOT_PASSWORD_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case PASSWORD_RESET_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          data:action.payload
        };
      case PASSWORD_RESET_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case GET_DOCTORS:
        return {
          ...state,
          doctors: action.payload
        }
      case GET_DOCTORS_NAME:
        return {
          ...state,
          doctors: action.payload
        }
      case GET_APPOINTMENT_PATIENT:
        return {
          ...state,
          appointmentOfPatientID: action.payload
        }
      case GET_PATIENT:
        return {
          ...state,
          infoPatient: action.payload
        }
      case GET_SPECIALTIES:
        return {
          ...state,
          specialties: action.payload
        }
      case GET_ALL_PATIENTS:
        return {
          ...state,
          patients: action.payload
        }
      case GET_ALL_PATIENTS_BY_NAME:
        return {
          ...state,
          patients: action.payload
        }
    default:
      return state;
  }
};

export default rootReducer;


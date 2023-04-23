import { POST_RESERVE, POST_RESERVE_ERROR, ADD_REVIEW, GET_REVIEWS, FETCH_DOCTOR_FAILURE, FETCH_DOCTOR_REQUEST, FETCH_DOCTOR_SUCCESS } from "../Actions/actions-types";

const initialState = {
    reserva: [],
    reviews: [],
    doctor: {},
    loading: false,
    error: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case POST_RESERVE:
        // En este caso, la acción simplemente devuelve los datos del formulario
        // como parte del payload. Así que simplemente los guardamos en el estado.
        return {
          ...state,
          reserva: [...state.reserva, action.payload],
          loading: false,
          error: null,
        };
      case POST_RESERVE_ERROR:
        return{
          ...state,
          reserva: [...state.reserva, action.payload],
          loading: false,
          error: action.payload,
        }
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
        // case ADD_REVIEW:
        //   return {
        //     ...state,
        //     reviews: [...state.reviews, action.payload]
        //   };
        // case GET_REVIEWS:
        //   return {
        //     ...state,
        //     reviews: [...state.reviews, action.payload]
        //   };
      default:
        return state;
    }
  };
  
  export default rootReducer;
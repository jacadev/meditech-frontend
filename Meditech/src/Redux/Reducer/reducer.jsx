import { POST_RESERVE, POST_RESERVE_ERROR } from "../Actions/actions-types";
import { SIGNIN_USER } from "../Actions/Actionslogin";

const initialState = {
  reserva: [],
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
    default:
      return state;
  }
};

export default rootReducer;

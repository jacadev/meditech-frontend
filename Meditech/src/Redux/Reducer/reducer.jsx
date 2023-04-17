const initialState = {
    reserva: {},
    error: null,
  };
  
  const reservaReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'POST_RESERVE':
        // En este caso, la acción simplemente devuelve los datos del formulario
        // como parte del payload. Así que simplemente los guardamos en el estado.
        return {
          ...state,
          reserva: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reservaReducer;

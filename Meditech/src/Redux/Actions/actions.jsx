import axios from "axios";
//conexion entre front y back
import { POST_RESERVE, POST_RESERVE_ERROR, FORM_DATA } from "./actions-types";

export const enviarObjetoDeEstado = (objeto) => {
// actions.js

  return {
    type:FORM_DATA,
    payload: objeto
  }
}





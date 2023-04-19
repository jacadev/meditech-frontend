import axios from "axios";
//conexion entre front y back
import { POST_RESERVE, POST_RESERVE_ERROR } from "./actions-types";

export const postReserve = (formData) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3001/citas", formData)
      .then((response) => {
        dispatch({ type: POST_RESERVE, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: POST_RESERVE_ERROR, payload: error });
      });
  };
};





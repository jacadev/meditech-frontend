import axios from "axios";
//conexion entre front y back
import {
  POST_RESERVE,
  POST_RESERVE_ERROR,
  FORM_DATA,
  GET_DOCTOR,
  CLEAN_DATAIL_ID,
  GET_ESPECIALIDADES,
} from "./actions-types";

export const enviarObjetoDeEstado = (objeto) => {
  // actions.js

  return {
    type: FORM_DATA,
    payload: objeto,
  };
};

export const getDoctor = (id) => {
  return async function (dispatch) {
    const doctor = await axios
      .get(`http://localhost:3001/doctors/${id}`)
      .then((res) => res.data);

    dispatch({ type: GET_DOCTOR, payload: doctor });
  };
};

export const cleanDetail = () => {
  return { type: CLEAN_DATAIL_ID };
};

export const postReview = (form) => {
  console.log("estoy en el post", form);
  return async () => {
    await axios.post("http://localhost:3001/reviews", form);
  };
  // .then(res => console.log('soy la respuesta del POST',res.data))
  // .catch(err => console.log(err))
};

export const getEspecialidades = () => {
  return async (dispatch) => {
    const result = await axios
      .get("http://localhost:3001/specialties")
      .then((res) => res.data);
    dispatch({ type: GET_ESPECIALIDADES, payload: result });
  };
};

export const postDoctor = (form) => {
  return async () => {
    await axios.post("http://localhost:3001/doctors/", form);
  };
};

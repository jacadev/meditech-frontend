import axios from "axios";
//conexion entre front y back
import { FORM_DATA, GET_DOCTOR, CLEAN_DATAIL_ID, GET_DOCTORS, GET_DOCTORS_NAME} from "./actions-types";

export const enviarObjetoDeEstado = (objeto) => {
// actions.js

  return {
    type:FORM_DATA,
    payload: objeto
  }
}

export const getDoctor = (id) => {
  return async function(dispatch) {
      const doctor = await axios.get(`http://localhost:3001/doctors/${id}`)
      .then(res => res.data);

      dispatch({type: GET_DOCTOR, payload: doctor})
  }
};

export const cleanDetail = () => {
  return {type: CLEAN_DATAIL_ID}
}

export const postReview = (form) => {
  console.log('estoy en el post', form);
  return async () => {
    await axios.post('http://localhost:3001/reviews', form);
  }
    // .then(res => console.log('soy la respuesta del POST',res.data))
    // .catch(err => console.log(err))
}
export const getDoctors = () => {
  return async (dispatch) => {
    const result = await axios.get("http://localhost:3001/doctors")
      .then(res => res.data.map(specialist => ({
        ...specialist,
        rating: specialist.reviews.reduce((accumulator, currentValue, index, array) => {
          accumulator += currentValue.rating;
          if (index === array.length - 1) {
            return accumulator / array.length;
          } else {
            return accumulator;
          }
        },0)
      })));
      console.log('soy el resultado de doctores', result);
      dispatch({type:GET_DOCTORS, payload: result});
  } 
}

export const getName = (name) => {
  return async (dispatch) => {
    const result = await axios.get(`http://localhost:3001/doctors/name?name=${name}`)
    .then(res => res.data.map(specialist => ({
      ...specialist,
      rating: specialist.reviews.reduce((accumulator, currentValue, index, array) => {
        accumulator += currentValue.rating;
        if (index === array.length - 1) {
          return accumulator / array.length;
        } else {
          return accumulator;
        }
      },0)
    })));;

    console.log('soy el resultado de name', result);
    dispatch({type:GET_DOCTORS_NAME, payload: result});
  }
}
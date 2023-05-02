import axios from "axios";
//conexion entre front y back
import { FORM_DATA, GET_DOCTOR, CLEAN_DATAIL_ID, GET_DOCTORS, GET_DOCTORS_NAME, GET_APPOINTMENT_PATIENT, GET_PATIENT, GET_SPECIALTIES} from "./actions-types";

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
      .then(res => res.data)

      const result = {...doctor, rating: doctor.reviews.reduce((accumulator, currentValue, index, array) => {
        accumulator += currentValue.rating;
        if (index === array.length - 1) {
          return accumulator / array.length;
        } else {
          return accumulator;
        }
      },0)}
      
      dispatch({type: GET_DOCTOR, payload: result})
  }
};

export const cleanDetail = () => {
  return {type: CLEAN_DATAIL_ID}
}

export const postReview = (form) => {

  return async () => {
    await axios.post('http://localhost:3001/reviews', form);
  }
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
    })));

    dispatch({type:GET_DOCTORS_NAME, payload: result});
  }
}

export const getAppointmentPatienById = (id) => {
  return async (dispatch) => {
    const result = await axios.get(`http://localhost:3001/patients/appointments/${id}`)
    .then(res => res.data);

    dispatch({type:GET_APPOINTMENT_PATIENT, payload: result});
  }
}

export const getPatientById = (id) => {
  return async (dispatch) => {
    const result = await axios.get(`http://localhost:3001/patients/dates/${id}`)
    .then(res => res.data);

    dispatch({type:GET_PATIENT, payload: result});
  }
}

export const putPatientAdmin = (id, data) => {
  return async () => {
    await axios.put(`http://localhost:3001/patients/${id}`, data);
  }
}

export const putReviewAdmin = (review_id, obj) => {
  return async () => {
    await axios.put(`http://localhost:3001/reviews/${review_id}`, obj);
  }
}

export const getSpecialties = () => {
  return async (dispatch) => {
    const result = await axios.get(`http://localhost:3001/specialties`)
    .then(res => res.data);

    dispatch({type:GET_SPECIALTIES, payload: result});
  }
}
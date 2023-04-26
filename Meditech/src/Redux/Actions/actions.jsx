import axios from "axios";
//conexion entre front y back

import { GET_DOCTORS, GET_DETAIL } from "./actions-types";
import { POST_RESERVE, POST_RESERVE_ERROR, FORM_DATA } from "./actions-types";

export const enviarObjetoDeEstado = (objeto) => {
// actions.js

  return {
    type:FORM_DATA,
    payload: objeto
  }


// export const addReview = (comment, rating, patient_id, doctor_id) => {
//   return async (dispatch) => {
//     return axios.post('http://localhost:3001/reviews', { comment, rating, patient_id, doctor_id })
//       .then((response) => {
//         dispatch({ type: ADD_REVIEW, payload: response.data });
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };
// };

// export const getReviews = () => {
//   return async (dispatch) =>{
//     const res = await axios.get('http://localhost:3001/reviews');
//     try {
//       dispatch({ 
//         type: GET_REVIEWS, 
//         payload: res.data 
//       });
//     } catch (error) {
//       console.log({ message: error.message });
//     }
    
//   }
// };

export const fetchDoctors = () => {
  return async (dispatch) => {
    const response = await axios.get(`http://localhost:3001/doctors`);
    console.log(response.data)
    try {
      dispatch({
        type: GET_DOCTORS,
        payload: response.data
      })
    } catch (error) {
      console.log({message: error.message})
    }
  };
};

// export const addReview = (comment, rating, patient_id, doctor_id) => {
//   return async (dispatch) => {
//     return axios.post('http://localhost:3001/reviews', { comment, rating, patient_id, doctor_id })
//       .then((response) => {
//         dispatch({ type: ADD_REVIEW, payload: response.data });
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };
// };

// export const getReviews = () => {
//   return async (dispatch) =>{
//     const res = await axios.get('http://localhost:3001/reviews');
//     try {
//       dispatch({ 
//         type: GET_REVIEWS, 
//         payload: res.data 
//       });
//     } catch (error) {
//       console.log({ message: error.message });
//     }
    
//   }
// };

export const fetchDoctors = () => {
  return async (dispatch) => {
    const response = await axios.get(`http://localhost:3001/doctors`);
    console.log(response.data)
    try {
      dispatch({
        type: GET_DOCTORS,
        payload: response.data
      })
    } catch (error) {
      console.log({message: error.message})
    }
  };
};
export const getDetails = (id) =>{
  if(id) {
    return async function  (dispatch){
      try {
        const response = await axios.get(`http://localhost:3001/doctors/${id}`);
        console.log(response.data)
        dispatch({
          type: GET_DETAIL,
          payload: response.data,
        })
      } catch (error) {
        console.log({message: error.message})
      }
    }
  }
}
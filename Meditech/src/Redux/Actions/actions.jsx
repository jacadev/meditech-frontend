import axios from "axios";
//conexion entre front y back

import { GET_DOCTORS, GET_DETAIL } from "./actions-types";
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
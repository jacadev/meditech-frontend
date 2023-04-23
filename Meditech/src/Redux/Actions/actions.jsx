import axios from "axios";
//conexion entre front y back
import { POST_RESERVE, POST_RESERVE_ERROR, FETCH_DOCTOR_FAILURE , FETCH_DOCTOR_REQUEST, FETCH_DOCTOR_SUCCESS  } from "./actions-types";

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

export const fetchDoctorRequest = () => ({
  type: FETCH_DOCTOR_REQUEST,
});

export const fetchDoctorSuccess = (doctor) => ({
  type: FETCH_DOCTOR_SUCCESS,
  payload: doctor,
});

export const fetchDoctorFailure = (error) => ({
  type: FETCH_DOCTOR_FAILURE,
  payload: error,
});

// Thunk Action Creator
export const fetchDoctorById = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:3001/doctors/${id}`);
      const data = await response.json();
      dispatch({
        type: 'FETCH_DOCTOR_SUCCESS',
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_DOCTOR_ERROR',
        payload: error.message,
      });
    }
  };
};
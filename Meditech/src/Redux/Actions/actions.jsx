import axios from "axios";
//conexion entre front y back
import { POST_RESERVE, POST_RESERVE_ERROR, GET_DOCTOR_REVIEWS, ADD_REVIEW } from "./actions-types";

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

export const addReview = (comment, rating, patient_id, doctor_id) => {
  return async (dispatch) => {
    return axios.post('http://localhost:3001/reviews', { comment, rating, patient_id, doctor_id })
      .then((response) => {
        dispatch({ type: ADD_REVIEW, payload: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const getDoctorReviews = (doctorId) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`http://localhost:3001/reviews`);
      dispatch({ type: GET_DOCTOR_REVIEWS, payload: res.data });
    } catch (err) {
      console.error(err);
    }
  };
};


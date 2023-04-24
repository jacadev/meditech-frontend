import axios from "axios";

export const SIGNIN_USER = "SIGNIN_USER";
export const SIGNUP_USER = "SIGNUP_USER";
export const CLEAN_DETAIL = "CLEAN_DETAIL"

export const userInfo = (input) => async (dispatch) => {
  try {
    const dataUser = await axios.post(
      "http://localhost:3001/patients/signin",
      input
    );
    return dispatch({ type: SIGNIN_USER, payload: dataUser.data });
  } catch (error) {
    throw new Error(error);
  }
};

export const userSignUp = (input) => async (dispatch) => {
  try {
    const dataUser = await axios.post("http://localhost:3001/patients", input);
    return dispatch({ type: SIGNIN_USER, payload: dataUser.data });
  } catch (error) {
    throw new Error(error);
  }
};

export const cleanDetail = () => {
    try {
        return {
            type : CLEAN_DETAIL,
        }
    } catch (error) {
        throw new Error(error);
    }
}
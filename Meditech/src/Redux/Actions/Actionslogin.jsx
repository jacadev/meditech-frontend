import axios from "axios";

export const SIGNIN_USER = "SIGNIN_USER";
export const SIGNUP_USER = "SIGNUP_USER";
export const USER_SETTINGS = "USER_SETTINGS";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const USERGOOGLE_DATA = "USERGOOGLE_DATA";
export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_FAILURE = "FORGOT_PASSWORD_FAILURE";
export const PASSWORD_RESET_SUCCESS = "PASSWORD_RESET_SUCCESS";
export const PASSWORD_RESET_FAILURE = "PASSWORD_RESET_FAILURE";
export const RESET_SUCCESS = "RESET_SUCCESS";

export const userInfo = (input) => async (dispatch) => {
  try {
    const dataUser = await axios.post(
      "http://localhost:3001/patients/signin",
      input
    );
    return dispatch({ type: SIGNIN_USER, payload: dataUser.data });
  } catch (error) {
    throw new Error("Correo Electronio o contraseña invalidos");
  }
};

export const userSignUp = (input) => async (dispatch) => {
  try {
    const dataUser = await axios.post("http://localhost:3001/patients", input);
    return dispatch({ type: SIGNUP_USER, payload: dataUser.data });
  } catch (error) {
    alert(
      `${error}: Correo electrónico asociado a una cuenta por favor ingrese otro correo electrónico`
    );
  }
};

export const userProfileSettings = (id, input) => async (dispatch) => {
  try {
    const dataUser = await axios.put(
      `http://localhost:3001/patients/profileSettings/${id}`,
      input
    );
    return dispatch({ type: USER_SETTINGS, payload: dataUser.data });
  } catch (error) {
    throw new Error(error);
  }
};

export const forgotPassword = (email) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/patients/forgotpassword",
      { email }
    );
    const data = response.data;

    if (data) {
      dispatch(forgotPasswordSuccess(data.message));
    }
  } catch (error) {
    dispatch(forgotPasswordFailure(error));
  }
};

export const resetPassword = (input) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/patients/resetpassword",
      input
    );
    const data = response.data;

    if (data) {
      await dispatch(resetPasswordSuccess(data.message));
    } else {
      await dispatch(resetPasswordFailure(data.message));
    }
  } catch (error) {
    throw new Error("solicite un nuevo codigo");
  }
};

export const cleanDetail = () => {
  try {
    return {
      type: CLEAN_DETAIL,
    };
  } catch (error) {
    throw new Error(error);
  }
};

export const cleanSuccess = () => {
  return {
    type: RESET_SUCCESS,
  };
};

export const userSigninGoogle = (userInfo) => {
  return {
    type: USERGOOGLE_DATA,
    payload: userInfo,
  };
};

export const forgotPasswordRequest = () => ({
  type: FORGOT_PASSWORD_REQUEST,
});

export const forgotPasswordSuccess = (data) => {
  return (dispatch) => {
    dispatch({
      type: FORGOT_PASSWORD_SUCCESS,
      payload: data,
    });
  };
};

const showAlert = (message) => {
  return () => {
    alert(message);
  };
};

export const forgotPasswordFailure = (error) => {
  /*  alert(
    'Ocurrió un error al enviar la solicitud de restablecimiento de contraseña. Por favor intenta de nuevo más tarde. Error'
  ); */
  return {
    type: FORGOT_PASSWORD_FAILURE,
    payload: error,
  };
};

export const resetPasswordSuccess = (data) => {
  return {
    type: PASSWORD_RESET_SUCCESS,
    payload: data,
  };
};

export const resetPasswordFailure = (error) => {
  return {
    type: PASSWORD_RESET_FAILURE,
    payload: error,
  };
};

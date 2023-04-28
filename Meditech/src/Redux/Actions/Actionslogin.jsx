import axios from 'axios';

export const SIGNIN_USER = 'SIGNIN_USER';
export const SIGNUP_USER = 'SIGNUP_USER';
export const CLEAN_DETAIL = 'CLEAN_DETAIL';
export const USERGOOGLE_DATA = 'USERGOOGLE_DATA';
export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAILURE = 'FORGOT_PASSWORD_FAILURE';
export const PASSWORD_RESET_SUCCESS = 'PASSWORD_RESET_SUCCESS';
export const PASSWORD_RESET_FAILURE = 'PASSWORD_RESET_FAILURE';


export const userInfo = (input) => async (dispatch) => {
  try {
    const dataUser = await axios.post(
      'http://localhost:3001/patients/signin',
      input
    );
    return dispatch({ type: SIGNIN_USER, payload: dataUser.data });
  } catch (error) {
    throw new Error(error);
  }
};

export const userSignUp = (input) => async (dispatch) => {
  try {
    const dataUser = await axios.post('http://localhost:3001/patients', input);
    return dispatch({ type: SIGNIN_USER, payload: dataUser.data });
  } catch (error) {
    throw new Error(error);
  }
};

export const userProfileSettings = (id, input) => async (dispatch) => {
  console.log(id);
  console.log(input);
  try {
    const dataUser = await axios.put(
      `http://localhost:3001/patients/profileSettings/${id}`,
      input
    );
    return { success: true, data: dataUser };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const forgotPassword = (email) => async (dispatch) => {
  dispatch(forgotPasswordRequest());

  try {
    const response = await axios.post(
      'http://localhost:3001/patients/........',
      { email }
    );
    const data = response.data;

    if (data.success) {
      dispatch(forgotPasswordSuccess());
    } else {
      dispatch(forgotPasswordFailure(data.message));
    }
  } catch (error) {
    dispatch(forgotPasswordFailure(error.message));
  }
};

export const resetPassword =
  (token, newPassword, email) => async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:3001/patients/....', {
        token,
        newPassword,
        email,
      });

      const data = response.data;
      if (data.exito) {
        dispatch(resetPasswordSuccess());
      } else {
        dispatch(resetPasswordFailure(error));
      }
    } catch (error) {
      dispatch(resetPasswordFailure(error.message));
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

export const userSigninGoogle = (userInfo) => {
  return {
    type: USERGOOGLE_DATA,
    payload: userInfo,
  };
};

const forgotPasswordRequest = () => ({
  type: FORGOT_PASSWORD_REQUEST,
});

const forgotPasswordSuccess = () => {
  alert(
    'Se ha enviado un correo electrónico con instrucciones para restablecer tu contraseña.'
  );
  return {
    type: FORGOT_PASSWORD_SUCCESS,
  };
};

const forgotPasswordFailure = (error) => {
  alert(
    `Ocurrió un error al enviar la solicitud de restablecimiento de contraseña. Por favor intenta de nuevo más tarde. Error: ${error}`
  );
  return {
    type: FORGOT_PASSWORD_FAILURE,
    payload: error,
  };
};

const resetPasswordSuccess = () => {
  alert(
    'Se ha enviado un correo electrónico con instrucciones para restablecer tu contraseña.'
  );
  return {
    type: PASSWORD_RESET_SUCCESS,
  };
};

const resetPasswordFailure = (error) => {
  alert(
    `Ocurrió un error al enviar la solicitud de restablecimiento de contraseña. Por favor intenta de nuevo más tarde. Error: ${error}`
  );
  return {
    type: PASSWORD_RESET_FAILURE,
    payload: error,
  };
};
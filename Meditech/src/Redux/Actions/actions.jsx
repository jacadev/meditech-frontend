import axios from "axios";
//conexion entre front y back
import {
  POST_RESERVE,
  POST_RESERVE_ERROR,
  FORM_DATA,
  GET_DOCTOR,
  CLEAN_DATAIL_ID,
  GET_ESPECIALIDADES,
  GET_DOCTORS,
  GET_DOCTORS_NAME,
  GET_APPOINTMENT_PATIENT,
  GET_PATIENT,
  GET_SPECIALTIES,
  GET_ALL_PATIENTS,
  GET_ALL_PATIENTS_BY_NAME
} from "./actions-types";

export const enviarObjetoDeEstado = (objeto) => {
  // actions.js

  return {
    type: FORM_DATA,
    payload: objeto,
  };
};

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

export const putDoctorAdmin = (id, data) => {
  return async () => {
    await axios.put(`http://localhost:3001/doctors/${id}`, data);
  }
}

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

export const getAllPatients = () => {
  return async (dispatch) => {
    const result = await axios.get(`http://localhost:3001/patients`)
    .then(res => res.data);

    dispatch({type:GET_ALL_PATIENTS, payload: result});
  }
}
export const getAllPatientByName = (name) => {
  return async (dispatch) => {
    const result = await axios.get(`http://localhost:3001/patients/name?name=${name}`)
    .then(res => res.data);

    dispatch({type:GET_ALL_PATIENTS_BY_NAME, payload: result});
  }
}

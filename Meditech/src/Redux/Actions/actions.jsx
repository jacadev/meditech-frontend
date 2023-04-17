import axios from "axios";

//conexion entre front y back

export const postReserve = (formData) => ({
  type: 'POST_RESERVE',
  payload: formData,
});
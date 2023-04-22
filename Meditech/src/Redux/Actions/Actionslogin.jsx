import axios from "axios"

export const SIGNIN_USER= "SIGNIN_USER"


export const userInfo =(input) => async(dispatch) => {
    try {
        const dataUser = await axios.post("http://localhost:3001/patients/signin", input)
        return dispatch({type: SIGNIN_USER, payload: dataUser.data})
    } catch (error) {
        throw new Error(error);
    }
}
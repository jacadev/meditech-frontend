import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getPatientById, putPatientAdmin, putReviewAdmin } from "../../Redux/Actions/actions";

const ModifyPatient = () => {

    const {id} = useParams();

    const dispatch = useDispatch();

    const infoPatient = useSelector(state => state.infoPatient);

    const [data, setData] = useState({
        status: infoPatient.person.status,
        rol: [infoPatient.person.rol_id],
    })

    useEffect(() => {
        dispatch(getPatientById(id))
    },[]);
    
    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(putPatientAdmin(id, data)) // put paciente

        setTimeout(() => {
            dispatch(getPatientById(id))
        },100)
    }
    
    const changeHandlerReview = (review_id, status) => {

        const obj = {
            status: !status,
            patient_id: infoPatient.id
        }

        dispatch(putReviewAdmin(review_id, obj)) // put review
        setTimeout(() => {
            dispatch(getPatientById(id))
        },100)
    }

    const changeHandlerPatient = () => {
        setData({
            ...data,
            status: !data.status
        })
    }

    const handleChange = (event) => {
        const value = Number(event.target.value);

        setData({
            ...data,
            rol:[value]
        })
    }

    console.log('info del paciente', infoPatient);

    return (
        <div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p>nombre del paciente: {infoPatient.person.firstName} {infoPatient.person.lastName}</p>

            <div>
                <p>Estado: {infoPatient.person.status ? 'activo' : 'inactivo'}</p>
                <button onClick={() => changeHandlerPatient()}>cambiar status</button>
            </div>

            <form onSubmit={submitHandler}>
                <div>
                    <h4>modificar rol</h4>
                    <p>rol actual: {infoPatient.person.rol.nameRol}</p>
                    <p>cambiar rol</p>
                    <div>
                    <input
                        type="radio"
                        name="rol"
                        value="2"
                        onChange={handleChange}
                    />
                    <label htmlFor="Paciente">Paciente</label>
                        <input
                            type="radio"
                            name="rol"
                            value="3"
                            onChange={handleChange}
                        />
                        <label htmlFor="Administrador">Administrador</label>
                    </div>
                </div>
                <button type="submit">aplicar</button>
            </form>
            <hr></hr>
            <div>
                <h4>reviews</h4>
                {infoPatient.reviews.map((review, index) => 
                    <div key={index}>
                        <p>comentario: {review.comment}</p>
                        <p>estado: {review.status ? 'activo' : 'inactivo'}</p>
                        <button onClick={() => changeHandlerReview(review.id, review.status)}>cambiar status</button>
                        <hr></hr>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ModifyPatient;
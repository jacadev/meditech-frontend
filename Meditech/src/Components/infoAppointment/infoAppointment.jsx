import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAppointmentPatienById, cleanDetail } from "../../Redux/Actions/actions";
import { Link } from "react-router-dom";

const infoAppointment = () => {

    const dispatch = useDispatch()

    const userInfo = useSelector(state => state.userInfo)

    const datePatientDB = useSelector(state => state.appointmentOfPatientID)

    useEffect(() => {
        dispatch(getAppointmentPatienById(userInfo.id))
        return () => dispatch(cleanDetail())
    },[])

    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {datePatientDB.length === 0 ? 
            <p>no tienes citas reservadas</p>
            :datePatientDB?.map(cita => 
            <div>
                <p>fecha en que se saco la cita: {cita?.date}</p>
                <p>razon de la consulta: {cita?.consultationReason}</p>
                <div>
                    <p>fecha de la cita: {cita.disponibilty?.date}</p>
                    <p>dia de la cita: {cita.disponibilty.day?.day}</p>
                    <p>hora de la cita: inicio-{cita.disponibilty.timetable?.startTime} fin-{cita.disponibilty.timetable?.endTime}</p>
                    <p>imagen doctor: <img src={cita.disponibilty.doctor?.profileImage} /></p>
                    <p>doctor: {cita.disponibilty.doctor.person?.first_name} {cita.disponibilty.doctor.person?.last_name}</p>
                    <p>especialidad: {cita.disponibilty.doctor?.specialties.map(specialty => <>{specialty.specialty}</>)}</p>
                    <br></br>
                </div>
            </div>)}
            <Link to='/user/staff'>
                <button>atras</button>
            </Link>
        </div>
    )

}

export default infoAppointment;
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { cleanDetail, getDoctor } from "../../../Redux/Actions/actions";
import Review from "../../../Components/reviews/Review";

const Detail = () => {
    const {id} = useParams();

    const dispatch = useDispatch();

    const doctor = useSelector(state => state.doctorDetail);
    const patient = useSelector(state => state.userInfo);

    useEffect(() => {
        dispatch(getDoctor(id))
        return () => dispatch(cleanDetail())
    },[id])
    console.log('estoy en detail', id);
    return (
        <div >
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <h1>Name: {doctor.person?.firstName} {doctor.person?.lastName}</h1><hr/>
            
            
            <div>
                <img src={doctor.profile_image} alt={doctor.person?.firstName}/>
            </div>
            
            <div>
                <h3>about_me:</h3>
                <p>{doctor?.about_me}</p><hr/>
                
                <h3>consultation_cost:</h3>
                <p>{doctor?.consultation_cost}</p><hr/>
                
                <h3>diseases_treated:</h3>
                <p>{doctor?.diseases_treated && doctor.diseases_treated.map(diseases => <>{diseases} </>)}</p><hr/>
                
                <h3>tuition_code:</h3>
                <p>{doctor?.tuition_code}</p><hr/>

                <h3>specialties:</h3>
                <p>{doctor.specialties?.map(specialty => <>{specialty.specialty} </>)}</p><hr/>

                <h3>reviews:</h3>
                <div>{doctor.reviews?.map(obj => <div>usuario: {obj.patient.person.first_name} {obj.patient.person.last_name} comment: {obj.comment} rating: {obj.rating}<br></br></div>)}</div><hr/>

            </div>
            {/* render post review */}
            <Review
                doctor_id={Number(id)}
                patient_id={patient.id}
            />
        </div>
    )
}

export default Detail;
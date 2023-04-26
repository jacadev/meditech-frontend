import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDoctor, postReview } from "../../Redux/Actions/actions";

const Review = ({doctor_id, patient_id}) => {

    const dispatch = useDispatch();

    const [form, setForm] = useState({
        comment:'',
        rating: null,
        doctor_id,
        patient_id
    })

    const changeHandler = (event) => {
        const {name, value} = event.target;

        if (name === 'comment') setForm({...form, [name]: value})
        if (name === 'rating') setForm({...form, [name]: value})

    }

    const submitHandler = async (event) => {
        event.preventDefault();
        
        dispatch(postReview(form))
            
        setForm({
            ...form,
            comment: '',
            rating: ''
        })

        setTimeout(() => {
            dispatch(getDoctor(doctor_id))
        },1000) 
}

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>comment</label>
                <input type="text" value={form.comment} onChange={changeHandler} name="comment"/>
            </div><br></br>

            <div>
                <label>rating</label>
                <input type="number" value={form.rating} onChange={changeHandler} name="rating"/>
            </div>

            <button type="submit">submit</button>
        </form>
    )
}

export default Review;
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDoctor, postReview } from "../../Redux/Actions/actions";
import { BsStarFill, BsStar } from 'react-icons/bs';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    
  } from '@chakra-ui/react';

const Review = ({doctor_id, patient_id}) => {

  const dispatch = useDispatch();

  const [form, setForm] = useState({
      comment:'',
      rating: null,
      doctor_id,
      patient_id
  })

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (patient_id) {
      dispatch(postReview(form))

      setForm({
          ...form,
          comment: '',
          rating: []
      })

      setTimeout(() => {
          dispatch(getDoctor(doctor_id))
      },1000) 
      return;
    }

    alert('no estás logueado'); // tarea de franco: ponerle estilos     
  }

  const renderStars = (rating) => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <BsStarFill
            key={i}
            color="#fcba03"
            onClick={() => setForm({ ...form, rating: i + 1 })}
            style={{ cursor: "pointer" }}
          />
        );
      } else {
        stars.push(
          <BsStar
            key={i}
            color="#fcba03"
            onClick={() => setForm({ ...form, rating: i + 1 })}
            style={{ cursor: "pointer" }}
          />
        );
      }
    }
    return stars;
  };
  
  return (
    <Box as="form" onSubmit={handleSubmit}>
      <FormControl>
        <br/>
        <FormLabel>Comentanos tu experiecia con nuestros doctores:</FormLabel>
        <Textarea   value={form.comment} onChange={(e) => setForm({ ...form, comment: e.target.value })}  />
      </FormControl>
  
      <FormControl>
        <FormLabel>Califica a tu doctor:</FormLabel>
        <span style={{ display: "inline-flex", flexWrap: "nowrap" }}>
          {renderStars(form.rating)}
        </span>
      </FormControl>
      <br/>
  
      <Button 
        type="submit"
        bg='#5C43FF'
        color={'white'}
        _hover={{
          bg: 'green',
        }}>Enviar</Button>
    </Box>
  )
}

export default Review;
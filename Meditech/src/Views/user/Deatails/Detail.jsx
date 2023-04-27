import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { cleanDetail, getDoctor } from "../../../Redux/Actions/actions";
import { BsStarFill, BsStar } from 'react-icons/bs';
import Review from "../../../Components/reviews/Review";
import {
    Box,
    Heading,
    Image,
    Text,
    VStack,
    Divider,
    Badge,
    Wrap,
    WrapItem,
    HStack
} from "@chakra-ui/react";

const Detail = () => {
    const { id } = useParams();

    const dispatch = useDispatch();

    const doctor = useSelector(state => state.doctorDetail);
    const patient = useSelector(state => state.userInfo);

    useEffect(() => {
        dispatch(getDoctor(id))
        return () => dispatch(cleanDetail())
    }, [id])
    console.log('estoy en detail', doctor);
    const renderStars = rating => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
          if (i < rating) {
            stars.push(<BsStarFill key={i} color="yellow" />);
          } else {
            stars.push(<BsStar key={i} color="yellow" />);
          }
        }
        return stars;
      };
    return (
        <Box marginTop="100px" marginLeft='250px' marginRight='250px'>
            <HStack>
                <Image
                    borderRadius='10px'
                    src={doctor.profile_image}
                    alt={doctor.person?.firstName}
                    maxW="30%"// Tamaño de la imagen
                    mr={4} // Margen a la derecha para separar la imagen del texto
                />
                <VStack align="stretch">
                    <Box >
                        <Heading>
                            {doctor.person?.firstName} {doctor.person?.lastName}
                        </Heading>
                        <Divider />
                    </Box>

                    <Box>
                        <Text>{doctor?.about_me}</Text>
                    </Box>
                    <span style={{ display: "inline-flex", flexWrap: "nowrap" }}>{renderStars(doctor.rating)}</span>
                    <Box>
                        <Text fontSize="lg" fontWeight="bold">
                            Precio de la consulta:
                        </Text>
                        <Text>{doctor?.consultation_cost}</Text>
                    </Box>

                    <Box>
                        <Text fontSize="lg" fontWeight="bold">
                            Enfermedades Tratadas:
                        </Text>
                        <Wrap>
                            {doctor?.diseases_treated &&
                                doctor.diseases_treated.map((disease) => (
                                    <WrapItem key={disease}>
                                        <Badge>{disease}</Badge>
                                    </WrapItem>
                                ))}
                        </Wrap>
                    </Box>

                    <Box>
                        <Text fontSize="lg" fontWeight="bold">
                            Código de matrícula:
                        </Text>
                        <Text>{doctor?.tuition_code}</Text>
                    </Box>

                    <Box>
                        <Text fontSize="lg" fontWeight="bold">
                            Especialidades:
                        </Text>
                        <Wrap>
                            {doctor.specialties?.map((specialty, index) => (
                                <WrapItem key={`${index}2`}>
                                    <Badge>{specialty.specialty}</Badge>
                                </WrapItem>
                            ))}
                        </Wrap>
                    </Box>
                </VStack>
            </HStack>
            <Box   borderRadius='10px' borderColor="#3a0ca3" borderWidth="1px" bg='white'  maxWidth="100%">
                <Box marginLeft="20px" marginTop='10px' marginBottom='10px'>
                <Text fontSize="lg" fontWeight="bold">
                    Comentarios:
                </Text>
                <Divider borderColor="#3a0ca3"/>
                <VStack align="stretch" spacing={8}>
                    {doctor.reviews?.map((review, index) => (
                        <Box key={`${index}1`} w='30%' >
                            <Text fontSize="sm" fontWeight="bold" color='#3a0ca3'>
                                {review.patient.person.first_name}{" "}
                                {review.patient.person.last_name}
                            </Text>
                            <Text>{review.comment}</Text>
                            <Text>Calificacion: {review.rating}</Text>
                            <Divider borderColor="#3a0ca3"/>
                        </Box>
                        
                    ))}
                    
                </VStack>
                <Review doctor_id={Number(id)} patient_id={patient.id} />
                </Box>
            </Box>
        </Box>


    )
}

export default Detail;
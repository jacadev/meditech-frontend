import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getPatientById, putPatientAdmin, putReviewAdmin } from "../../Redux/Actions/actions";
import {
    Box,
    Heading,
    Text,
    Radio,
    RadioGroup,
    Button,
    FormControl,
    FormLabel,
    useColorModeValue,
} from "@chakra-ui/react";
import { cleanDetail } from "../../Redux/Actions/actions";
const ModifyPatient = () => {

    const { id } = useParams();

    const dispatch = useDispatch();

    const infoPatient = useSelector(state => state.infoPatient);
    // console.log('info', infoPatient);
    const [data, setData] = useState({
        status: infoPatient.person?.status,
        rol: [infoPatient.person?.rol_id],
    })

    useEffect(() => {
        dispatch(getPatientById(id))
        // return () => dispatch(cleanDetail())
    }, []);

    

    const changeHandlerReview = (review_id, status) => {

        const obj = {
            status: !status,
            patient_id: infoPatient.id
        }

        dispatch(putReviewAdmin(review_id, obj)) // put review
        setTimeout(() => {
            dispatch(getPatientById(id))
        }, 100)
    }

    const changeHandlerPatient = () => {

        dispatch(putPatientAdmin(id, data)) // put paciente

        setTimeout(() => {
            dispatch(getPatientById(id))
        },100)
    }

    const submitHandlerRol = () => {
        dispatch(putPatientAdmin(id, data)) // put paciente

        setTimeout(() => {
            dispatch(getPatientById(id))
        }, 100)
    }

    const handleChangeStatus = (event) => {
        const value = event.target.value;

        setData({
            ...data,
            status: value
        })
    }

    const handleChange = (event) => {
        const value = Number(event.target.value);

        setData({
            ...data,
            rol: [value]
        })
    }

    // console.log('info del paciente', infoPatient);
    const btnColor = useColorModeValue("#125c75", "#1c9dc8")

    return (
        <Box borderRadius='10px' marginTop='80px' padding='20px'>
            <Text fontWeight='bold' fontSize='20px'>Modificar Paciente</Text>
            <Box display='flex' alignItems='center'  >
                <Box flex='1' borderRadius='10px' padding='20px' boxShadow="lg">
                    <Box marginTop='20px'>
                        <Text fontSize='16px' fontWeight='bold'>Nombre del paciente:</Text>
                        {infoPatient.person?.firstName} {infoPatient.person?.lastName}
                    </Box>
                    <Box marginTop='20px'>
                        <Text fontSize='16px' color={infoPatient.person?.status ? 'green' : 'red'}>
                            Estado: {infoPatient.person?.status ? 'activo' : 'inactivo'}
                        </Text>
                        <Box display='flex' alignItems='center' marginTop='20px'>
                            <Box display='flex' alignItems='center' marginTop='10px' marginRight='20px'>
                                <input type='radio' name='status' value={true} onChange={handleChangeStatus} marginLeft='5px'  />
                                <Text fontSize='16px'>Activo</Text>
                            </Box>
                            <Box display='flex' alignItems='center' marginTop='10px' marginLeft='20px'>
                                <input type='radio' name='status' value={false} onChange={handleChangeStatus} marginLeft='5px' />
                                <Text fontSize='16px'>Inactivo</Text>
                            </Box>
                        </Box>
                        <Button onClick={() => changeHandlerPatient()} marginTop='10px' bg={btnColor} color='white'>
                            Cambiar estado
                        </Button>
                    </Box>
                </Box>
                <Box flex='1' borderRadius='10px' marginX='20px' marginTop='20px' padding='20px' boxShadow="lg">

                    <Box marginTop='20px'>
                        <Text fontSize='16px' fontWeight='bold' >Rol actual:</Text>
                        {infoPatient.person?.rol.nameRol}
                        <Box display='flex' alignItems='center' marginTop='20px'>
                            <Box display='flex' alignItems='center' marginTop='10px' marginRight='20px'>
                                <input type='radio' name='rol' value='2' onChange={handleChange} marginLeft='5px' />
                                <Text fontSize='16px'>Paciente</Text>
                            </Box>
                            <Box display='flex' alignItems='center' marginTop='10px' marginLeft='20px'>
                                <input type='radio' name='rol' value='3' onChange={handleChange} marginLeft='5px' />
                                <Text fontSize='16px'>Administrador</Text>
                            </Box>
                        </Box>
                        <Button type='submit' marginTop='20px' bg={btnColor} color='white' onClick={() => submitHandlerRol()}>
                            Modificar rol
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Box marginTop='20px'>
                <Text fontWeight='bold' fontSize='18px'>Reviews</Text>
                {infoPatient.reviews?.map((review, index) => (
                    <Box key={index} marginTop='10px' padding='10px' borderWidth='1px' borderColor='gray.200' borderRadius='5px' boxShadow="lg">
                        <Text fontSize='16px'>Comentario: {review.comment}</Text>
                        <Text fontSize='16px' color={review.status ? 'green' : 'red'}>Estado: {review.status ? 'activo' : 'inactivo'}</Text>

                        <Button onClick={() => changeHandlerReview(review.id, review.status)} marginTop='10px' bg={btnColor} color='white' focusOutline='none'>
                            Cambiar estado
                        </Button>
                    </Box>
                ))}
            </Box>
        </Box>

    )
}

export default ModifyPatient;
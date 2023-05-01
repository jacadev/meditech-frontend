import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAppointmentPatienById, cleanDetail } from "../../Redux/Actions/actions";
import { Link } from "react-router-dom";
import { Box, Button, Flex, Text,Badge,Image } from "@chakra-ui/react";


const infoAppointment = () => {

    const dispatch = useDispatch()

    const userInfo = useSelector(state => state.userInfo)

    const datePatientDB = useSelector(state => state.appointmentOfPatientID)

    useEffect(() => {
        dispatch(getAppointmentPatienById(userInfo.id))
        return () => dispatch(cleanDetail())
    },[])

    return (
        <Box marginTop='100px'>
            
        {datePatientDB.length === 0 ? (
          <Text fontSize="lg">No tienes citas reservadas.</Text>
        ) : (
          datePatientDB.map((cita, index) => (
            <Box key={index} mt="8" display="flex" alignItems="center"  borderRadius='10px' borderColor="#3a0ca3" borderWidth="1px" maxWidth="600px" >
              <Box mr="4" maxWidth="200px">
                <Image src={cita.disponibilty.doctor?.profileImage}  width="100%" objectFit="cover" />
              </Box>
              <Box>
                <Text fontSize="lg">Fecha en que se sacó la cita: {cita?.date}</Text>
                <Text fontSize="lg">Razón de la consulta: {cita?.consultationReason}</Text>
                <Box mt="4">
                  <Text fontSize="lg">Fecha de la cita: {cita.disponibilty?.date}</Text>
                  <Text fontSize="lg">Día de la cita: {cita.disponibilty.day?.day}</Text>
                  <Text fontSize="lg">
                    Hora de la cita: inicio-{cita.disponibilty.timetable?.startTime} fin-
                    {cita.disponibilty.timetable?.endTime}
                  </Text>
                  <Text fontSize="lg">
                    Doctor: {cita.disponibilty.doctor.person?.first_name} {' '}
                    {cita.disponibilty.doctor.person?.last_name}
                  </Text>
                  <Text fontSize="lg">
                    Especialidad:{' '}
                    {cita.disponibilty.doctor?.specialties.map((specialty) => (
                      <Badge key={specialty.id} mr="2">
                        {specialty.specialty}
                      </Badge>
                    ))}
                  </Text>
                </Box>
              </Box>
            </Box>
          ))
        )}
       <Link to="/user/staff">
        <Button mt="8" colorScheme="blue">
          Atrás
        </Button>
      </Link>
      </Box >
      

    )

}

export default infoAppointment;
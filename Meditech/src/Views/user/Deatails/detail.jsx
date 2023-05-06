import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cleanDetail, getDoctor } from "../../../Redux/Actions/actions";
import { BsStarFill, BsStar } from "react-icons/bs";
import Review from "../../../Components/reviews/Review";
import { Link } from "react-router-dom";
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
  HStack,
  Button,
  Flex,
} from "@chakra-ui/react";

const Detail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const patient = useSelector((state) => state.userInfo);
  const doctor = useSelector((state) => state.doctorDetail);
  console.log(doctor);
  const isAdmin = patient?.rol === 3; // si rol es igual a 3, es admin. sino, es user

  useEffect(() => {
    console.log("aca");
    dispatch(getDoctor(id));
    return () => dispatch(cleanDetail());
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        stars.push(<BsStarFill key={i} color="#F4D03F" />);
      } else {
        stars.push(<BsStar key={i} color="#F4D03F" />);
      }
    }
    return stars;
  };

  return (
    <Box marginTop="100px" marginLeft="250px" marginRight="250px">
      <HStack>
        <Image
          borderRadius="10px"
          src={doctor?.profile_image}
          alt={doctor?.person?.firstName}
          maxW="30%" // Tamaño de la imagen
          mr={4} // Margen a la derecha para separar la imagen del texto
        />
        <VStack align="stretch">
          <Box>
            <Heading>
              {doctor?.person?.firstName} {doctor?.person?.lastName}
            </Heading>
            <Divider />
          </Box>

          <Box>
            <Text>{doctor?.about_me}</Text>
          </Box>
          <span style={{ display: "inline-flex", flexWrap: "nowrap" }}>
            {renderStars(doctor?.rating)}
          </span>
          <Box>
            <Text fontSize="lg" fontWeight="bold">
              Precio de la consulta:
            </Text>
            <Text>${doctor?.consultation_cost}</Text>
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
            <Flex alignItems="center" justifyContent="space-between">
              <Wrap>
                {doctor?.specialties?.map((specialty, index) => (
                  <WrapItem key={`${index}2`}>
                    <Badge>{specialty.specialty}</Badge>
                  </WrapItem>
                ))}
              </Wrap>
              {isAdmin ? null : (
                <Link
                  to={{
                    pathname: patient.id ? "/user/reserve" : "/user/signin",
                    state: {
                      id: doctor?.id,
                      name: `${doctor?.person?.firstName} ${doctor?.person?.lastName}`,
                      specialties: doctor?.specialties?.map((s) => s.specialty),
                      consultationCost: doctor?.consultation_cost,
                      profileImage: doctor?.profile_image,
                      disponibilties: doctor?.disponibilties,
                    },
                  }}
                >
                  <Button
                    mt={4}
                    fontSize={"sm"}
                    rounded={"full"}
                    bg={"blue.400"}
                    color={"white"}
                    boxShadow={
                      "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                    }
                    _hover={{
                      bg: "blue.500",
                    }}
                    _focus={{
                      bg: "blue.500",
                    }}
                  >
                    Agenda tu cita
                  </Button>
                </Link>
              )}
            </Flex>
          </Box>
        </VStack>
      </HStack>
      <Box
        borderRadius="10px"
        borderColor="#3a0ca3"
        borderWidth="1px"
        bg="white"
        maxWidth="100%"
      >
        <Box marginLeft="20px" marginTop="10px" marginBottom="10px">
          <Text fontSize="lg" fontWeight="bold">
            Comentarios:
          </Text>
          <Divider borderColor="#3a0ca3" />
          <VStack align="stretch" spacing={8}>
            {doctor?.reviews?.map((review, index) => (
              <Box key={`${index}1`} w="30%">
                <Text fontSize="sm" fontWeight="bold" color="#3a0ca3">
                  {review.patient.person.first_name}{" "}
                  {review.patient.person.last_name}
                </Text>
                <Text>{review.comment}</Text>
                <Text>Calificacion: {review.rating}</Text>
                <Divider borderColor="#3a0ca3" />
              </Box>
            ))}
          </VStack>
          {isAdmin ? null : (
            <Review doctor_id={Number(id)} patient_id={patient.id} />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Detail;

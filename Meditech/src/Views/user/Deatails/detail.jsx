import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cleanDetail, getDoctor } from "../../../Redux/Actions/actions";
import { BsStarFill, BsStar } from "react-icons/bs";
import Review from "../../../Components/reviews/Review";
import { useColorModeValue } from "@chakra-ui/react";
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

  const isAdmin = patient?.rol === 3; // si rol es igual a 3, es admin. sino, es user

  useEffect(() => {
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

  const cardBgColor = useColorModeValue("white", "rgb(41, 38, 38)");
  const dividerColor = useColorModeValue("gray.200", "gray.600");
  const buttonBgColor = useColorModeValue("blue.400", "blue.500");

  return (
    <Box marginTop="100px" marginLeft="250px" marginRight="250px">
      <HStack>
        <Image
          borderRadius="10px"
          src={doctor.profile_image}
          alt={doctor.person?.firstName}
          maxW="30%"
          mr={4}
        />
        <VStack align="stretch">
          <Box>
            <Heading>
              {doctor.person?.firstName} {doctor.person?.lastName}
            </Heading>
            <Divider borderColor={dividerColor} />
          </Box>

          <Box>
            <Text>{doctor?.about_me}</Text>
          </Box>
          <span style={{ display: "inline-flex", flexWrap: "nowrap" }}>
            {renderStars(doctor.rating)}
          </span>
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
            <Flex alignItems="center" justifyContent="space-between">
              <Wrap>
                {doctor.specialties?.map((specialty, index) => (
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
                      id: doctor.id,
                      name: `${doctor.person?.firstName} ${doctor.person?.lastName}`,
                      specialties: doctor.specialties?.map((s) => s.specialty),
                      consultationCost: doctor.consultation_cost,
                      profileImage: doctor.profile_image,
                      disponibilties: doctor.disponibilties,
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
        borderColor={useColorModeValue("#3a0ca3", "#ffffff")}
        borderWidth="1px"
        bg={useColorModeValue("white", "gray.800")}
        maxWidth="100%"
      >
       {/* <Box
  borderRadius="10px"
  borderColor={useColorModeValue("#3a0ca3", "#ffffff")} // Establecer color de borde según el modo de color
  borderWidth="1px"
  bg={useColorModeValue("white", "gray.800")} // Establecer color de fondo según el modo de color
  maxWidth="100%"
  marginLeft="20px"
  marginTop="10px"
  marginBottom="10px"
  p={4} // Agregar un padding para separar los elementos internos
> */}
  <Text
    fontSize="lg"
    fontWeight="bold"
    color={useColorModeValue("#3a0ca3", "white")} // Establecer color de texto según el modo de color
  >
    Comentarios:
  </Text>
  <Divider borderColor={useColorModeValue("#3a0ca3", "white")} /> 
  <VStack align="stretch" spacing={8}>
    {doctor.reviews?.map((review, index) => (
      <Box key={`${index}1`} w="30%" bg={useColorModeValue("gray.50", "gray.700")}>
        <Text
          fontSize="sm"
          fontWeight="bold"
          color={useColorModeValue("#3a0ca3", "white")} // Establecer color de texto según el modo de color
        >
          {review.patient.person.first_name} {review.patient.person.last_name}
        </Text>
        <Text>{review.comment}</Text>
        <Text>
          Calificación: {review.rating}
        </Text>
        <Divider borderColor={useColorModeValue("#3a0ca3", "white")} /> 
      </Box>
    ))}
  </VStack>
  {!isAdmin && (
    <Review doctor_id={Number(id)} patient_id={patient.id} />
  )}
</Box>
      </Box>
    // </Box>
  );
};

export default Detail;

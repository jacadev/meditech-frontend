import React from "react";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { BsStarFill, BsStar } from 'react-icons/bs';
import {
  Box,
  Badge,
  Text,
  Image,
  UnorderedList,
  ListItem,
  Button,
  Heading,
  Avatar,
  Center,
  Stack,
} from "@chakra-ui/react";

import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

function SpecialistCard(props) {
  const userInfo = useSelector(state => state.userInfo)
  const isAdmin = userInfo?.rol === 3

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
  const textColor = useColorModeValue("black", "white");
  const badgeBgColor = useColorModeValue("gray.50", "gray.800");

  return (
    <Link
      to={{
        pathname: isAdmin
          ? `/admin/detail/${props.specialist.id}`
          : `/user/detail/${props.specialist.id}`,
      }}
    >
      <Box
        cursor="pointer"
        _hover={{ boxShadow: "lg", transform: "scale(1.02)" }}
        _active={{ transform: "scale(0.98)" }}
        maxW={"450px"}
        w={"full"}
        h={"400px"}
        bg={cardBgColor}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
        overflow={"auto"}
      >
        <Avatar
          size={"xl"}
          src={props.specialist.profile_image}
          alt={props.specialist.id}
          mb={4}
          pos={"relative"}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"} color={textColor}>
          {props.specialist.person.first_name} {props.specialist.person.last_name}
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          {props.specialist.person.gender}
        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
          css={{ wordWrap: "break-word" }}
        >
          {props.specialist.about_me}
        </Text>
        <span style={{ display: "inline-flex", flexWrap: "nowrap" }}>
          {renderStars(props.specialist.rating)}
        </span>
        <Text mb="2">
          <strong>Precio de la consulta:</strong> ${props.specialist.consultation_cost.toFixed(2)}
        </Text>
        <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          {props.specialist.specialties && (
            <Box>
              {props.specialist.specialties.map((specialty, index) => (
                <Badge
                  key={index}
                  px={2}
                  py={1}
                  bg={badgeBgColor}
                  fontWeight={"400"}
                >
                  {specialty.specialty}
                </Badge>
              ))}
            </Box>
          )}
        </Stack>
      </Box>
    </Link>
  );
};


export default SpecialistCard;
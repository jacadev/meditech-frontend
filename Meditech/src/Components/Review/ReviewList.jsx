import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Stack, Text, Icon } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const ReviewList = ({ specialistId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await axios.get("http://localhost:3001/reviews");
        // Filtra las reviews por el specialistId
        const specialistReviews = response.data.filter(
          (review) => review.specialistId === specialistId
        );
        setReviews(specialistReviews);
      } catch (error) {
        console.log(error);
      }
    };
    getReviews();
  }, [specialistId]);

  const generateStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Icon
          key={i}
          as={StarIcon}
          w={4}
          h={4}
          color={i <= rating ? "yellow.500" : "gray.300"}
        />
      );
    }
    return stars;
  };

  return (
    <Box>
      {reviews.map((review) => (
        <Box key={review.id} mb={4}>
          <Stack direction="row" spacing={2} align="center">
            {generateStars(review.rating)}
            <Text>{review.comment}</Text>
          </Stack>
        </Box>
      ))}
    </Box>
  );
};

export default ReviewList;

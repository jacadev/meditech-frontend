import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Textarea,
  Button,
  HStack,
  Icon,
  useToast,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const RatingStars = ({ rating, onRatingChange }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseOver = (value) => {
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (value) => {
    onRatingChange(value);
  };

  return (
    <HStack spacing="1">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        const isSelected =
          (hoverRating > 0 ? hoverRating : rating) >= starValue;

        return (
          <Icon
            as={StarIcon}
            key={index}
            color={isSelected ? "orange.500" : "gray.300"}
            boxSize="5"
            cursor="pointer"
            onMouseOver={() => handleMouseOver(starValue)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(starValue)}
          />
        );
      })}
    </HStack>
  );
};

const ReviewForm = ({ onSubmit, doctorId }) => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      await onSubmit(comment, rating, doctorId);
      setComment("");
      setRating(0);
      toast({
        title: "Reseña enviada",
        description: "Gracias por dejar tu reseña",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <FormControl mb="4">
        <FormLabel>Comentario</FormLabel>
        <Textarea
          placeholder="Escribe tu reseña"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          isRequired
        />
      </FormControl>
      <FormControl mb="4">
        <FormLabel>Calificación</FormLabel>
        <RatingStars rating={rating} onRatingChange={setRating} />
      </FormControl>
      <Button type="submit" isLoading={isLoading} isDisabled={!comment}>
        Agregar reseña
      </Button>
    </Box>
  );
};

export default ReviewForm;

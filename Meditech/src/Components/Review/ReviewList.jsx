import { VStack } from '@chakra-ui/react';
import ReviewForm from './ReviewForm';

const ReviewList = ({ reviews }) => {
  return (
    <VStack spacing={4}>
      {reviews ? reviews.map((review) => (
        <ReviewForm key={review.id} comment={review.comment} rating={review.rating} />
      )) : []}
    </VStack>
  );
};

export default ReviewList;
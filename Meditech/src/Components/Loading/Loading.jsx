import React from 'react'
import { CircularProgress, Box } from '@chakra-ui/react';

function Loading() {
  return (
     <Box display="flex" alignItems="center" justifyContent="center" height="100%">
    <CircularProgress isIndeterminate color="blue.500" />
  </Box>
  )
}

export default Loading
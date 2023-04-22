import { useHistory } from 'react-router-dom';
import WithSpeechBubbles from '../../../Components/testimonials/index'
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';


export default function SplitScreen() {
  const history = useHistory();
  const userName = localStorage.getItem("userName");
  
  function handleClick() {
    history.push("/user/about-us");
  }
  return (
    <Box>
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg:'#5C43FF',
                zIndex: -1,
              }}>
             Welcome
            </Text>
            <br />{' '}
            <Text color='#5C43FF' as={'span'}>
             to Meditech {userName}
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
           We are an institution that stands out for the excellence it grants in all its benefits.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button 
              onClick={handleClick}
              rounded={'full'}
              bg='#5C43FF'
              color={'white'}
              _hover={{
                bg: '#5C43FF',
              }}>
             More about us
            </Button>
         {/*    <Button rounded={'full'}>How It Works</Button> */}
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image 
        borderRadius='10px'
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://img.europapress.es/fotoweb/fotonoticia_20221129142945_1200.jpg'
          }
        />
      </Flex>
  
   </Stack>
      <WithSpeechBubbles/>
    
      </Box>
  );
}
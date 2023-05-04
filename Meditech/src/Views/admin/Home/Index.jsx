import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  useColorMode,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function WithBackgroundImage() {
  const { colorMode } = useColorMode();

  const buttonBgColor = colorMode === 'dark' ? 'gray.700' : 'blue.400';
  const buttonHoverBgColor = colorMode === 'dark' ? 'gray.600' : 'blue.500';

  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(https://www.callkleinlawyers.com/wp-content/uploads/2022/09/duty-of-care-doctor-patient-relationship.jpg)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
      >
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
          >
            Bienvenido al Dashboard de ADMIN
          </Text>
          <Stack direction={'row'}>
            <Link to='/admin/indexdoctor'>
              <Button
                bg={buttonBgColor}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: buttonHoverBgColor }}
              >
                Lista de Médicos
              </Button>
            </Link>
            <Link to='/admin/indexuser'>
              <Button
                bg={'whiteAlpha.300'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'whiteAlpha.500' }}
              >
                Lista de Pacientes
              </Button>
            </Link>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}

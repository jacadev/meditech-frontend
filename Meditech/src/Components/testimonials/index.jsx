import React from 'react';
import avatar8 from '../../assets/img/avatars/avatar8.png';
import avatar10 from '../../assets/img/avatars/avatar10.png';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
    const bgColor = "linear-gradient(135deg, #868CFF 0%, #4318FF 100%)";
  return (
    <Box bg={useColorModeValue(bgColor)} borderRadius='10px' marginTop="10px">
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Comentarios de Nuestros Pacientes</Heading>
          <Text>Nuestros pacientes se ven satifechos con nuestros servicios</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Excelente atención y servicio en este consultorio médico</TestimonialHeading>
              <TestimonialText>
              Mi experiencia en este consultorio ha sido excelente. Desde el momento en que llegué, el personal de recepción me hizo sentir bienvenido y me explicó todo el proceso con detalle. La doctora que me atendió fue muy amable y me explicó mi tratamiento con claridad. Además, me sentí cómodo durante todo el proceso gracias al ambiente tranquilo y relajante del consultorio. Recomiendo este consultorio a cualquiera que esté buscando un servicio de calidad y atención personalizada.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
  src={avatar8}
  name={<span style={{ color: "black" }}>Santiago García Pérez</span>}
  title={<span style={{ color: "white" }}>Paciente atendido en nuestro consultorio</span>}
/>

          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Un consultorio médico confiable y acogedor</TestimonialHeading>
              <TestimonialText>
              Quería expresar mi satisfacción con este consultorio médico. Desde el primer día, me impresionó la atención amable y profesional del personal. La limpieza y la organización del lugar también me dejaron muy satisfecho. La doctora que me atendió fue muy empática y me explicó todo lo que necesitaba saber sobre mi tratamiento. Además, el ambiente del consultorio es muy acogedor y relajante. Definitivamente recomendaría este lugar a cualquiera que esté buscando un servicio médico confiable y amigable.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={avatar10}
              name={<span style={{ color: "black" }}>Valeria García Flores</span>}
              title={<span style={{ color: "white" }}>Paciente atendido en nuestro consultorio</span>}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Atención médica excepcional en este consultorio</TestimonialHeading>
              <TestimonialText>
              No puedo estar más satisfecho con mi experiencia en este consultorio. Desde el principio, el personal de recepción fue muy amable y me explicó todo el proceso con claridad. El consultorio es limpio y bien organizado. La doctora que me atendió fue excepcional: tomó el tiempo de escuchar mis inquietudes y me explicó mi tratamiento en detalle.Recomendaría este consultorio a cualquiera que esté buscando una atención médica excepcional y personalizada.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
              }
              name={<span style={{ color: "black" }}>Ana Gómez Ruiz</span>}
              title={<span style={{ color: "white" }}>Paciente atendido en nuestro consultorio</span>}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
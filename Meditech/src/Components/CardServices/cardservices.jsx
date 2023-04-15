import { Icon, Card, CardHeader, CardBody, Flex, SimpleGrid, Box, Text, Button, Heading } from '@chakra-ui/react'


const cardServices = () => {
  return (<Box borderBottomLeftRadius="100px" borderBottomRightRadius="50px" p={4} mt={20} bg='pallette.color5'>
    <Heading textAlign="center" color="black" >
      Services
    </Heading>
    <Box px={40} my={35} >
      <SimpleGrid columns={5} spacing={4}>
        <Card boxShadow="dark-lg">
          <CardHeader>
            <Heading textAlign="center" size='md'> Medico y enfermeria en planta</Heading>
          </CardHeader>
          <CardBody display="flex" justifyContent="center" alignItems="center" >
            <Icon as={props => <img src="equipo-medico.png" {...props} />} boxSize={16} />
          </CardBody>

        </Card>
        <Card boxShadow="dark-lg">
          <CardHeader>
            <Heading textAlign="center" size='md'> Area Protegida</Heading>
          </CardHeader>
          <CardBody display="flex" justifyContent="center" alignItems="center" >
            <Icon as={props => <img src="proteger.png" {...props} />} boxSize={16} />
          </CardBody>

        </Card>
        <Card boxShadow="dark-lg">
          <CardHeader>
            <Heading textAlign="center" size='md'> Asesoramiento Medico Legal</Heading>
          </CardHeader>
          <CardBody display="flex" justifyContent="center" alignItems="center" >
            <Icon as={props => <img src="consulta.png" {...props} />} boxSize={16} />
          </CardBody>

        </Card>
        <Card boxShadow="dark-lg">
          <CardHeader>
            <Heading textAlign="center" size='md'>Libreta Sanitaria</Heading>
          </CardHeader>
          <CardBody display="flex" justifyContent="center" alignItems="center" >
            <Icon as={props => <img src="libro-de-contactos.png" {...props} />} boxSize={16} />
          </CardBody>

        </Card>
        <Card boxShadow="dark-lg">
          <CardHeader>
            <Heading textAlign="center" size='md'>Seguimiento COVID Test</Heading>
          </CardHeader>
          <CardBody display="flex" justifyContent="center" alignItems="center" >
            <Icon as={props => <img src="prueba-pcr.png" {...props} />} boxSize={16} />
          </CardBody>

        </Card>
        <Card boxShadow="dark-lg">
          <CardHeader>
            <Heading textAlign="center" size='md'> ART</Heading>
          </CardHeader>
          <CardBody display="flex" justifyContent="center" alignItems="center" >
            <Icon as={props => <img src="sitio-web.png" {...props} />} boxSize={16} />
          </CardBody>

        </Card>
        <Card boxShadow="dark-lg">
          <CardHeader>
            <Heading textAlign="center" size='md'> Control de Ausentismo</Heading>
          </CardHeader>
          <CardBody display="flex" justifyContent="center" alignItems="center" >
            <Icon as={props => <img src="control-de-calidad.png" {...props} />} boxSize={16} />
          </CardBody>

        </Card>
        <Card boxShadow="dark-lg">
          <CardHeader>
            <Heading textAlign="center" size='md'> Amplia sala de espera</Heading>
          </CardHeader>
          <CardBody display="flex" justifyContent="center" alignItems="center" >
            <Icon as={props => <img src="sala-de-espera.png" {...props} />} boxSize={16} />
          </CardBody>

        </Card>
        <Card boxShadow="dark-lg">
          <CardHeader>
            <Heading textAlign="center" size='md'>Reserva de turnos web</Heading>
          </CardHeader>
          <CardBody display="flex" justifyContent="center" alignItems="center" >
            <Icon as={props => <img src="reserva-en-linea.png" {...props} />} boxSize={16} />
          </CardBody>

        </Card>
        <Card boxShadow="dark-lg">
          <CardHeader>
            <Heading textAlign="center" size='md'>Wifi de alta velocidad</Heading>
          </CardHeader>
          <CardBody display="flex" justifyContent="center" alignItems="center" >
            <Icon as={props => <img src="wifi.png" {...props} />} boxSize={16} />
          </CardBody>

        </Card>

      </SimpleGrid>
      <Flex flexDirection="column" alignItems="center" my={6}>
    <Text textAlign="center" fontSize="lg" >Para mas informacion</Text>
    <Button colorScheme='blue' mt={2}>Contactanos</Button>
  </Flex>
    </Box>
  </Box>
  )
}

export default cardServices;
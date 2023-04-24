import { Image,Card,Icon, CardHeader, CardBody, Flex, SimpleGrid, Box, Text, Button, Heading } from '@chakra-ui/react'

const cardServices = () => {
 
  return (

    <Box px={40} my={35} >
      <SimpleGrid columns={5} spacing={4}>
        <Card boxShadow="dark-lg">
          <CardHeader>
            <Heading textAlign="center" size='md'> Medical and Nursing staff</Heading>
          </CardHeader>
          <CardBody display="flex" justifyContent="center" alignItems="center" >
            <Icon as={props => <img src="equipo-medico.png" {...props} />} boxSize={16} />
          </CardBody>

        </Card>
        <Card boxShadow="dark-lg">
          <CardHeader>
            <Heading textAlign="center" size='md'> Protected Area</Heading>
          </CardHeader>
          <CardBody display="flex" justifyContent="center" alignItems="center" >
            <Icon as={props => <img src="proteger.png" {...props} />} boxSize={16} />
          </CardBody>

        </Card>
        <Card boxShadow="dark-lg">
          <CardHeader>
            <Heading textAlign="center" size='md'> Legal Medical Advice</Heading>
          </CardHeader>
          <CardBody display="flex" justifyContent="center" alignItems="center" >
            <Icon as={props => <img src="consulta.png" {...props} />} boxSize={16} />
          </CardBody>

        </Card>
        <Card boxShadow="dark-lg">
          <CardHeader>
            <Heading textAlign="center" size='md'>Health Book</Heading>
          </CardHeader>
          <CardBody display="flex" justifyContent="center" alignItems="center" >
            <Icon as={props => <img src="libro-de-contactos.png" {...props} />} boxSize={16} />
          </CardBody>

        </Card>
        <Card boxShadow="dark-lg">
          <CardHeader>
            <Heading textAlign="center" size='md'>COVID-19 Monitoring</Heading>
          </CardHeader>
          <CardBody display="flex" justifyContent="center" alignItems="center" >
            <Icon as={props => <img src="prueba-pcr.png" {...props} />} boxSize={16} />
          </CardBody>

        </Card>
        <Card boxShadow="dark-lg">
          <CardHeader>
            <Heading textAlign="center" size='md'>Health insurance</Heading>
          </CardHeader>
          <CardBody display="flex" justifyContent="center" alignItems="center" >
            <Icon as={props => <img src="sitio-web.png" {...props} />} boxSize={16} />
          </CardBody>

        </Card>
        <Card boxShadow="dark-lg">
          <CardHeader>
            <Heading textAlign="center" size='md'> Truant Officer</Heading>
          </CardHeader>
          <CardBody display="flex" justifyContent="center" alignItems="center" >
            <Icon as={props => <img src="control-de-calidad.png" {...props} />} boxSize={16} />
          </CardBody>
 
        </Card>
        <Card boxShadow="dark-lg">
          <CardHeader>
            <Heading textAlign="center" size='md'> Large Waiting Room</Heading>
          </CardHeader>
          <CardBody display="flex" justifyContent="center" alignItems="center" >
            <Icon as={props => <img src="sala-de-espera.png" {...props} />} boxSize={16} />
          </CardBody>

        </Card>
        <Card boxShadow="dark-lg">
          <CardHeader>
            <Heading textAlign="center" size='md'>Booking of Web Shifts</Heading>
          </CardHeader>
          <CardBody display="flex" justifyContent="center" alignItems="center" >
            <Icon as={props => <img src="reserva-en-linea.png" {...props} />} boxSize={16} />
          </CardBody>

        </Card>
        <Card boxShadow="dark-lg">
          <CardHeader>
            <Heading textAlign="center" size='md'>High Speed Wifi</Heading>
          </CardHeader>
          <CardBody display="flex" justifyContent="center" alignItems="center" >
            <Icon as={props => <img src="wifi.png" {...props} />} boxSize={16} />
          </CardBody>

        </Card>

      </SimpleGrid>
 
    </Box>
  
  )
}

export default cardServices;
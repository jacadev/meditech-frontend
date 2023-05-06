import {
  Image,
  Card,
  Icon,
  CardHeader,
  CardBody,
  Flex,
  SimpleGrid,
  Box,
  Text,
  Button,
  Heading,
} from "@chakra-ui/react";

const cardServices = () => {
  return (
    <Box px={40} my={35}>
      <SimpleGrid columns={5} spacing={4}>
        <Card boxShadow="dark-lg">
          <CardHeader>
            <Heading textAlign="center" size="md">
              {" "}
              Personal médico y de enfermería
            </Heading>
          </CardHeader>
          <CardBody display="flex" justifyContent="center" alignItems="center">
            <Icon
              as={(props) => <img src="equipo-medico.png" {...props} />}
              boxSize={16}
            />
          </CardBody>
        </Card>
        <Card boxShadow="dark-lg">
          <CardHeader>
            <Heading textAlign="center" size="md">
              {" "}
              Área protegida
            </Heading>
          </CardHeader>
          <CardBody display="flex" justifyContent="center" alignItems="center">
            <Icon
              as={(props) => <img src="proteger.png" {...props} />}
              boxSize={16}
            />
          </CardBody>
        </Card>
        <Card boxShadow="dark-lg">
          <CardHeader>
            <Heading textAlign="center" size="md">
              Asesoramiento Médico Legal
            </Heading>
          </CardHeader>
          <CardBody display="flex" justifyContent="center" alignItems="center">
            <Icon
              as={(props) => <img src="consulta.png" {...props} />}
              boxSize={16}
            />
          </CardBody>
        </Card>
        <Card boxShadow="dark-lg">
          <CardHeader>
            <Heading textAlign="center" size="md">
              Libreta Sanitaria
            </Heading>
          </CardHeader>
          <CardBody display="flex" justifyContent="center" alignItems="center">
            <Icon
              as={(props) => <img src="libro-de-contactos.png" {...props} />}
              boxSize={16}
            />
          </CardBody>
        </Card>
        <Card boxShadow="dark-lg">
          <CardHeader>
            <Heading textAlign="center" size="md">
              Seguimiento COVID-19
            </Heading>
          </CardHeader>
          <CardBody display="flex" justifyContent="center" alignItems="center">
            <Icon
              as={(props) => <img src="prueba-pcr.png" {...props} />}
              boxSize={16}
            />
          </CardBody>
        </Card>
        <Card boxShadow="dark-lg">
          <CardHeader>
            <Heading textAlign="center" size="md">
              Seguro de salud
            </Heading>
          </CardHeader>
          <CardBody display="flex" justifyContent="center" alignItems="center">
            <Icon
              as={(props) => <img src="sitio-web.png" {...props} />}
              boxSize={16}
            />
          </CardBody>
        </Card>
        <Card boxShadow="dark-lg">
          <CardHeader>
            <Heading textAlign="center" size="md">
              Certificado de ausentismo laboral
            </Heading>
          </CardHeader>
          <CardBody display="flex" justifyContent="center" alignItems="center">
            <Icon
              as={(props) => <img src="control-de-calidad.png" {...props} />}
              boxSize={16}
            />
          </CardBody>
        </Card>
        <Card boxShadow="dark-lg">
          <CardHeader>
            <Heading textAlign="center" size="md">
              Amplia Sala de Espera
            </Heading>
          </CardHeader>
          <CardBody display="flex" justifyContent="center" alignItems="center">
            <Icon
              as={(props) => <img src="sala-de-espera.png" {...props} />}
              boxSize={16}
            />
          </CardBody>
        </Card>
        <Card boxShadow="dark-lg">
          <CardHeader>
            <Heading textAlign="center" size="md">
              Reserva de Turnos Web
            </Heading>
          </CardHeader>
          <CardBody display="flex" justifyContent="center" alignItems="center">
            <Icon
              as={(props) => <img src="reserva-en-linea.png" {...props} />}
              boxSize={16}
            />
          </CardBody>
        </Card>
        <Card boxShadow="dark-lg">
          <CardHeader>
            <Heading textAlign="center" size="md">
              Wifi de Alta Velocidad
            </Heading>
          </CardHeader>
          <CardBody display="flex" justifyContent="center" alignItems="center">
            <Icon
              as={(props) => <img src="wifi.png" {...props} />}
              boxSize={16}
            />
          </CardBody>
        </Card>
      </SimpleGrid>
    </Box>
  );
};

export default cardServices;

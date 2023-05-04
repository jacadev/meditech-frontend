import {
  Box,
  Card,
  Select as Select1,
  Textarea,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Heading,
  CardBody,
  CardHeader,
  Image,
  Text,
  CardFooter,
  Stack,
  Alert,
  AlertIcon,
  Tooltip,
  useColorModeValue
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import { useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getEspecialidades,
  postDoctor,
} from "./../../../Redux/Actions/actions";
import Select from "react-select";
import { useHistory } from 'react-router-dom';


function Formulario() {
  const [image, setImage] = useState([]);
  const [form, setForm] = useState({
    email: "",
    phone: [],
    age: "",
    first_name: "",
    last_name: "",
    gender: "",
    about_me: "",
    tuition_code: "",
    consultation_cost: "",
    location: { city: "", country: "", address: "" },
    diseases_treated: [],
    specialties: [],
    rol_id: [1],
  });
  const handleChangEspecialits = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions);

    const selectedValues = selectedOptions.map((option) =>
      parseInt(option.value)
    );

    setForm({
      ...form,
      specialties: selectedValues,
    });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    if (name === "city" || name === "country" || name === "address") {
      setForm({ ...form, location: { ...form.location, [name]: value } });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
    if (name === "phone" || name === "diseases_treated") {
      const valor = value.split(",");
      setForm({ ...form, [name]: valor });
    }
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setFileToBase(file);
    console.log(file);
  };

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  const dispatch = useDispatch();

  const especialidades = useSelector((state) => state.especialidades);

  const optionsEspecialidades = Array.isArray(especialidades)
    ? especialidades.map((especialidad) => ({
        value: parseInt(especialidad.id),
        label: especialidad.specialty,
      }))
    : [];

  const handleSubmit = (event) => {
    event.preventDefault();
    let formToSend = form;
    formToSend.profile_image = image;
    formToSend.preload = false;
    console.log(formToSend);

    dispatch(postDoctor(formToSend));

    setForm({
      email: "",
      phone: [],
      age: "",
      first_name: "",
      last_name: "",
      gender: "",
      about_me: "",
      tuition_code: "",
      consultation_cost: "",
      location: { city: "", country: "", address: "" },
      diseases_treated: [],
      specialties: [],
      rol_id: [1],
    });

    setImage({
      image: "",
    });
  };

  useEffect(() => {
    dispatch(getEspecialidades());
  }, []);
  console.log(form);
  const handleChangeEspecialidades = (selectedOptions) => {
    const options = selectedOptions.map((option) => option.value);
    setForm((prevState) => ({ ...prevState, specialties: options }));
  };
  const history = useHistory();

  const handleClick = (event) => {
    event.preventDefault();
    history.push("admin/indexdoctor");
  };
  const { colorMode } = useColorMode();
  const customSelectStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "white" : "black",
      backgroundColor: state.isSelected ? "blue" : "transparent",
      "&:hover": {
        backgroundColor: "lightblue",
      },
    }),
  };
  return (
    <Card p={5} mx="auto" mt={{ md: "12vh" }}>
      <Heading fontSize="36px" mb="10px">
        Registrar doctor
      </Heading>
      <form onSubmit={handleSubmit}>
        <Flex flexWrap="wrap" flexDirection="column">
          <Flex flexGrow={1}>
            <FormControl id="email" mb={3} mr={3}>
              <FormLabel>
                Email{" "}
                <Text as="span" color="red.500">
                  *
                </Text>
              </FormLabel>
              <Input
                isRequired={true}
                placeholder="Email"
                type="email"
                value={form.email}
                onChange={handleChange}
                name="email"
              />
            </FormControl>
            <FormControl id="age" mb={3} mr={3}>
              <FormLabel>
                Edad{" "}
                <Text as="span" color="red.500">
                  *
                </Text>
              </FormLabel>
              <Input
                isRequired={true}
                type="number"
                value={form.age}
                placeholder="Inserte su edad"
                onChange={handleChange}
                name="age"
              />
            </FormControl>
            <FormControl id="gender" mb={3} mr={3}>
              <FormLabel>
                Genero{" "}
                <Text as="span" color="red.500">
                  *
                </Text>
              </FormLabel>
              <Select1
                isRequired={true}
                value={form.gender}
                onChange={handleChange}
                name="gender"
              >
                <option value="">Seleccione una opción</option>
                <option value="Masculino">Hombre</option>
                <option value="Femenino">Mujer</option>
              </Select1>
            </FormControl>
          </Flex>
          <Flex flexGrow={2}>
            <FormControl id="nombre" mb={3} mr={3}>
              <FormLabel>
                Nombre{" "}
                <Text as="span" color="red.500">
                  *
                </Text>
              </FormLabel>
              <Input
                isRequired={true}
                type="text"
                placeholder="Inserte sus nombres"
                value={form.first_name}
                onChange={handleChange}
                name="first_name"
              />
            </FormControl>
            <FormControl id="apellido" mb={3} mr={3}>
              <FormLabel>
                Apellido{" "}
                <Text as="span" color="red.500">
                  *
                </Text>
              </FormLabel>
              <Input
                isRequired={true}
                type="text"
                placeholder="Inserte sus apellidos"
                value={form.last_name}
                onChange={handleChange}
                name="last_name"
              />
            </FormControl>
            <FormControl id="telefono" mb={3} mr={3}>
              <FormLabel>
                Telefono{" "}
                <Text as="span" color="red.500">
                  *
                </Text>
              </FormLabel>
              <Input
                isRequired={true}
                type="text"
                value={form.phone}
                placeholder="Inserte su teleono"
                onChange={handleChange}
                name="phone"
              />
            </FormControl>
          </Flex>
          <Flex flexGrow={2}>
            <FormControl id="about_me" mb={3} mr={3}>
              <FormLabel>
                Un poco acerca de mi{" "}
                <Text as="span" color="red.500">
                  *
                </Text>
              </FormLabel>
              <Textarea
                isRequired={true}
                placeholder="Describase a usted mismo"
                value={form.about_me}
                onChange={handleChange}
                name="about_me"
              />
            </FormControl>
          </Flex>
          <Flex flexGrow={2}>
            <FormControl id="profile_image" mb={3} mr={3}>
              <FormLabel>
                Imagen de perfil (URL){" "}
                <Text as="span" color="red.500">
                  *
                </Text>
              </FormLabel>
              <Input
                isRequired={true}
                type="file"
                placeholder="Inserte el URL de la imagen"
                value={form.profile_image}
                onChange={handleImage}
                name="profile_image"
              />
            </FormControl>

            <FormControl id="tuition_code" mb={3} mr={3}>
              <FormLabel>
                Código de matrícula{" "}
                <Text as="span" color="red.500">
                  *
                </Text>
              </FormLabel>
              <Input
                isRequired={true}
                type="text"
                placeholder="Inserte el codigo de matricula"
                value={form.tuition_code}
                onChange={handleChange}
                name="tuition_code"
              />
            </FormControl>
            <FormControl id="consultation_cost" mb={3} mr={3}>
              <FormLabel>
                Costo de consulta{" "}
                <Text as="span" color="red.500">
                  *
                </Text>
              </FormLabel>
              <Input
                isRequired={true}
                type="number"
                value={form.consultation_cost}
                placeholder="Inserte el costo de sus consultas en dolares"
                onChange={handleChange}
                name="consultation_cost"
              />
            </FormControl>
          </Flex>
          <Flex flexGrow={2}>
            <FormControl id="city" mb={3} mr={3}>
              <FormLabel>
                Ciudad{" "}
                <Text as="span" color="red.500">
                  *
                </Text>
              </FormLabel>
              <Input
                isRequired={true}
                type="text"
                value={form.location.city}
                placeholder="Inserte su ciudad"
                onChange={handleChange}
                name="city"
              />
            </FormControl>
            <FormControl id="country" mb={3} mr={3}>
              <FormLabel>
                País{" "}
                <Text as="span" color="red.500">
                  *
                </Text>
              </FormLabel>
              <Input
                isRequired={true}
                type="text"
                value={form.location.country}
                placeholder="Inserte su pais"
                onChange={handleChange}
                name="country"
              />
            </FormControl>
            <FormControl id="address" mb={3} mr={3}>
              <FormLabel>
                Dirección{" "}
                <Text as="span" color="red.500">
                  *
                </Text>
              </FormLabel>
              <Input
                isRequired={true}
                type="text"
                value={form.location.address}
                placeholder="Inserte su dirección"
                onChange={handleChange}
                name="address"
              />
            </FormControl>
          </Flex>
        </Flex>
        <Flex flexGrow={2}>
          <FormControl id="address" mb={3} mr={3}>
            <FormLabel>
              Enfermedades que trata{" "}
              <Text as="span" color="red.500">
                *
              </Text>
            </FormLabel>
            <Input
              isRequired={true}
              type="text"
              value={form.diseases_treated}
              placeholder="Inserte las enfermedades con las que trata"
              onChange={handleChange}
              name="diseases_treated"
            />
          </FormControl>
          <FormControl id="country"  mb={3} mr={3}>
            <FormLabel>
              Especialidades{" "}
              <Text as="span" color="red.500">
                *
              </Text>
            </FormLabel>
            <Select
              bg={useColorModeValue("white", "gray.800")}
              closeMenuOnSelect={false}
              defaultValue={form.specialties}
              isRequired={true}
              onChange={handleChangeEspecialidades}
              name="specialties"
              isMulti
              options={optionsEspecialidades.map((option) => ({
                value: option.value,
                label: option.label,
              }))}
              styles={customSelectStyles}
            />
          </FormControl>
        </Flex>

        <Flex flexGrow={2}>
          <Card
            mx="auto"
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image maxW={{ base: "100%", sm: "200px" }} src={image} />
            <Stack>
              <CardBody>
                <Heading size="md">¿Termiaste el formulario?</Heading>
                <Text py="2">
                  Recuerda llenar todos los campos que tengan el siguiente
                  simbolo:{" "}
                  <Text as="span" color="red.500">
                    *
                  </Text>{" "}
                  despues dale en <b> enviar</b> para terminar el registro
                </Text>
              </CardBody>

              <CardFooter>
                <Tooltip hasArrow label="Enviar formulario" bg="blue.600">
                  <Button colorScheme="blue" type="submit" onChange={handleClick}>
                    Enviar
                  </Button>
                </Tooltip>
              </CardFooter>
            </Stack>
          </Card>
        </Flex>
      </form>
    </Card>
  );
}

export default Formulario;

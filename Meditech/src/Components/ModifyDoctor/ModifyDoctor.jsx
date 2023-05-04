import {
  Card,
  Select,
  Textarea,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Heading,
  CardBody,
  Image,
  Text,
  CardFooter,
  Stack,
  Tooltip,
  useToast
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
    cleanDetail,
  getDoctor,
  putDoctorAdmin,
} from "../../Redux/Actions/actions";

function ModifyDoctor() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const toast = useToast()
  /* const history = useHistory(); */

  //   const especialidades = useSelector((state) => state.especialidades);
  const doctorDetail = useSelector((state) => state.doctorDetail);

  const [form, setForm] = useState({
    
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
useEffect(()=>{

  if(!doctorDetail.length){
    setForm({email: doctorDetail.person?.email,
      phone: doctorDetail.person?.phone,
      age: doctorDetail.person?.age,
      first_name: doctorDetail.person?.firstName,
      last_name: doctorDetail.person?.lastName,
      about_me: doctorDetail?.about_me,
      consultation_cost: doctorDetail?.consultation_cost,
      location: {
        city: doctorDetail.location?.city,
        country: doctorDetail.location?.country,
        address: doctorDetail.location?.address,
      },
      diseases_treated: doctorDetail?.diseases_treated,
      // specialties: doctorDetail?.specialties,
      // disponibilties_id: doctorDetail?.disponibilties,
      status: doctorDetail.person?.status,
      profile_image: doctorDetail?.profile_image,})
  }

},[doctorDetail])
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
      setForm({
        ...form,
        profile_image: reader.result,
      });
    };
  };

  //   const optionsEspecialidades = Array.isArray(especialidades)
  //     ? especialidades.map((especialidad) => ({
  //         value: parseInt(especialidad.id),
  //         label: especialidad.specialty,
  //       }))
  //     : [];
/*   const handleChangeEspecialidades = (selectedOptions) => {
    const options = selectedOptions.map((option) => option.value);
    setForm((prevState) => ({ ...prevState, specialties: options }));
  };
 */
/*   const handleClick = (event) => {
    // event.preventDefault();
     history.push("/admin/indexdoctor");    

  }; */

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("hola", form); //------------------------------------------

    dispatch(putDoctorAdmin(id, form));
    toast({
      title: `se actulizo correctamente.`,
      status:"success",
      isClosable: true,
    })
   return
  };

  useEffect(() => {
    // dispatch(getEspecialidades());
    
    dispatch(getDoctor(id));
    console.log("cargando el componente");

    return () => {
      console.log("me estoy limpiando ");
      dispatch(cleanDetail())
    };
  }, [id]);

  return (
    <Card p={5} mx="auto" mt={{ md: "12vh" }}>
      <Heading fontSize="36px" mb="10px">
        Actualizar doctor
      </Heading>
      <form onSubmit={handleSubmit}>
        <Flex flexWrap="wrap" flexDirection="column">
          <Flex flexGrow={1}>
            <FormControl id="email" mb={3} mr={3}>
              <FormLabel>Email </FormLabel>
              <Input
                type="email"
                value={form?.email}
                onChange={handleChange}
                name="email"
              />
            </FormControl>
            <FormControl id="age" mb={3} mr={3}>
              <FormLabel>Edad </FormLabel>
              <Input
                type="number"
                value={form?.age}
                onChange={handleChange}
                name="age"
              />
            </FormControl>
          </Flex>
          <Flex flexGrow={2}>
            <FormControl id="nombre" mb={3} mr={3}>
              <FormLabel>Nombre </FormLabel>
              <Input
                type="text"
                value={form?.first_name}
                onChange={handleChange}
                name="first_name"
              />
            </FormControl>
            <FormControl id="apellido" mb={3} mr={3}>
              <FormLabel>Apellido </FormLabel>
              <Input
                type="text"
                value={form?.last_name}
                onChange={handleChange}
                name="last_name"
              />
            </FormControl>
            <FormControl id="telefono" mb={3} mr={3}>
              <FormLabel>Telefono </FormLabel>
              <Input
                type="text"
                value={form?.phone}
                onChange={handleChange}
                name="phone"
              />
            </FormControl>
          </Flex>
          <Flex flexGrow={2}>
            <FormControl id="about_me" mb={3} mr={3}>
              <FormLabel>Un poco acerca de mi </FormLabel>
              <Textarea
                value={form?.about_me}
                onChange={handleChange}
                name="about_me"
              />
            </FormControl>
          </Flex>
          <Flex flexGrow={2}>
            <FormControl id="profile_image" mb={3} mr={3}>
              <FormLabel>Imagen de perfil (URL) </FormLabel>
              <Input
                type="file"
                placeholder="Inserte el URL de la imagen"
                /*  value={form?.profile_image} */
                 onChange={handleImage}
                name="profile_image"
              />
            </FormControl>

            <FormControl id="consultation_cost" mb={3} mr={3}>
              <FormLabel>Costo de consulta </FormLabel>
              <Input
                type="number"
                value={form?.consultation_cost}
                onChange={handleChange}
                name="consultation_cost"
              />
            </FormControl>
          </Flex>
          <Flex flexGrow={2}>
            <FormControl id="city" mb={3} mr={3}>
              <FormLabel>Ciudad </FormLabel>
              <Input
                type="text"
                value={form.location?.city}
                onChange={handleChange}
                name="city"
              />
            </FormControl>
            <FormControl id="country" mb={3} mr={3}>
              <FormLabel>País </FormLabel>
              <Input
                type="text"
                value={form.location?.country}
                onChange={handleChange}
                name="country"
              />
            </FormControl>
            <FormControl id="address" mb={3} mr={3}>
              <FormLabel>Dirección </FormLabel>
              <Input
                type="text"
                value={form.location?.address}
                onChange={handleChange}
                name="address"
              />
            </FormControl>
          </Flex>
        </Flex>
        <Flex flexGrow={2}>
          <FormControl id="enfermedades" mb={3} mr={3}>
            <FormLabel>Enfermedades que trata </FormLabel>
            <Input
              type="text"
              value={form?.diseases_treated}
              onChange={handleChange}
              name="diseases_treated"
            />
          </FormControl>
          {/* <FormControl id="especialidades" mb={3} mr={3}>
            <FormLabel>Especialidades </FormLabel>
            <Select
              closeMenuOnSelect={false}
              defaultValue={form.specialties}
              onChange={handleChangeEspecialidades}
              name="specialties"
              isMulti
              options={optionsEspecialidades.map((option) => ({
                value: option.value,
                label: option.label,
              }))}
            />
          </FormControl> */}
        </Flex>

        <Flex flexGrow={2}>
          <Card
            mx="auto"
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              maxW={{ base: "100%", sm: "200px" }}
              src={form?.profile_image}
            />
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
                  <Button
                    colorScheme="blue"
                    type="submit"
                   /*  onClick={handleClick} */
                  >
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

export default ModifyDoctor;

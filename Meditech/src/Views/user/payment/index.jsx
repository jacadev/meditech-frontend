import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { Box, Button, Text, Spinner } from '@chakra-ui/react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton,Alert,AlertIcon } from "@chakra-ui/react";

import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import axios from 'axios';
function PayPalCheckout() {
  const history = useHistory();
  const userInfo = useSelector(state => state.objeto)
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);
  const [showErrorModal, setshowErrorModal] = React.useState(false);

  //console.log(userInfo)
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: userInfo.consultationCost,
          },
        },
      ],
    });
  };
  const postCita = {
    patient_id: userInfo.patient_id,
    date: userInfo.date,
    disponibilty_id: userInfo.disponibilty_id,
    consultationReason: userInfo.consultationReason,
    preload: "false",
  }
  //console.log(postCita, "aca")
  const onApprove = (data, actions) => {

    return actions.order.capture().then(async function (details) {
      const detail = {
        create_time: details.create_time,
        address: details.payer.address.country_code,
        email_address: details.payer.email_address,
        given_name: details.payer.name.given_name,
        surname: details.payer.name.surname,
        currency_code: details.purchase_units[0].amount.currency_code,
        amount: details.purchase_units[0].amount.value,
        status: details.status
      }
      if (details.status === "COMPLETED") {
        const responseCita = await axios.post("http://localhost:3001/appointments", postCita)
        const detail = {
          create_time: details.create_time,
          address: details.payer.address.country_code,
          email_address: details.payer.email_address,
          given_name: details.payer.name.given_name,
          surname: details.payer.name.surname,
          currency_code: details.purchase_units[0].amount.currency_code,
          amount: details.purchase_units[0].amount.value,
          status: details.status,
          appointment_id: responseCita.data.id
        }

        await axios.post("http://localhost:3001/pays", detail)
        setShowSuccessModal(true);
      }
      else {
        setshowErrorModal(true)
      }
    });
  };

  return (<Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
    <Box borderWidth="1px" borderRadius="lg" padding="1" mb="10" width="500px" boxShadow="dark-lg" bg="#F3f3f3">

      <PayPalScriptProvider
        options={{
          locale: "en_US",
          clientID: "AXsHOQxUux-C65uLkrITyyCgr4soVgmubx_ofLNOs947AXh0p5s54jwrkEpQgTvVN7gcyGqh0DZFJCC8"
        }}
        onError={(err) => console.log("Error loading PayPal script", err)}
      >

        <Text textAlign="center">ingrese su metodo de pago</Text>
        <PayPalButtons
          createOrder={createOrder}
          onApprove={onApprove}
          style={{
            layout: 'vertical',
            color: 'gold',
            shape: 'rect',
            label: 'paypal',
            height: 40,
          }}

          renderLoading={() => (
            <Button >
              <Spinner mr={3} size="sm" />Cargando PayPal
            </Button>
          )}
        />
<Modal isOpen={showSuccessModal} onClose={() => {
  setShowSuccessModal(false);
  window.location.href = "/#/user/staff"; // redirecciona al usuario a la página deseada
}}>
  <ModalOverlay />
  <ModalContent bg="#F3f3f3" maxW="600px" size="md">
    <ModalHeader fontWeight="bold" color="blue.600">
      Pago completado
    </ModalHeader>
    <ModalCloseButton />
    <ModalBody>
      <Box borderRadius='10px'>
      <Alert status="success">
          <AlertIcon />
          <Text fontSize="lg" mb={2}>
          Su pago ha sido procesado con éxito.
          Le enviamos los datos de la cita a su correo.
          </Text>
        
        </Alert>
      
      </Box>
    </ModalBody>
  </ModalContent>
</Modal>


<Modal isOpen={showErrorModal} onClose={() => setshowErrorModal(false)}>
  <ModalOverlay />
  <ModalContent bg="#F3f3f3" maxW="600px" size="md">
    <ModalHeader fontWeight="bold" color="blue.600">
      El pago fue rechazado
    </ModalHeader>
    <ModalCloseButton />
    <ModalBody>
      <Box>
        <Text fontSize="lg" mb={2}>
          Por favor realize el pago con otra cuenta
        </Text>
      </Box>
    </ModalBody>
  </ModalContent>
</Modal>

      </PayPalScriptProvider>

    </Box>
  </Box>

  );
}

export default PayPalCheckout;

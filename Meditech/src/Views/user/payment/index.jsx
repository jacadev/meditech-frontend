import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { Box, Button, Text, Spinner } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import axios from 'axios';
function PayPalCheckout() {
  const history = useHistory();
  const userInfo = useSelector(state=>state.objeto)
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
  patient_id:userInfo.patient_id,
  date:userInfo.date,
  disponibilty_id:userInfo.disponibilty_id,
  consultationReason:userInfo.consultationReason,
  preload:"false",
}
console.log(postCita, "aca")
  const onApprove = (data, actions) => {
    
    return actions.order.capture().then(async function(details) {
      const detail = {create_time:details.create_time,
                      address:details.payer.address.country_code,
                      email_address:details.payer.email_address,
                      given_name:details.payer.name.given_name,
                      surname:details.payer.name.surname,
                      currency_code:details.purchase_units[0].amount.currency_code,
                      amount:details.purchase_units[0].amount.value,
                      status:details.status
}
     if(details.status === "COMPLETED"){
       const responseCita = await axios.post("http://localhost:3001/appointments", postCita) 
      const detail = {create_time:details.create_time,
        address:details.payer.address.country_code,
        email_address:details.payer.email_address,
        given_name:details.payer.name.given_name,
        surname:details.payer.name.surname,
        currency_code:details.purchase_units[0].amount.currency_code,
        amount:details.purchase_units[0].amount.value,
        status:details.status,
        appointment_id:responseCita.data.id
}

           await axios.post("http://localhost:3001/pays",detail)
            } 
            history.push("/user/Staff");
});
  };
/*   {
    "date": "2023-04-19",
    "consultationReason": "Me duele mucho la cabeza",
    "patient_id": 1,
    "disponibilty_id": 1
} */

  return (<Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
  <Box borderWidth="1px" borderRadius="lg" padding="1" mb="10" width="500px" boxShadow="dark-lg" bg="#F3f3f3">
    <PayPalScriptProvider options={{ "client-id": "AfaDtjBiApMUSmEH4Avl-hvKfAt4vJViSm4nROgKFrWyXU_bI5QXBpMWs884z3YZ_y8mkkS5ddvwJDdq",locale: 'en_US'}}>
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
          <Button isDisabled>
            <Spinner mr={3} size="sm" />Cargando PayPal
          </Button>
        )}
      />
    </PayPalScriptProvider>
  </Box>
</Box>

  );
}

export default PayPalCheckout;

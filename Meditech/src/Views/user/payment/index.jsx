import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { Box, Button, Text, Spinner } from '@chakra-ui/react';

function PayPalCheckout() {
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: '0.01',
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function(details) {
      console.log(details);
    });
  };

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

import { Box,Alert,AlertIcon } from "@chakra-ui/react"



const paymentProcess = () => {



    return (
        <Box marginTop="100px">
            <Alert status="success">
          <AlertIcon />
          El pago se realizó con éxito,
          le enviamos la informacion de la cita a su correo

        </Alert>
        </Box>
    )
}

export default paymentProcess;
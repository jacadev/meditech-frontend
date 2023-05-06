import { useState, useEffect, useRef } from "react";
import { Box, Text } from "@chakra-ui/react";

function Contador({ limite }) {
  const [contador, setContador] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const contadorStyles = {
    fontSize: "30px",
    fontWeight: "bold",
    color: "white",
  };

  // Usa un useRef para guardar la referencia del componente
  const contadorRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // El primer parámetro es un arreglo de las entradas observadas
      // En este caso, solo hay una entrada en el arreglo
      const entrada = entries[0];
      if (entrada.isIntersecting) {
        setIsVisible(true);
      }
    });

    // Observa el elemento contador
    observer.observe(contadorRef.current);

    // Limpia el observer al desmontar el componente
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const intervalId = setInterval(() => {
        if (contador < limite) {
          setContador(contador + 1);
        }
      }, 30); // Intervalo de 100 milisegundos
      return () => clearInterval(intervalId);
    }
  }, [contador, isVisible, limite]);

  return (
    <Box ref={contadorRef}>
      <Text textAlign="center" style={contadorStyles}>
        {contador}
      </Text>
    </Box>
  );
}

export default Contador;

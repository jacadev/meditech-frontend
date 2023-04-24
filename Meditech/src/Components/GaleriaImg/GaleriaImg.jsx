import { useState, useEffect } from "react";
import { SimpleGrid, Image,Box } from "@chakra-ui/react";

function Gallery({ images, delay = 3000 }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage < images.length - 1 ? prevImage + 1 : 0));
    }, delay);
    return () => clearInterval(intervalId);
  }, [images.length, delay]);

  return (
    <Box transition="all 0.5s ease-in-out">
    <Image
      src={images[currentImage]}
      alt={`Imagen ${currentImage + 1}`}
      opacity={1}
      _hover={{ opacity: 0.8 }}
      onLoad={() => {
        setCurrentImage(currentImage);
      }}
      onError={(event) => {
        event.target.style.display = "none";
      }}
      key={currentImage}
      width="100%" // Ancho de la imagen en píxeles
      height={500} // Alto de la imagen en píxeles
      objectFit="cover" // Ajuste de la imagen
      objectPosition="center -110px" // Mostrar la parte superior de la imagen
    />
  </Box>
  
  );
}

export default Gallery;

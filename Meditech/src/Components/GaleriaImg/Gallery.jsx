import { Box, Center } from "@chakra-ui/react";
import Gallery from "./GaleriaImg"

const images = [
    "https://drive.google.com/uc?export=download&id=1oSoNdTsABb0EOOMEgfxCCP55qQFJWE3t",
    "https://drive.google.com/uc?export=download&id=1HTOKawhzXLyGzGrBpUqglPoBe7i2WMve",
    "https://drive.google.com/uc?export=download&id=12i_JxcUGGKRf5exPDD7_im7B6mj-leXe",
  ];


const Gallery1=()=>{

    return (
        
        <Box width="100%"> 
        <Gallery images={images}/>
        </Box>
        
    )


}

export default Gallery1;
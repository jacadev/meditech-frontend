import { extendTheme } from "@chakra-ui/react"


    const  colors = {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: {
        50: '#f7fafc',
        // ...
        900: '#171923',
      },
      
      pallette:{
        color1: '#3a3132',
        color2: '#0f4571',
        color3: '#386dbd',
        color4: '#009ddd',
        color5: '#05d3f8',
      }
      // ...
    }

    export const theme = extendTheme({colors})
  

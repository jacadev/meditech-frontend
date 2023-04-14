import { Grid,GridItem } from '@chakra-ui/react'
import CardServices from '../../Components/CardServices/cardservices';

const services = () =>{

    return(
<Grid
  templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
  gridTemplateRows={'70px 1fr 30px'}
  gridTemplateColumns={'250px 1fr'}
  h='960px'
  gap='1'
>
  <GridItem pl='2' bg='orange.300' area={'header'}>
    Header
  </GridItem>
  <GridItem pl='2' bg='pink.300' area={'nav'}>
    Nav
  </GridItem>
  <GridItem pl='2' bg='pallette.color5' area={'main'}>
    

 <CardServices/>
   
  
  </GridItem>
  <GridItem pl='2' bg='pallette.color2' area={'footer'}>
    Footer
  </GridItem>
</Grid>

    )
}

export default services;
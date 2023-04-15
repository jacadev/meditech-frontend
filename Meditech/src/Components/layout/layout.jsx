import { Grid,GridItem } from '@chakra-ui/react'
import CardServices from '../CardServices/cardservices';
import { useLocation } from 'react-router-dom';


const layout = () =>{
    
    const { pathname } = useLocation();
    const mostrarMiComponente = pathname === '/services';
    
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
        <GridItem pl='2' bg='pallette.color1' area={'header'}>
          Header
        </GridItem>
        <GridItem pl='2' bg='pink.300' area={'nav'}>
          Nav
        </GridItem>
        {mostrarMiComponente ? (
        <CardServices />
      ) : (
        <GridItem pl='2' bg='pallette.color5' area={'main'}>
          
        </GridItem>
      )}
        <GridItem pl='2' bg='pallette.color2' area={'footer'}>
          Footer
        </GridItem>
      </Grid>
    )
}
export default layout;

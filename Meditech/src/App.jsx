import { Route, Switch } from 'react-router-dom'
import home from './Views/Home/home'
import services from './Views/Services/services'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './resources/theme'

function App() {


  return (
    <div>
  
     
    <ChakraProvider theme={theme}>
      <Switch>
       <Route exact path= "/" component={home}/>
       <Route exact path= "/services" component={services}/>
      </Switch>
    </ChakraProvider>
   
    </div>
  )
}

export default App

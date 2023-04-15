import { Route, Switch } from 'react-router-dom'
import home from './Views/Home/home'
import { ChakraProvider } from '@chakra-ui/react'
import Reserve from './Views/Reserve/reserve'
import Specialists from './Views/Especialista/Specialists'

function App() {


  return (
    <div>
  
     
    <ChakraProvider>
      <Switch>
       <Route exact path= "/" component={home}/>
        <Route exact path= "/reserve" component={Reserve}/>
        <Route exact path= "/especialista" component={Specialists}/>
      </Switch>
    </ChakraProvider>
   
    </div>
  )
}

export default App

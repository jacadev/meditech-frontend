import { Route, Switch } from 'react-router-dom'
import home from './Views/Home/home'
import { ChakraProvider } from '@chakra-ui/react'

function App() {


  return (
    <div>
  
     
    <ChakraProvider>
      <Switch>
       <Route exact path= "/" component={home}/>
      </Switch>
    </ChakraProvider>
   
    </div>
  )
}

export default App

import { Route, Switch } from 'react-router-dom'
import home from './Views/Home/home'
import AboutUs from './Views/AboutUs/AboutUs'
import { ChakraProvider } from '@chakra-ui/react'

function App() {


  return (
    <div>
  
     
    <ChakraProvider>
      <Switch>
       <Route exact path= "/" component={home}/>
       <Route exact path= "/aboutUs" component={AboutUs}/>
      </Switch>
    </ChakraProvider>
   
    </div>
  )
}

export default App

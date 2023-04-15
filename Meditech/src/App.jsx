import { Route, Switch } from 'react-router-dom'
import home from './Views/Home/home'
import services from './Views/Services/services'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './resources/theme'
import Layout from './Components/layout/layout'
function App() {


  return (
    <div>
  
     
    <ChakraProvider theme={theme}>
      <Layout>
      <Switch>
       <Route exact path= "/" component={home}/>
       <Route exact path= "/services" component={services}/>
      </Switch>
      </Layout>
    </ChakraProvider>
   
    </div>
  )
}

export default App

import { Route, Switch } from 'react-router-dom'
import home from './Views/Home/home'

function App() {
  

  return (
    <div>
      
     <Switch>
      <Route exact path= "/" component={home}/>
     </Switch>

    </div>
  )
}

export default App

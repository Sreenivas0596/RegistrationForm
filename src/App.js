import {Switch, Route} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import ProtectedRoute from './components/ProtectedRoute'
import RegistrationHome from './components/RegistrationHome'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/registration" component={RegistrationHome} />
  </Switch>
)

export default App

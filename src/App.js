import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from './pages/Layout/Layout'
import Login from './pages/Login/Login'
import NotFound from './pages/NotFound/NotFound'

function App () {
  return (
    <Router>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/home' component={Layout}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App

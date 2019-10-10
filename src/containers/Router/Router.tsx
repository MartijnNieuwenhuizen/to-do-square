import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import Home from '../../pages/Home'
import GetAccessToken from '../../pages/GetAccessToken'

const routes = {
  root: '/',
  getAccessToken: '/get-access-token',
}

export default () => (
  <Router>
    <Switch>
      <Route exact path={routes.root} component={Home} />
      <Route exact path={routes.getAccessToken} component={GetAccessToken} />

      <Redirect to={routes.root} />
    </Switch>
  </Router>
)

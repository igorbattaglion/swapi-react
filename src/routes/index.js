import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Signin from '../pages/signin'
import Search from '../pages/search'
import Signup from '../pages/signup'
import page404 from '../pages/404'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Signin}  />
    <Route exact path='/signup' component={Signup} />
    <Route exact path='/search' component={Search}  />
    <Route component={page404} />
  </Switch>
)


export default Routes

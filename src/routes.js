import React from 'react'
import { Switch, Route, Redirect } from 'react-router';

import FormIndex from './Pages/FormIndex'
import Prova from './Pages/Prova'


export default props => (
  <Switch>
    <Route exact path='/' component={FormIndex}/>
    <Route exact path='/prova/:id' component={Prova}/>
    <Redirect from='*' to='/' />
  </Switch>
)
import React from 'react'
import { Switch, Route, Redirect } from 'react-router';

import FormIndex from './Pages/FormIndex'
import Prova from './Pages/Prova'


export default props => (
  <Switch>
    <Route exact path='/' component={FormIndex} />
    <Route exact path='/prova/:questoes/:nome' component={Prova} />
    <Route exact path='/provas' component={Provas} />
    <Redirect from='*' to='/' />
  </Switch>
)
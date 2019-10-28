import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';

import Main from './Pages/Main'
import FormIndex from './Pages/FormIndex'
import Prova from './Pages/Prova'
import Provas from './Pages/Provas'


export default props => (
  <Switch>
    <Route exact path='/' component={Main} />
    <Route exact path='/prova/:id' component={Prova} />
    <Route exact path='/provas' component={Provas} />
    <Route exact path='/cadastro' component={FormIndex} />
    <Redirect from='*' to='/' />
  </Switch>
)
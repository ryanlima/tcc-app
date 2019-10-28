import React from 'react';
import './App.css';

import { HashRouter } from 'react-router-dom'

import Routes from './routes'

export default props => (
  <HashRouter>
    <Routes />
  </HashRouter>
)
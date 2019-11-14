import React, { Component } from 'react'

import KeyboardEventHandler from 'react-keyboard-event-handler';

import { Link, withRouter } from "react-router-dom";
import './style.css'

class Main extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="card-container">
            <Link className="btn btn-primary btn-lg btn-block btn-main" to={'/cadastro'} >
              Cadastrar Provas 
            </Link>
            <Link className="btn btn-info btn-lg btn-block btn-main" to={'/provas'} >
              Provas Cadastradas (SPACE)
            </Link>
          <KeyboardEventHandler
            handleKeys={['space']}
            onKeyEvent={() => this.props.history.push('/provas')} />
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Main)
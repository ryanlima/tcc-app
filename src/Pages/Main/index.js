import React, { Component } from 'react'

import { Link } from "react-router-dom";
import './style.css'

class Main extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="card-container">
            <Link className="btn btn-primary btn-lg btn-block" to={'/cadastro'} >
              Cadastrar Provas
            </Link>
            <Link className="btn btn-info btn-lg btn-block" to={'/provas'} >
              Provas Cadastradas
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Main
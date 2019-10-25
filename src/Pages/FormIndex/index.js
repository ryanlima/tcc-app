import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, Link } from "react-router-dom";
import './style.css'

class FormIndex extends Component {
  constructor() {
    super()
    this.state = { nome: 0, questoes: 0 }

  }

  changeForm = (event) => {
    this.setState({ [event.target.name]: event.target.value })
    console.log(`${event.target.name} - ${event.target.value}`)
  }

  submitForm = (event) => {
    event.preventDefault()
    const { nome, questoes } = this.state


    console.log('event submit', this.state.numero)
    this.props.history.push(`/prova/${questoes}/${nome}`)
  }

  render() {
    return (
      <div className="form-container">
        <div className="form-content">
          <div className="card">
            <div className="card-body">
              <form onSubmit={this.submitForm}>
                <h3 className="card-title">Digite o seu nome:</h3>
                <div className="form-group">
                  <input
                    className="form-control form-control-lg"
                    name="nome"
                    onChange={this.changeForm}
                    type="text" />
                </div>
                <h3 className="card-title">Digite a quantidade questões desejada:</h3>
                <div className="form-group">
                  <input
                    className="form-control form-control-lg"
                    placeholder="Nº de Questões"
                    name="questoes"
                    onChange={this.changeForm}
                    type="text" />
                </div>
                <div className="form-group">
                  <Link to={`/prova/${this.state.questoes}/${this.state.nome}`} >
                    Teste
                  </Link>
                  {/* <button className="btn btn-primary btn-lg btn-block" type="submit">Iniciar Prova</button> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FormIndex
// export default withRouter(FormIndex)
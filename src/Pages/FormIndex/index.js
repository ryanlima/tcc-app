import React, { Component } from 'react'
import './style.css'

import Menu from '../menu'
import FirebaseService from '../../services/FirebaseService'
import { withRouter } from 'react-router-dom';

class FormIndex extends Component {
  // changeForm = (event) => {
  //   this.setState({ [event.target.name]: event.target.value })
  //   // console.log(`${event.target.name} - ${event.target.value}`)
  // }

  submitForm = (event) => {
    event.preventDefault()

    const { nome } = this
    const { nomeProva } = this
    const { numero_questoes } = this

    let questoes = []
    for (let i = 1; i <= numero_questoes; i++) {
      let questao = {
        label: '',
        alternativa: ''
      }
      questao.label = i
      questao.alternativa = ''
      questoes.push(questao)
    }


    FirebaseService.pushData('provas', {
      nome,
      nomeProva,
      questoes
    })

    this.props.history.push(`/provas`)
  }

  render() {
    return (
      <>
        <Menu cad />
        <div className="form-container">
          <div className="form-content">
            <h3>Cadastro</h3>
            <form onSubmit={this.submitForm}>
              <h3 className="card-title">Digite o seu nome:</h3>
              <div className="form-group">
                <input
                  className="form-control form-control-lg"
                  name="nome"
                  onChange={e => this.nome = e.target.value}
                  type="text" />
              </div>
              <h3 className="card-title">Digite o nome da Prova:</h3>
              <div className="form-group">
                <input
                  className="form-control form-control-lg"
                  name="nomeProva"
                  onChange={e => this.nomeProva = e.target.value}
                  type="text" />
              </div>
              <h3 className="card-title">Digite a quantidade questões desejada:</h3>
              <div className="form-group">
                <input
                  className="form-control form-control-lg"
                  placeholder="Nº de Questões"
                  name="questoes"
                  onChange={e => this.numero_questoes = e.target.value}
                  type="text" />
              </div>
              <div className="form-group">
                <button className="btn btn-primary btn-lg btn-block" type="submit">Cadastrar Prova</button>
              </div>
            </form>
          </div>
        </div>
      </>

    )
  }
}

export default withRouter(FormIndex)
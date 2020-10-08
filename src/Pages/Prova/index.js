import React, { Component } from 'react'
import FirebaseService from '../../services/FirebaseService'

import './style.css'

import SlideQuestoes from '../SlideQuestoes'
class Prova extends Component {
  constructor(props) {
    super(props)
    this.state = { nome: '', nomeProva: '', questoes: [], questaoAtual: 1 }

    this.handleClick = this.handleClick.bind(this)
    this.handleQuestion = this.handleQuestion.bind(this)
  }

  componentDidMount() {
    const { id } = this.props.match.params
    FirebaseService.getUniqueDataBy('provas', id,
      (data) => this.setState({ ...data }, () => console.log(this.state)))
  }

  handleClick(alternativa, questao){
    let questoes = this.state.questoes
    questoes[questao - 1].alternativa = alternativa
    this.setState({ questoes })
  }
  handleQuestion(questaoAtual){ 
    this.setState({ questaoAtual })
  }

  render() {
    const { nome, nomeProva, questoes } = this.state
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card text-center  shadow-sm">
              <h1>Aluno: {nome} </h1>
              <h1>Nome da Prova: {nomeProva} </h1>
              <div className="d-flex justify-content-center">
              {
                questoes.map((item) => 
                  <div key={item.label} className="gabarito" >
                    <h3>{item.label}</h3>
                    <h3>{item.alternativa}</h3>
                  </div>
                )
              }
              </div>
              <hr/>
              <div className="teclado">
                <SlideQuestoes 
                  questoes={questoes} 
                  handleClick={this.handleClick} 
                  handleQuestion={this.handleQuestion} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Prova
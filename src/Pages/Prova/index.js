import React, { Component } from 'react'
import FirebaseService from '../../services/FirebaseService'

import './style.css'

class Prova extends Component {
  state = { nome: '', nomeProva: '', questoes: [] }

  componentDidMount() {
    const { id } = this.props.match.params
    FirebaseService.getUniqueDataBy('provas', id,
      (data) => this.setState({ ...data }, () => console.log(this.state)))
  }
  render() {
    const { nome, nomeProva, questoes } = this.state
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 ">
            <div className="card">
              <h1>{nome} </h1>
              <h1>{nomeProva} </h1>
              {questoes.map((item, index) =>
                <div key={index}>
                  <h4>{item.label}</h4>
                  <h4>{item.alternativa}</h4>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Prova
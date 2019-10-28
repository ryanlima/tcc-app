import React, { Component } from 'react'
import './style.css'
import FirebaseService from '../../services/FirebaseService'
import Menu from '../menu'
import { Link } from "react-router-dom";

class Provas extends Component {
  _isMounted = false
  state = {
    data: []
  }

  remove = (id) => {
    FirebaseService.remove(id, 'provas')
  }

  componentDidMount() {
    this._isMounted = true
    if (this._isMounted) {
      FirebaseService.getDataList('provas',
        (dataReceived) =>
          this.setState({ data: dataReceived }))
    }
  }
  componentWillUnmount() {
    this._isMounted = false
  }
  render() {
    const { data } = this.state
    console.log(data)
    return (
      <>
        <Menu prova />
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-12">
              <h1>Provas</h1>
              <div className="row">
                {
                  data.map((item) =>
                    <div className="col-md-6" key={item.key}>
                      <div className="card card-prova">
                        <div className="card-body">
                          <h3>{item.nomeProva}<small> - {item.nome}</small></h3>
                          <p>{item.numero_questoes} Questões</p>
                        </div>
                        <div className="card-footer">
                          <div className="row">
                            <div className="col-4 col-md-6 mr-auto">
                              <button
                                className="btn btn-danger ml-auto"
                                onClick={() => this.remove(item.key)}
                              >Excluir Prova</button>
                            </div>
                            <div className="col-4 col-md-6">
                              <Link className="btn btn-success" to={`/prova/${item.key}`} >
                                Iniciar Prova
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Provas
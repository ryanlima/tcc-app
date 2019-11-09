import React , { Component } from 'react'
import KeyboardEventHandler from 'react-keyboard-event-handler';

import './style.css'

class SlideQuestoes extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentIndex: 0,
      translateValue: 0,
      questao: 0,
      questaoAtual: 1,
      alternativa: ""
    }
  }

  goToPrevSlide = () => {
    if(this.state.currentIndex === 0)
      return

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      questaoAtual: prevState.questaoAtual - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }))
  }
  goToNextSlide = () => {
    if(this.state.currentIndex === this.props.questoes.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0,
        questaoAtual: 1,
      })
    }
    
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      questaoAtual: prevState.questaoAtual + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  slideWidth = () => {
    return document.querySelector('.slide').clientWidth
  }

  render() {
    const { questaoAtual } = this.state
    return (
      <div className="slider">
        <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
            {
              this.props.questoes.map((questao) => (
                  <Slide
                    key={questao.label} 
                    questao={questao.label} 
                    handleClick={this.props.handleClick}
                    questaoAtual={questaoAtual}
                  />
              ))
            }
        </div>
        <LeftArrow
          goToPrevSlide={this.goToPrevSlide}
        />
        <RightArrow
          goToNextSlide={this.goToNextSlide}
        />
        
        <KeyboardEventHandler
          handleKeys={['left']}
          onKeyEvent={this.goToPrevSlide } />
        <KeyboardEventHandler
          handleKeys={['right']}
          onKeyEvent={this.goToNextSlide } />
        <KeyboardEventHandler
          handleKeys={['q','a','s','w','e','d']}
          onKeyEvent={() => this.props.handleClick("A", questaoAtual)} />
        <KeyboardEventHandler
          handleKeys={['t','g','y','h','u','j']}
          onKeyEvent={() => this.props.handleClick("B", questaoAtual)} />
        
      </div>
    )
  }
}

const Slide = ({ questao, questaoAtual , handleClick, ...props }) => {
  return(
    <div className={`slide slide-${questao}`}> 
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center">Questão: {questao} - Questão Atual: {questaoAtual}</h2>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="alternativa">
            <button 
              className="btn btn-alternativa vermelho"
                onClick={() => handleClick("A", questao)}
                onKeyUp={() => handleClick("A", questao)}
                > A</button>
          </div>
          <div className="alternativa">
            <button 
              className="btn btn-alternativa azul" 
              onClick={() => handleClick("B", questao)}>B</button>
          </div>
          <div className="alternativa">
            <button 
              className="btn btn-alternativa verde"
              onClick={() => handleClick("C", questao)}>C</button>
          </div>
          <div className="alternativa">
            <button 
              className="btn btn-alternativa amarelo"
              onClick={() => handleClick("D", questao)}>D</button>
          </div>
          <div className="alternativa">
            <button 
              className="btn btn-alternativa marrom"
              onClick={() => handleClick("E", questao)}>E</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const LeftArrow = (props) => {
  return (
    <div className="backArrow arrow" onClick={props.goToPrevSlide}>
      <i className="fas fa-arrow-left fa-2x" aria-hidden="true"></i>
    </div>
  )
}

const RightArrow = (props) => {
  return (
    <div className="nextArrow arrow" onClick={props.goToNextSlide}>
      <i className="fas fa-arrow-right fa-2x" aria-hidden="true"></i>
    </div>
  )
}

export default SlideQuestoes

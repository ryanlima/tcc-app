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

  confirmaQuestao = (questao) => {
    console.log(questao)
    let q = this.props.questoes.filter((busca) => {
      return busca.label === questao
    })
    if(q[0].alternativa === ''){
      console.log('vazio')
    }else{
      this.goToNextSlide()
    }
  }

  handleKey = (e) => {
    // use which ou charCode ou e.keyCode, dependendo do navegador
      let key = e.which || e.charCode || e.keyCode;
      // 9 é o caracter Unicode da tecla TAB
      if (key === 9) {
          if (e.preventDefault) {
              e.preventDefault();
          }
          return false;
      }
      if (key === 193 || key === 222 || key === 187) {
        this.props.handleClick("E", this.state.questaoAtual)
      }
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
        <ButtonConfirm
          goToNextSlide={() => this.confirmaQuestao(questaoAtual) }
        />
        <RightArrow
          goToNextSlide={this.goToNextSlide}
        />
        <KeyboardEventHandler
          handleKeys={['ctrl', 'z', 'shift']}
          onKeyEvent={this.goToPrevSlide } />
        <KeyboardEventHandler
          handleKeys={['up','right', 'down', 'left']}
          onKeyEvent={this.goToNextSlide } />
        <KeyboardEventHandler
          handleKeys={['tab','q','w','1','2','3']}
          onKeyEvent={() => this.props.handleClick("A", questaoAtual)} />
        <KeyboardEventHandler
          handleKeys={['e','r','t','4','5','6']}
          onKeyEvent={() => this.props.handleClick("B", questaoAtual)} />
        <KeyboardEventHandler
          handleKeys={['y','u','i','7','8','9']}
          onKeyEvent={() => this.props.handleClick("C", questaoAtual)} />
        <KeyboardEventHandler
          handleKeys={['o','p','backspace',';',]}
          onKeyEvent={() => this.props.handleClick("D", questaoAtual)} />
        <KeyboardEventHandler
          handleKeys={['ins','del','7']}
          onKeyEvent={() => this.props.handleClick("E", questaoAtual)} />
        <KeyboardEventHandler
          handleKeys={['x', 'c', 'v', 'b', 'n', 'm', 'space']}
          onKeyEvent={() => this.confirmaQuestao(questaoAtual) } />
        <KeyboardEventHandler
          handleKeys={['all']}
          onKeyEvent={(key, e) => this.handleKey(e)} />
        <KeyboardEventHandler
          handleKeys={['all']}
          onKeyEvent={(key, e) => console.log(key, e.keyCode)} />
        
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
            <h1 className="text-center text-white">Questão Atual: {questaoAtual}</h1>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="alternativa">
            <div 
              className="btn btn-alternativa vermelho"
                onClick={() => handleClick("A", questao)}
                onKeyUp={() => handleClick("A", questao)}
                > A</div>
          </div>
          <div className="alternativa">
            <div 
              className="btn btn-alternativa azul" 
              onClick={() => handleClick("B", questao)}>B</div>
          </div>
          <div className="alternativa">
            <div 
              className="btn btn-alternativa verde"
              onClick={() => handleClick("C", questao)}>C</div>
          </div>
          <div className="alternativa">
            <div 
              className="btn btn-alternativa amarelo"
              onClick={() => handleClick("D", questao)}>D</div>
          </div>
          <div className="alternativa">
            <div 
              className="btn btn-alternativa marrom"
              onClick={() => handleClick("E", questao)}>E</div>
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
const ButtonConfirm = (props) => {
  return (
    <div 
      className="btn buttonConfirmContent" 
      onClick={props.goToNextSlide}>Confirmar</div>
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

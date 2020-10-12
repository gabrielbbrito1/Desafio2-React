import React from 'react';
import Contador from './Contador'
import Botao from './Botao'
import LabelRelogio from './LabelRelogio'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      segundos: 0,
      minutos: 0,
      horas: 0,
      stop: false,
      nameStop: "Stop",
      name: "Relógio", 
      parcial: ""
    };
  }
   zerarCronometro() {
      this.state.horas = 0
      this.state.segundos = -1
      this.state.minutos = 0
      this.state.parcial = ""
   }
   
  /* relogio(){
    //yarn add moment-timezone
            var moment = require('moment-timezone')
            let localTime = moment( ).tz("Brazil/Brasilia").format('HH:mm:ss').toString()
            this.setState({relogio: localTime}) 
    }
    */
   
  parcial(){
    let p = this.state.horas+ ":"+ this.state.minutos+ ":"+ this.state.segundos + "\n\n"
    this.state.parcial = this.state.parcial + p
  }
  
  pararTempo(){
    this.setState({ 
        stop: !this.state.stop 
      })
    if (this.state.stop)
      this.state.nameStop = "Stop"
    else
      this.state.nameStop = "Start"
  }

  incrementar () {
    if (this.state.stop === false){
      this.setState(
         function (state, props) {
          if (state.segundos >= 59){
            this.zerar();
            this.incrementarMinuto(state);
          }  
          return({ segundos: state.segundos +1})
         })
    }
  }
  
  incrementarMinuto (state) {
    this.setState(function (state, props) {
      if (state.minutos > 59){
        this.zerarMinuto();
        this.incrementarHoras(state);
      }  
      return {minutos: state.minutos +1}
    })
  };
  
  incrementarHoras (state) {
    this.setState(() => { 
      return {horas: state.horas +1}
    })
  };
  zerar () {
    this.setState({ 
      segundos: 0 ,
    })
  }

  zerarMinuto() {
  this.setState({
    minutos: 0,
  })
  }

  componentDidMount(){
    this.timer = setInterval(
      () => this.incrementar(), 1000)
  }
  

  render(){

    return (
      <div>
        
        <Contador horas={this.state.horas} minutos={this.state.minutos} segundos={this.state.segundos} />
        <LabelRelogio name={this.state.name} />
        <Botao onClick={() => this.zerarCronometro()} label={"Zerar"} />
        <Botao onClick={() => this.pararTempo()} label={this.state.nameStop} />
        <Botao onClick={() => this.parcial()} label={"Parcial"} />
        <LabelRelogio name={this.state.parcial} />
      </div>
    );
  }
}

export default App;
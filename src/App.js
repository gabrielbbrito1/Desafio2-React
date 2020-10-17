import React from 'react';
import Contador from './Contador'
import Botao from './Botao'
import LabelRelogio from './LabelRelogio'
import './App.css';
import Temporizador from './Temporizador'
import Relogio from './Relogio';
import LabelLocal from './LabelLocal'

let loop = 0;
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      centesimos: 0,
      segundos: 0,
      minutos: 0,
      horas: 0,
      stop: false,
      nameStop: "Stop",
      name: "Cronômetro", 
      parcial: ""
    };
  }
   zerarCronometro() {
     this.state.centesimos = -1
      this.state.horas = 0
      this.state.segundos = 0
      this.state.minutos = 0
      this.state.parcial = ""
      loop = 0
   }
   
  parcial(){
    loop = loop + 1
    let p = loop + "ª parcial: " + this.state.horas+ ":"+ this.state.minutos+ ":"+ this.state.segundos + "." + this.state.centesimos + "\n\n"
    this.state.parcial = this.state.parcial + p;
    alert(this.state.parcial)
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

  incrementarCentesimo(){
    if (this.state.stop === false){
      this.setState(
        function (state,props) {
          if (state.centesimos > 99){
            this.zerarCentesimo();
            this.incrementarSegundo(state);
          }
        return{ centesimos: state.centesimos + 1}
        })
    }
  }
  
  incrementarSegundo () {
    
      this.setState(
         function (state, props) {
          if (state.segundos > 59){
            this.zerarSegundo();
            this.incrementarMinuto(state);
          }  
          return{ segundos: state.segundos + 0.5} // Segundo sendo chamado 2 vezes //
         })
    }
  
  incrementarMinuto (state) {
    this.setState(function (state, props) {
      if (state.minutos > 59){
        this.zerarMinuto();
        this.incrementarHoras(state);
      }  
      return {minutos: state.minutos + 0.5}
    })
  };
  
  incrementarHoras (state) {
    this.setState(() => { 
      return {horas: state.horas +1}
    })
  };
  zerarCentesimo () {
    this.setState({ 
      centesimos: 0 ,
    })
  }
  
  zerarSegundo(){
    this.setState({
      segundos: 0
    })
  }
  
  zerarMinuto() {
  this.setState({
    minutos: 0,
  })
  }

  componentDidMount(){
    this.timer = setInterval(
      () => this.incrementarCentesimo(), 10)
  }
  
  render(){

    return (
      <div className= "main">
        <div className = "cronometro">
          <div className = "nomeRelogio">
            <LabelRelogio name={this.state.name} />
          </div>

          <div className = "counterBody">
            <Contador horas={this.state.horas} minutos={this.state.minutos} segundos={this.state.segundos} centesimos={this.state.centesimos} />
          </div>

          <div className = "buttonTag">
            <Botao onClick={() => this.zerarCronometro()} label={"Zerar"} />
            <Botao onClick={() => this.pararTempo()} label={this.state.nameStop} />
            <Botao onClick={() => this.parcial()} label={"Parcial"} />
          </div>

          <div>
          </div>
        </div>
          <div className = "relogio">
          <Relogio/>
          </div>

          <div className = "temporizador">
            <Temporizador/>
          </div>

      </div>
    );
  }
}

export default App;
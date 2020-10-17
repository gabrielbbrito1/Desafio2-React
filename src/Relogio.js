import ReactDOM from 'react';
import React, { Component }  from 'react';
import Contador from './Contador'
import Botao from './Botao'
import LabelRelogio from './LabelRelogio'
import moment from 'moment-timezone';
import LabelLocal from './LabelLocal'

import './App.css';

var e = 'Brazil/Salvador'
class Relogio extends React.Component {
  constructor(props) {
    super(props);
    var moment = require('moment-timezone');
    let localTime = moment( ).tz(e).format('HH:mm:ss').toString();
    this.state = {date: new Date(), hora : localTime.toString()};
    
  }

   chamafuso(){
        e = prompt("Adicione o fuso (Brazil/Brasilia):")
        if(e === null || e == ''){
          e = 'Brazil/Salvador'
        }
        var moment = require('moment-timezone')
        let localTime = moment( ).tz(e).format('HH:mm:ss').toString()
        console.log(e)
        console.log(localTime)
        this.setState ({hora: localTime.toString()})
  }
  atualizaHora(){
    let localTime = moment( ).tz(e).format('HH:mm:ss').toString()
    this.setState ({hora: localTime.toString()})
  }
  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    this.timerID = setInterval(
      () => this.atualizaHora(), 1000 
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

    render() {
    return (
      <div className= "mainRelogio" >
        <div className = "relogio">
          <div className = "nomeRelogio">  
             <LabelRelogio name="Relógio" />
          </div>
          </div>
          <div>
          <LabelLocal name ={e} />
          </div>
        
        <div className = "counterBody">
            <div className = "contadorFlex">
        <LabelRelogio name={this.state.hora} />
       
        </div>
        </div>

        <div className = "buttonTag">
         <Botao onClick={() => this.chamafuso()} label={"Add"} />
        </div>

        <div>
         
        </div>


      </div>
    );

    ReactDOM.render(
      <Relogio />,
      document.getElementById('root')
    );
  }
}

export default Relogio;
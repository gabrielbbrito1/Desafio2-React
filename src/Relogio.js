import ReactDOM from 'react';
import React, { Component }  from 'react';
import Contador from './Contador'
import Botao from './Botao'
import LabelRelogio from './LabelRelogio'
import moment from 'moment-timezone';

import './App.css';


class Relogio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  chamafuso(){
        let e = prompt("Adicione o fuso (Brazil/Brasilia):")
        var moment = require('moment-timezone')
       // let localTime = moment( ).tz(e).format('HH🇲🇲ss').toString()
       // this.setState({relogio: localTime})
  }

  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
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
        
        <div className = "counterBody">
            <div className = "contadorFlex">
        <LabelRelogio name={this.state.date.toLocaleTimeString()} />
       
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
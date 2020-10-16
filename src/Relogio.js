import ReactDOM from 'react';
import React, { Component }  from 'react';
import Contador from './Contador'
import Botao from './Botao'
import LabelRelogio from './LabelRelogio'
import Moment from 'moment-timezone';
import './App.css';


class Relogio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
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
        <select name={moment.tz.zonesForCountry()} />
        </div>
        </div>

        <div className = "buttonTag">
           <Botao />

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
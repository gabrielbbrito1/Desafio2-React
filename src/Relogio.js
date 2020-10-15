import ReactDOM from 'react';
import React from 'react';
import Contador from './Contador'
import Botao from './Botao'
import LabelRelogio from './LabelRelogio'
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
        </div>
        </div>

        <div className = "buttonTag">
            <Botao onClick={() => this.zerarCronometro()} label={"Zerar"} />  
            <Botao onClick={() => this.parcial()} label={"Parcial"} />
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
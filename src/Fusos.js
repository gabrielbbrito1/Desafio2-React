import React, { Component } from 'react';
import Relogio from './Relogio';

const Relogio = [];
const num = 1;
for(let i = 0; i < num; i++) {
    Relogio.push({
        timezone: "America/Bahia",
        name: "Salvador",
        id: i,
        done: false
    })
}

class Fusos extends Component {
    constructor() {
        super();
        this.apagaFuso = this.apagaFuso.bind(this);
        this.adicionaFuso = this.adicionaFuso.bind(this);
    }

    state = {
        Relogio: Relogio,
        next_id: num + 1,
    }

    apagaFuso(id) {
        const index = this.state.Relogio.findIndex(Relogio => Relogio.id === id);
        this.setState({
            RelogioRelogio: this.state.Relogio.slice(0, index).concat(this.state.clocks.slice(index + 1))
        });
    }

    adicionaFuso() {
        const timezone = prompt('Fuso horário? https://momentjs.com/timezone/');
        const name = prompt('Nome do relógio?');
        const clock = {
            name: name,
            timezone: timezone,
            id: this.state.next_id
        };
        const nextClocks = [...this.state.clocks, clock];
        this.setState({
            next_id: this.state.next_id + 1,
            clocks: nextClocks
        });
    }
    
    render() {
        return (
            <div className="App">
                <h1>Relógio Mundial</h1>
                {this.state.clocks.map(clock => {
                    console.log(clock);
                    return <Clock
                        key={clock.id}
                        {...clock}
                        onDelete={this.deleteClock}
                    />    
                })}
                <button className="Adicionar" onClick={(e) => this.addClock()}>Adicionar relógio</button>
            </div>
        );
    }
}

export default WorldClock;
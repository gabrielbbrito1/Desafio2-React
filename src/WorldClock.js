import React, { Component } from 'react';
import Clock from './Clock';

const clocks = [];
const num = 1;
for(let i = 0; i < num; i++) {
    clocks.push({
        timezone: "America/Bahia",
        name: "Salvador",
        id: i,
        done: false
    })
}

class WorldClock extends Component {
    constructor() {
        super();
        this.deleteClock = this.deleteClock.bind(this);
        this.addClock = this.addClock.bind(this);
    }

    state = {
        clocks: clocks,
        next_id: num + 1,
    }

    deleteClock(id) {
        const index = this.state.clocks.findIndex(clock => clock.id === id);
        this.setState({
            clocks: this.state.clocks.slice(0, index).concat(this.state.clocks.slice(index + 1))
        });
    }

    addClock() {
        const name = prompt('Nome do relógio?');
        const timezone = prompt('Fuso horário? https://momentjs.com/timezone/');
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
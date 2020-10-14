import React from 'react';
import './App.css';


const Contador = (props) => ( 
    <div className = "contadorFlex">
        <h1 className = "contador"> {props.horas}: { props.minutos }: { props.segundos } </h1>
        <h1 className = "contadorCent"> {props.centesimos} </h1>
    </div>
)

export default Contador
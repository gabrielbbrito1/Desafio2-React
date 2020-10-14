import React from 'react';
import './App.css';

const Botao = (props) => ( 
    <button className = "roundButton" onClick = { props.onClick } > { props.label } </button>
)

export default Botao
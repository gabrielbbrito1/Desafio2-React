import React from 'react';
import Contador from './Contador'
import Botao from './Botao'
import LabelRelogio from './LabelRelogio'
import './App.css';

const Temporizador = () => {
  const [centesimos, setCentesimos] = React.useState(0);
  const [temporizador, setTemporizador] = React.useState("");
  const [horas, setHoras] = React.useState(0);
  const [segundos, setSegundos] = React.useState(0);
  const [minutos, setMinutos] = React.useState(0);
  const [parcial, setParcial] = React.useState("");
  const [list, setList] = React.useState(["0","0","0","0"]);
  const [stop, setStop] = React.useState(false);
  const [nameStop, setNameStop]= React.useState("Stop");
  const [name, setName]= React.useState( "Cronômetro"); 

   const zerarCronometro= () =>{
     setCentesimos(-1);
      setHoras(0);
      setSegundos(0);
      setMinutos(0);
      setParcial("");
   }
   
  /* relogio(){
    //yarn add moment-timezone
            var moment = require('moment-timezone')
            let localTime = moment( ).tz("Brazil/Brasilia").format('HH:mm:ss').toString()
            setState({relogio: localTime}) 
    }
    */
   
  const gerarParcial = ()=>{
    let p = horas+ ":"+ minutos+ ":"+ segundos + "." + centesimos + "\n\n"
    setParcial (parcial + p)
  }
  
  const pararTempo = ()=>{
    setStop(!stop);
    if (stop)
      setNameStop("Stop")
    else
      setNameStop("Start")    
  }
  
  const incrementarCentesimo = ()=>{
    if (stop === false){
        if (centesimos > 99){
            setCentesimos(0);
            incrementarSegundo();
          }else
          setCentesimos(centesimos +1)
     }  
  }

  const incrementarSegundo = ()=>{
    if (segundos > 59){
            setSegundos(0);
            incrementarMinuto();
          }else
          setSegundos(segundos +1);  
    }
  
  const incrementarMinuto = ()=>{
      if (minutos > 59){
        setMinutos(0);
        incrementarHoras();
      } else
      setMinutos(minutos +1);
    
  };
  
  const incrementarHoras = ()=> {
    setHoras(horas +1);
  };

  

React.useEffect(() => {
    const timer = setTimeout(() => {
        incrementarCentesimo();
      }, 10);
      return () => {
        clearTimeout(timer);
      };
    }, [centesimos, stop]);

    
  
  
  
 /* adicionaZero () {
    for(){
    if(segundos < 10) {
      for(){

      }
        
    } else {
        
    }
}
}
*/
  

    return (
      <div className= "main">
          <input value={temporizador} onChange={(event)=> setTemporizador(event.target.value)}/> 

        <div className = "counterBody">
          <Contador horas={horas} minutos={minutos} segundos={segundos} centesimos={centesimos} />
        </div>

        <div>
          <LabelRelogio name={name} />
        </div>

        <div className = "button">
          <Botao onClick={() => zerarCronometro()} label={"Zerar"} />
          <Botao onClick={() => pararTempo()} label={nameStop} />
          <Botao onClick={() => gerarParcial()} label={"Parcial"} />
        </div>

        <div>
          <LabelRelogio name={parcial} />
        </div>

      </div>
    );
  
}

export default Temporizador;
import React from 'react';
import Contador from './Contador'
import Botao from './Botao'
import LabelRelogio from './LabelRelogio'
import './App.css';

const Temporizador = () => {
  const [centesimos, setCentesimos] = React.useState(0);
  const [horas, setHoras] = React.useState(0);
  const [segundos, setSegundos] = React.useState(0);
  const [minutos, setMinutos] = React.useState(0);
  const [parcial, setParcial] = React.useState([""]);
  const [stop, setStop] = React.useState(true);
  const [nameStop, setNameStop]= React.useState("Start");
  const name= "Temporizador"; 

   const zerarCronometro= () =>{
     setCentesimos(0);
      setHoras(0);
      setSegundos(0);
      setMinutos(0);
      setParcial([""]);
   }
   
   
  const gerarParcial = ()=>{
    let p = horas+ ":"+ minutos+ ":"+ segundos + "." + centesimos + "\n\n"
    const parser = parcial;
    parser.push(p)
    setParcial (parser)
  }
  
  const pararTempo = ()=>{
    setStop(!stop);
    if (stop)
      setNameStop("Stop")
    else
      setNameStop("Start")    
  }
  
  const decrementarCentesimo = ()=>{
    if (stop === false){
        if (centesimos <= 0 && (segundos > 0 || minutos > 0 || horas > 0) ){
            setCentesimos(99);
            decrementarSegundo();
          }else if(centesimos > 0)
          setCentesimos(centesimos -1)
     }  
  }

  const decrementarSegundo = ()=>{
    if (segundos <= 0 && (minutos > 0 || horas > 0)){
            setSegundos(59);
            decrementarMinuto();
          }else
          setSegundos(segundos -1);  
    }
  
  const decrementarMinuto = ()=>{
      if (minutos <= 0 && horas > 0){
        setMinutos(59);
        decrementarHoras();
      } else
      setMinutos(minutos -1);
    
  };
  
  const decrementarHoras = ()=> {
    if (horas > 0)
      setHoras(horas -1)
    };

  

React.useEffect(() => {
    const timer = setTimeout(() => {
        decrementarCentesimo();
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
      <div className= "mainTemporizador">
        <div>
          <LabelRelogio name={name} />
        </div>

        <div className="optionsWrapper">
        <button onClick={()=>{
          if(horas<23)
          setHoras(horas +1)
          else 
          setHoras(0)
        }
      }>+</button>
        <button onClick={()=> {
          if(minutos<59)
          setMinutos(minutos +1)
          else 
          setMinutos(0)
        }
      }>+</button>
        <button onClick={()=> {
          if(segundos<59)
          setSegundos(segundos +1)
          else 
          setSegundos(0)
        }
      }>+</button>
        <button onClick={()=> {
          if(centesimos<99)
          setCentesimos(centesimos +1)
          else 
          setCentesimos(0)
        }
      }>+</button>
      </div>

        <div className = "timerBody">
          <Contador horas={horas} minutos={minutos} segundos={segundos} centesimos={centesimos} />
        </div>
        <div className="optionsWrapper">
        <button onClick={()=> {
                if(horas>0 )
                setHoras(horas -1)
                else
                setHoras(23) 
              }
        }>-</button>
        <button onClick={()=> {
                if(minutos>0)
                setMinutos(minutos -1)
                else 
                setMinutos(59)
              }
        }>-</button>
        <button onClick={()=> {
                if(segundos>0)
                setSegundos(segundos -1)
                else 
                setSegundos(59)
              }
        }>-</button>
        <button onClick={()=> {
                if(centesimos>0)
                setCentesimos(centesimos -1)
                else 
                setCentesimos(99)
              }
        }>-</button>
        </div>

        
        <div className = "button">
          <Botao onClick={() => zerarCronometro()} label={"Zerar"} />
          <Botao onClick={() => pararTempo()} label={nameStop} />
          <Botao onClick={() => gerarParcial()} label={"Parcial"} />
        </div>

        <div className="parcialWrapper">
        {parcial.map((n, index) => <h1 className="parcial" key={index}> {n} </h1>)}
        </div>

      </div>
    );
  
}

export default Temporizador;
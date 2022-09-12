import React,{useState,useRef} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {esNombre} from "./validaciones"
import reportWebVitals from './reportWebVitals';

class Componente_ extends React.Component{

  constructor(props){
    super(props);
    this.nombre = React.createRef();
    this.apellido = React.createRef();
    this.sexo = React.createRef();
    this.dui = React.createRef();
    this.fecha = React.createRef();
    this.nacionalidad = React.createRef();
    this.direccion = React.createRef();
    this.municipio = React.createRef();
    this.departamento = React.createRef();
  }
  clicRefs(evento){
    evento.preventDefault();
    console.log(this.nombre.current.value);
    console.log(this.apellido.current.value);
    console.log(this.sexo.current.value);
    console.log(this.dui.current.value);   
    console.log(this.fecha.current.value);    
    console.log(this.nacionalidad.current.value);
    console.log(this.direccion.current.value);
    console.log(this.municipio.current.value);
    console.log(this.departamento.current.value);
  }
  clicEventos(evento){
    evento.preventDefault();
    console.log(evento.target[0].value);
    console.log(evento.target[1].value);
    console.log(evento.target[2].value);
    console.log(evento.target[3].value);
    console.log(evento.target[4].value);
    console.log(evento.target[5].value);
    console.log(evento.target[6].value);
    console.log(evento.target[7].value);
    console.log(evento.target[8].value);
  }

  render(){
    return(
      
      <form onSubmit={this.clicEventos}>
        <div className='titulo'>
        <h1>{"Clínica Dental"}</h1>
        <h3>Complete el siguiente formulario</h3>
        </div>
        <div className='container'>
        <div className='form'>
        <label className='dise'>Nombres</label>
        <input type="text" className='inp' placeholder="Escriba sus nombres por favor" />
        <label className='dise'>Apellidos</label>
        <input type="text" className='inp' placeholder="Escriba sus Apellidos por favor" />
        <label className='dise'>Sexo</label>
        <input type="text" className='inp' placeholder="Escriba su sexo por favor" />
        <label className='dise'>DUI</label>
        <input type="text" className='inp' placeholder="Escriba su DUI por favor" />       
        <label className='dise'>Fecha de nacimiento</label>
        <input type="date" className='inp' placeholder="Escriba su Fecha de Nacimiento por favor" />
        <label className='dise'>Nacionalidad</label>
        <input type="text" className='inp' placeholder="Escriba sus Nacionalidad por favor" />
        <label className='dise'>Dirección</label>
        <input type="text" className='inp' placeholder="Escriba su Dirección por favor" />
        <label className='dise'>Municipio</label>
        <input type="text" className='inp' placeholder="¿De que Municipio es?" />
        <label className='dise'>Departamento</label>
        <input type="text" className='inp' placeholder="¿De que Departamento es?" />
        <button className='boton'>
          Enviar
        </button>
        <button className='boton' type='reset'>
          Reset
        </button>
        </div>
        </div>
      </form>
      
    )
  }
}


ReactDOM.render(
  <Componente_/>,
  document.getElementById('root')
);
reportWebVitals();

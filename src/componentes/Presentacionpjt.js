import React from 'react';
import '../hojas-de-estilo/Presentacionpjt.css'


function Presentacionpjt (props){
  return (
    <div className='contenedor-presentacion'>
      <img 
      className='imagen-presentacion' 
      src={require(`../imagenes/${props.imagen}.jpg`)}
      alt='presentacion-raiferick '
      />

      <div className='contendor-texto-presentacion'>
        <p className='nombre-presentacion'>{props.nombre} de {props.origen},    </p>
        <p className='cargo-presentacion'>{props.cargo} </p>
        <p className='texto-presentacion'> {props.descripcion} </p>
      </div>


    </div>
  );
}

export default Presentacionpjt;

              
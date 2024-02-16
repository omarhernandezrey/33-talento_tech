import React from 'react';

function Perfil2(props) {
  return (
    <div className='contenedor-perfil'>
      <img
        className='imagen-perfil'
        src={props.imagenUrl}
        alt='Foto de desarrollador'
      />
      <div className='contenedor-texto-perfil'>
        <p className='nombre-perfil'>
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className='cargo-perfil'>
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className='texto-perfil'>"{props.perfil}"</p>
      </div>
    </div>
  );
}

export default Perfil2;
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
              {/* Agregar los botones para seguir a las cuentas de LinkedIn, YouTube y X (Twitter) */}
              <button onClick={() => window.open(props.linkedin, '_blank')}>
            Seguir en LinkedIn
        </button>

        <button onClick={() => window.open(props.youtube, '_blank')}>
            Seguir en YouTube
        </button>

        <button onClick={() => window.open(props.x, '_blank')}>
            Seguir en X (Twitter)
        </button>
    </div>
  );
}

export default Perfil2;
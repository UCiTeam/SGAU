import React, { Fragment } from 'react';

const PresentationContainer = ({uN}) => {
  return (
    <>
      <div id="presentation-container">
        <h1 id="uni"> Bienvenido, <br />{uN}<br/> al SGAU</h1>
        <h4 id="subt">"Explora el mundo universitario: <br /> actividades horarios, documentación y noticias relevantes en un solo clic."</h4>
        <button id="brm">
          <div className="b-inner-ext"></div>
          <p id="b-inner-text">↓LEER MÁS↓</p>
          <div className="b-inner-ext"></div>
        </button>
      </div>
    </>
  );
};

export default PresentationContainer;
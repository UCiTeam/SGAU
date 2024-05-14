import React from 'react'



const Header = ({aV,sAV,fV,sFV,sC}) => {

  const toggleAside = () => {
    sAV(!aV);
    sFV(false); // Cerrar el formulario si está abierto
  };

  const toggleForm = () => {
    sFV(!fV);
    sAV(false); // Cerrar el aside si está abierto
  };

  const returnIni=()=>{
    sC('Principal')
    if(aV)toggleAside();
  }



  return (
    <header>
      <button onClick={toggleAside} id="button-bar" className="b"></button>
      <h3 id="logo" className="b">UCI</h3>
      <button onClick={returnIni} id="inicio" className="b">Inicio</button>
      <button id="contact" className="b">Contactar</button>
      <button id="about" className="b">Acerca</button>
      <button onClick={toggleForm} id="account" className="b"></button>
    </header>
  )
}

export default Header
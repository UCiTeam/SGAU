import React from 'react'

const Turnos = () => {
    
    const divElements = Array.from({ length: 5}, (_, index) => (
        <div key={index} className="grid-element">
          
        </div>
      ));

  return (
    <>
        <h2 id='horario-sub'>Horario</h2>
        <div id='grid-container'>
            <div className="grid-element" id='null'></div>
            <div className="grid-element sp">LUNES</div>
            <div className="grid-element sp">MARTES</div>
            <div className="grid-element sp">MIERCOLES</div>
            <div className="grid-element sp">JUEVES</div>
            <div className="grid-element sp">VIERNES</div>
            <div className='grid-element sp'>08:00</div>
            {divElements}
            <div className='grid-element sp'>09:30</div>
            {divElements}
            <div className='grid-element sp'>11:00</div>
            {divElements}
            <div className='grid-element sp'>12:30</div>
            {divElements}
            <div className='grid-element sp'>02:00</div>
            {divElements}
            <div className='grid-element sp'>03:20</div>
            {divElements}
        </div>
    </>
  )
}

export default Turnos
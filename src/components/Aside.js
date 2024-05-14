import React from 'react'
import block from '../images/block.png'

const Aside = ({aV,sC,sAV}) => {

  const callTurn=()=>{
    sC('Turnos')
  }

  const toggleAside=()=>{
    sAV(!aV)
  }

  return (
    <aside style={{ transform: aV ? 'translateX(0)' : 'translateX(-100%)', 
            visibility: aV ? 'visible' : 'hidden' }}>
        <button className="aside-item"> Eventos<img className="aside-item-block" src={block} alt=""/></button>
        <button className="aside-item" onClick={()=>{callTurn();toggleAside()}}> Horario<img className="aside-item-block" src={block} alt=""/></button>
        <button className="aside-item"> Horario Personal<img src="" alt=""/></button>
    </aside>
  )
}

export default Aside
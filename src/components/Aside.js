import React from 'react'
import block from '../images/block.png'

const Aside = ({aV}) => {
  return (
    <aside style={{ transform: aV ? 'translateX(0)' : 'translateX(-100%)', 
            visibility: aV ? 'visible' : 'hidden' }}>
        <button className="aside-item"> Eventos<img className="aside-item-block" src={block} alt=""/></button>
        <button className="aside-item"> Horario<img className="aside-item-block" src={block} alt=""/></button>
        <button className="aside-item"> Horario Personal<img src="" alt=""/></button>
    </aside>
  )
}

export default Aside
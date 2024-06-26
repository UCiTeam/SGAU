import React, { useState } from 'react'
import Header from './components/Header'
import Aside from './components/Aside';
import PresentationContainer from './components/PresentationContainer';
import PresentationContainer2 from './components/PresentationContainer2'
import Form from './components/Form';
import Turnos from './components/Turnos';

const App = () => {

  const [asideVisible, setAsideVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [userName, setuserName] = useState('');
  const [screen, setscreen] = useState('Principal')

  return (
    <>

      <Header 
      
        aV={asideVisible} 
        sAV={setAsideVisible} 
        fV={formVisible} 
        sFV={setFormVisible}
        sC={setscreen}

      />

    
<main style={{ backgroundImage: screen === 'Principal' ? null : 'none' }}>

        <Aside aV={asideVisible} sC={setscreen} sAV={setAsideVisible}/>
        {screen==='Principal'?(userName===''?<PresentationContainer/>:<PresentationContainer2 uN={userName}/>):null}
        {screen==='Turnos'?<Turnos />: null}
        <Form fV={formVisible} sFV={setFormVisible} sUN={setuserName}/>

      </main>
    </>
  )
}

export default App
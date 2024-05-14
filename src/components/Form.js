import React,{useState} from 'react'
import userIcon from '../images/user-icon-3.png'
import logo from '../images/Logotipo_UCI_2.png'
import block from '../images/block.png'

const Form = ({fV,sFV,sUN}) => {

const [inputValue, setinputValue] = useState('');
const [passwordValue, setpasswordValue] = useState('')  

const toggleForm = () => {
  sFV(!fV);
};

const handleChange= (e)=>{
  setinputValue(e.target.value);
}

const handlePasswordChange= (e)=>{
  setpasswordValue(e.target.value);
}

const sendUserName=async (e) =>{
  
  if(inputValue.trim().length>3){
            
    e.preventDefault();

    try{
      const response= await fetch('http://192.168.137.1/api/login',
        {method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({inputValue,passwordValue})
        }
      )
      if(response.ok){
        const data = await response.json();
        console.log(data);
        sUN(inputValue);
        setinputValue('');
        toggleForm();
      }else{
        console.error('Error:',response.statusText)
      };

    }catch(error){
      console.error('Error:',error)
    }


}

}



  return (
    <form onSubmit={sendUserName} style={{transform: fV?'scale(100%)':'scale(0)'}} id="auth" action="">

        <img src={logo} id="f-img-one" alt=""/>
        <div className="f-input-outside">
            <div className="f-input-image-container">
                <img className="f-input-image" src={userIcon} alt=""/>
            </div>
            <input value={inputValue} 
                   className="f-input" 
                   type="text" 
                   name="user" 
                   placeholder="Usuario"
                   onChange={handleChange}
            />
        </div>
        <div className="f-input-outside">
            <div className="f-input-image-container">
                <img className="f-input-image" src={block} alt=""/>
            </div>
            <input  value={passwordValue} 
                    className="f-input" 
                    type="password" 
                    name="password" 
                    placeholder="Contraseña"
                    onChange={handlePasswordChange}/>
        </div>
        <div id="button-container">
            <button className="f-button" type="submit" >Acceder</button>
            <button className="f-button" type="button" onClick={toggleForm}>Cancelar</button>
        </div>

    </form>
  )
}

export default Form
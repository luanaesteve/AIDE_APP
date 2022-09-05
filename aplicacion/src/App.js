import './App.css';
import React from 'react';
import { Login } from './UI/Components/Login';
import Superiorlogin from './UI/Assets/Superiorlogin.png';
function App() {
  return (
    <div className="App">
       <div className="Container">
         <img className='' src={Superiorlogin} alt=""/>
         <Login/>
         <img className='linea1' src={linea1} alt=""/>
         <img className='lineaa1' src={linea1} alt=""/>
         <img className='linea2' src={linea2} alt=""/>
         <img className='google' src={google} alt=""/>
         <img className='facebook' src={facebook} alt=""/>
         <img className='tw' src={tw} alt=""/>
         <a className='contraseñaolvidada' href="contraseñaolvidada">¿Te olvidaste tu contraseña?</a>
         <a className='registrarse' href="registrarse">Registrarse</a>
         <p className='copyright'>© 2022 L.A.N. All Rights Reserved.</p>

      </div>
    </div>
  );
}

export default App;

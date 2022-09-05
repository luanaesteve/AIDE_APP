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
         
      </div>
    </div>
  );
}

export default App;

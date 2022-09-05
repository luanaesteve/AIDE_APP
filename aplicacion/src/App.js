import './App.css';
import React from 'react';
import { Login } from './UI/Components/Login';
import Superiorlogin from './UI/Assets/Superiorlogin.png';

function App() {
  return (
    <div className="Container">
       <div className="col-md-7 my-auto">
         <img className='' src={Superiorlogin} alt=""/>
      <div className="row">
        <div className="col-md-5">
          <Login/>
        </div>
       
        </div>
      </div>
    </div>
  );
}

export default App;

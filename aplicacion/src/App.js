import './App.css';
import React from 'react';

function App() {
  return (
    <div className="Container">
      <div className="row">
        <div className="col-md-5">
          <Signup />
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={rocketImg} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default App;

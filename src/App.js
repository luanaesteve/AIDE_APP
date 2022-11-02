
import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginScreen from '../src/UI/Screens/LoginScreen';
import RegisterScreen from '../src/UI/Screens/RegisterScreen';
import HomeScreen from '../src/UI/Screens/HomeScreen';

function App(){
return(
  <Routes>
    <Route path='/' element={<LoginScreen/>} />
    <Route path='/register' element={<RegisterScreen/>} />
    <Route path='/home' element={<HomeScreen/>} />
    </Routes>
);
}
export default App;
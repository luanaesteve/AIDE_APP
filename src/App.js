
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginScreen from '../src/UI/Screens/LoginScreen';
import RegisterScreen from '../src/UI/Screens/RegisterScreen';
import HomeScreen from '../src/UI/Screens/HomeScreen'; 
import Navbar from './UI/Components/Navbar';

export default function App(){
return(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element= {<LoginScreen/>} />
    <Route path='/Register' element= {<RegisterScreen/>} />
    <Route path='/Home' element= {<HomeScreen/>} />
    </Routes>
  </BrowserRouter>
);
}
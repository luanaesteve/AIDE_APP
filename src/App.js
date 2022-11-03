
import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginScreen from '../src/UI/Screens/LoginScreen';
import RegisterScreen from '../src/UI/Screens/RegisterScreen';
import HomeScreen from '../src/UI/Screens/HomeScreen';
import {AuthProvider} from './UI/Context/AuthContext';
import { ProtectedRoute } from '../src/UI/Screens/ProtectedRoute'

function App(){
return(
  <div className="bg-slate-300 text-black h-screen flex text-white">
  <AuthProvider>
  <Routes>
    <Route path='/' element={<LoginScreen/>} />
    <Route path='/register' element={<RegisterScreen/>} />
    <Route path='/home' element={<ProtectedRoute><HomeScreen/></ProtectedRoute>} />
    </Routes>
    </AuthProvider>
    </div>
);
}
export default App;
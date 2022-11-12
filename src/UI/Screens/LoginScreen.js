import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { Alert } from "./Alert";
import google  from '../Image/google.png';
import facebook  from '../Image/facebook.png';
import tw  from '../Image/tw.png';
export default function LoginScreen() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };
  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });
  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };
  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Escribi un email para cambiar la contraseña");
    try {
      await resetPassword(user.email);
      setError('Te enviamos un email. Revisa tu buuzon.')
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-violetaosc to-purple-900">
      {error && <Alert message={error} />}
      <form
        onSubmit={handleSubmit}
      >
          <h1 className="text-4xl font-medium text-center gap-1 flex flex-col md:space-x-8 font-serif text-violetita mt-2 ">Iniciar sesión</h1>
        <div className="mb-8">
          <label
            htmlFor="email"
            className="text-1x1 font-medium text-gray "
          >
            Correo electronico
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
           className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-violetita"
          placeholder="Ingresa tu correo electrónico"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="text-1x1 font-medium text-gray "
          >
    
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            className=  "w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-violetita"
            placeholder="Ingresa tu contraseña"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-violetita hover:bg-violetaosc rounded py-2 w-full transition duration-150 ease-in"
            type="submit"
          >
            Login
          </button>
          </div>
          <img src={google}
      onClick={handleGoogleSignin} className="inline-block p-9 rounded-full mx-auto ">
      </img>
      <img src={facebook} className="inline-block p-9 rounded-full mx-auto"
    >
      </img>
      <img src={tw} className='inline-block p-9 rounded-full mx-auto'
    >
      </img>
       
      </form>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 order-2 md:order-1">
         
        
        
        <span className="text-gray-400">
          ¿No tienes cuenta?{" "}  
        <Link to="/register"  href="#" className= "text-gray-400 hover:text-violetita transition-colors ">
          Registrarse
        </Link>
        </span>
        <a
            className="text-gray-400 hover:text-violetita transition-colors"
            href="#!"
            onClick={handleResetPassword}
          >
            ¿Te olvidaste tu contraseña?
          </a>
        </div>
    </div>
  );
}
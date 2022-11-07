import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { Alert } from "./Alert";
import Superiorlogin  from '../Image/Superiorlogin.png';
import linea1  from '../Image/linea1.png';
import linea2  from '../Image/linea2.png';
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-primary to-secondary">
      {error && <Alert message={error} />}
      <div className="">
      <img className='' src={Superiorlogin} alt="" />
    
      </div>

      <form
        onSubmit={handleSubmit}
      >
       
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-violetaosc text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center - "
            placeholder="youremail@company.tld"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-violetaosc text-sm font-bold mb-2"
          >
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="*************"
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
      onClick={handleGoogleSignin} className="inline-block p-3 rounded-full ">
      </img>
      <img src={facebook} className="inline-block p-3 rounded-full"
    >
      </img>
      <img src={tw} className='inline-block p-3 rounded-full'
    >
      </img>
       
      </form>
      
      <div className="flex items-center justify-between">
          <a
            className="text-center font-bold text-sm ext-violetaosc hover:text-violetita"
            href="#!"
            onClick={handleResetPassword}
          >
            Te olvidaste tu contraseña?
          </a>
          </div>
     
        <Link to="/register" className= "text-center font-bold text-violetaosc hover:text-violetita">
          Registrarse
        </Link>
    </div>
  );
}
import { useState, React } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { Alert } from "./Alert";

export default function RegisterScreen() {

  

  const { signup } = useAuth();

  const [user, setUser, ] = useState({
    email: "",
    password: "",
    
  });


  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
        console.log(error.code);
        if (error.code === "Error - intente nuevamente"){
            setError('Correo invalido')
        }
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-violetaosc">
      {error && <Alert message={error} />}

      <form
        onSubmit={handleSubmit}
      >
         <div className="mb-6">
         <h1 className="text-4xl font-medium text-center gap-1 flex flex-col font-serif text-violetita ">Registro</h1>
         </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="font-medium text-zinc-300"
          >
            Correo Electronico
          </label>
          <input
            type="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none border-violetita hover:border-white"
            placeholder="Ingresa tu correo electrónico"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="font-medium text-zinc-300"
          >
            Contraseña
          </label>
          <input
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className=  "w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none border-violetita hover:border-white "
            placeholder="Ingresa tu contraseña"
          />
     </div>
        <div className="flex items-center justify-between">
        <button className="bg-purple-800 text-white w-full py-3 px-4 rounded-full hover:bg-purple-500 transition-colors">
          Registrarse
        </button>
        </div>
        
<div className="flex flex-col md:flex-row items-center justify-between gap-2 ">
      
        <p className="text-zinc-300 ">
        ¿Ya tienes una cuenta?
        </p>
        <Link to="/" className="text-violetita hover:text-purple-500 transition-colors">
          Loguearse
        </Link>
     
      </div>
      </form>
     
    </div>
  );
}
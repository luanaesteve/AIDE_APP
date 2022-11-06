import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { Alert } from "./Alert";

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

      <form
        onSubmit={handleSubmit}
       
      >
        <div class=" text-center block text-gray-700 text-sm font-bold mb-2 ">Ingresar</div>
       
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
         
       
      </form>
      <button
        onClick={handleGoogleSignin}
        className=" hover:bg-slate-200 text-black  shadow rounded border-2 border-gray-300 py-2 px-4"
      >
        Google login
      </button>
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
import React, { useState } from "react";
import logo from "../Image/logo.png";
import { useAuth } from "../Context/AuthContext";
import { Link } from "react-router-dom";
// Icons
import {
  RiHome3Line,
  RiTodoFill,
  RiCalendarCheckFill,
  RiFingerprintFill,
  RiMore2Fill,
  RiCloseFill,
} from "react-icons/ri";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { logout, user } = useAuth();

  console.log(user);
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    
    <>
      <div
        className={`bg-violetaosc h-full fixed lg:static w-[80%] md:w-[40%] lg:w-full transition-all z-50 duration-300 ${
          showMenu ? "left-0" : "-left-full"
        }`}
      >
        {/* Profile */}
        <div className="flex flex-col items-center justify-center p-8 gap-2 h-[30vh]">
        <img src={logo}
            className="w-25 h-20 object-cover ring-gray-300"
          />
          <h1 className="text-l text-white font-bold">Asesoria Epet 20</h1>
        </div>
        {/* Nav */}
        <div className="bg-purple-900 p-8 rounded-tr-[100px] h-[70vh] flex flex-col justify-between gap-8">
          <nav className="flex flex-col gap-8">
            <a
              href="#"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-purple-800 transition-colors"
            >
              <RiHome3Line /> Inicio
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-purple-800 transition-colors"
            >
              <RiTodoFill /> <Link to="/especialidad">
          Especialidad
        </Link>
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-purple-800 transition-colors"
            >
              <RiCalendarCheckFill /> Calendario
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-purple-800 transition-colors"
            >
              <RiFingerprintFill /> Ajustes
            </a>
        
          </nav>
          <div className="bg-primary-900/50 text-white p-4 rounded-xl">
          <a className="px-2 text-center"
          onClick={handleLogout}
        >
        Cerrar sesion 
        </a>


          </div>
        </div>
      </div>
      {/* Button mobile */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="lg:hidden fixed right-4 bottom-4 text-2xl bg-primary-900 p-2.5 rounded-full text-white z-50"
      >
        {showMenu ? <RiCloseFill /> : <RiMore2Fill />}
      </button>
    </>
  );
};

export default Sidebar;
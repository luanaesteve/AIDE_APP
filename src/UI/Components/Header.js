import React from "react";
// Icons
import { RiSearch2Line } from "react-icons/ri";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between gap-4">
      <h1 className="text-2xl md:text-3xl font-bold">
         Good morning, <span className="text-primary-100">Widi</span>
      </h1>
      <form className="w-full md:w-auto">
        <div className="relative">
          <RiSearch2Line className="absolute top-1/2 -translate-y-1/2 left-2 fill-white" />
          <input
            type="text"
            className="bg-purple-700 outline-none py-2 pl-8 pr-4 rounded-xl w-full md:w-auto placeholder-white"
            placeholder="Buscar contenido"
          />
        </div>
      </form>
    </header>
  );
};

export default Header;
import React from "react";
import Sidebar from "../Components/SideBar";
import Header2 from "../Components/Header2";

export default function Asesoria() {
    return (
     <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
     <Sidebar />
     <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-10 h-[100vh] overflow-y-scroll ">
       <Header2 />
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full">
  <div className="border rounded-lg bg-violetaosc">
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 p-8">
      <img
        src="https://thumbs.dreamstime.com/b/emprendimiento-distancia-feliz-mujer-millennial-sentada-en-mesa-con-laptop-cocina-retrato-de-milenaria-sonriendo-jovencita-216033803.jpg"
        alt="JT Devs"
        lazyload="true"
        className="rounded-full w-24 h-24 object-cover ring-4 ring-violetita"
      />
      <div>
        <h3 className="font-semibold text-xl md:text-2xl text-white">
          Marina Luz Gallegos
        </h3>
        <p className="text-gray-600">Psicopedagoga</p>
      </div>
    </div>
    <div className="flex flex-col gap-4 px-6">
      <p className="text-gray-500 text-center lg:text-left">
        Asesora pedagógica, diseñadora y encargada de coordinar las reuniones entre alumnos, padres y asesoras. Se incorporó en 2021.
      </p>
      <div className="flex items-center justify-center lg:justify-start gap-2 py-4">
      </div>
    </div>
  </div>
  <div className="border rounded-lg bg-violetaosc">
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 p-8">
      <img
        src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg?w=1380&t=st=1660703188~exp=1660703788~hmac=27d047a887e146bd9657d48286e020a4a4b666a042f8e0efd55ad0c448e00106"
        alt="JT Devs"
        lazyload="true"
        className="rounded-full w-24 h-24 object-cover ring-4 ring-violetita"
      />
      <div>
        <h3 className="font-semibold text-xl md:text-2xl text-white">
          Juliana Puentes
        </h3>
        <p className="text-gray-600">Asesora Psicopedagoga</p>
      </div>
    </div>
    <div className="flex flex-col gap-4 px-6">
      <p className="text-white text-center lg:text-left">
        Asesora especializada en adolescentes, mayormente los alumnos concurren a ella para poder hablar y tener un espacio seguro. Se incorporó en 2018.
      </p>
      <div className="flex items-center justify-center lg:justify-start gap-2 py-4">
        
      </div>
    </div>
  </div>
  <div className="border rounded-lg bg-violetaosc">
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 p-8">
      <img
        src="https://img.freepik.com/foto-gratis/retrato-mujer-joven-ramo-girasoles_169016-21587.jpg?w=1380&t=st=1660708365~exp=1660708965~hmac=2ec6707470a72fc810a232735a56f2c1f43daa46ac4393956857f3008b2d28dd"
        alt="JT Devs"
        lazyload="true"
        className="rounded-full w-24 h-24 object-cover ring-4 ring-violetita"
      />
      <div>
        <h3 className="font-semibold text-xl md:text-2xl text-white">
          Pamela Perez
        </h3>
        <p className="text-white">Asesora Psicopedagoga</p>
      </div>
    </div>
    <div className="flex flex-col gap-4 px-6">
      <p className="text-white text-center lg:text-left">
        Asesora especializada en adolescentes. Se incorporo en 2021.
      </p>
      <div className="flex items-center justify-center lg:justify-start gap-2 py-4">
        
      </div>
    </div>
  </div>
  <div className="border rounded-lg bg-violetaosc">
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 p-8">
      <img
        src="https://img.freepik.com/foto-gratis/feliz-chico-amable-gafas-saludando-hola_74855-3484.jpg?w=1380&t=st=1660708424~exp=1660709024~hmac=74ca1cab6ce765dfa11c1901e1214ed5e55f614d4c5f14f8477ed54c8d4f7d57"
        alt="JT Devs"
        lazyload="true"
        className="rounded-full w-24 h-24 object-cover ring-4 ring-gray-300"
      />
      <div>
        <h3 className="font-semibold text-xl md:text-2xl text-gray-700">
          Sol Huincaman
        </h3>
        <p className="text-gray-600">Psicopedagoga</p>
      </div>
    </div>
    <div className="flex flex-col gap-4 px-6">
      <p className="text-gray-500 text-center lg:text-left">
        Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Illum
        Nesciunt Officia Aliquam Neque Optio? Cumque Facere Numquam Est.
      </p>
      <div className="flex items-center justify-center lg:justify-start gap-2 py-4">
        
      </div>
    </div>
  </div>
</div>
    </main>
    </div>
    )

    }
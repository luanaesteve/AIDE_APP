import React from "react";
import Sidebar from "../Components/SideBar";
import Header2 from "../Components/Header2";

 
export default function Especialidad() {
   return (
      <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-10 h-[100vh] overflow-y-scroll ">
        <Header2 />
        {/* Section 1 */}
        <section className="grid grid-cols-1  mt-10 gap-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 p-10 pb-8 rounded-xl bg-violetaosc">
  <div>
    <img 
      src="https://blog.hubspot.es/hubfs/media/lenguajesprogramacion.jpeg" 
      className="w-full md:w-[540px] h-full md:h-[300px] object-cover rounded-lg" 
      alt="" 
    />
  </div>
  <div className="mt-4 flex flex-col gap-2">
    <span className="text-blue-600 uppercase font-semibold text-xs text-white">
      AIDE
    </span>
    <a href="#" className="text-2xl font-semibold hover:underline text-white">
      Especialidad de la Escuela Tecnica 20
    </a>
    <p className="text-white">
    E.P.E.T N°20 es una institución educativa secundaria técnica, con orientación a Técnico en programación.
    Esta enseñera distinto tipos de lenguaje de programacion, y programas que se utiliza hoy en dia en el ambito de la programacion,
    como por ejemplo php, java, html, js, pseint, entre otros.
    </p>
    <div className="mt-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
       
     
      </div>
      <div>
        <p className="uppercase text-gray-600 text-sm text-white">15 noviembre 2022</p>
      </div>
    </div>
  </div>
</div>

</section>

{/* Section 2 */}
<section className="grid grid-cols-1  mt-10 gap-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 p-10 pb-8 rounded-xl bg-violetaosc">
  <div>
    <img 
      src="https://www.pragma.com.co/hs-fs/hubfs/h_react.jpg?width=792&name=h_react.jpg" 
      className="w-full md:w-[600px] h-full md:h-[300px] object-cover rounded-lg" 
      alt="" 
    />
  </div>
  <div className="mt-4 flex flex-col gap-2">
    <span className="text-blue-600 uppercase font-semibold text-xs text-white">
      React
    </span>
    <a href="#" className="text-2xl font-semibold hover:underline text-white">
      Aplicacion creada por react
    </a>
    <p className="text-white">
    React es una biblioteca Javascript de código abierto diseñada 
    para crear interfaces de usuarios.
    AIDE fue una aplicacione creada como proyecto final de la
    la materia Programacion Web, esta misma fue desarrollada durante
    todo el año, por las estudiantes "Luana Esteve", "Abigail Salcedo" y "Nicole Aramayo".

    
    </p>
    <div className="mt-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
       
        
      </div>
      <div>
        <p className="uppercase text-gray-600 text-sm text-white">15 noviembre 2022</p>
      </div>
    </div>
  </div>
</div>

</section>


{/* Section 3 */}

<section className="grid grid-cols-1  mt-10 gap-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 p-10 pb-8 rounded-xl bg-violetaosc">
  <div>
    <img 
      src="https://cptn.org.ar/wp-content/uploads/2021/11/epet20-feria-especialidades.jpg" 
      className="w-full md:w-[400px] h-full md:h-[300px] object-cover rounded-lg" 
      alt="" 
    />
  </div>
  <div className="mt-4 flex flex-col gap-2">
    <span className="text-blue-600 uppercase font-semibold text-xs text-white">
      Programacion
    </span>
    <a href="#" className="text-2xl font-semibold hover:underline text-white">
      Orientacion - Cuarto año 
    </a>
    <p className="text-white">
    Materias de 4° año: analisis matematico,instruccion civica, logica, quimica aplicada, introduccion a la programacion,
fisica, introduccion a las bases de datos, ingles tecnico, literatura.
<p className="text-white">
    
    Talleres: Base de Datos, Electrónica, Lenguaje de Programación

    
    </p>

    
    </p>
    <div className="mt-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
       
        
      </div>
      <div>
        <p className="uppercase text-gray-600 text-sm text-white">15 noviembre 2022</p>
      </div>
    </div>
  </div>
</div>

</section>




      </main>
      </div>
   )
  

}
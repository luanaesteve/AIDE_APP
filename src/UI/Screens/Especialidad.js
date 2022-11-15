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
      src="https://img.freepik.com/foto-gratis/programador-sonriente-tiro-medio-sosteniendo-telefono_23-2149101155.jpg?w=2000&t=st=1660331259~exp=1660331859~hmac=4a6b4885e8141e344e237674190db60aa4431782337bc5df8a22e9d895ebdd6f" 
      className="w-full md:w-[500px] h-full md:h-[300px] object-cover rounded-lg" 
      alt="" 
    />
  </div>
  <div className="mt-4 flex flex-col gap-2">
    <span className="text-blue-600 uppercase font-semibold text-xs text-white">
      Producto
    </span>
    <a href="#" className="text-2xl font-semibold hover:underline text-white">
      Contruí un blog exitoso en un año
    </a>
    <p className="text-white">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
      aliquam ligula. Sed et massa pulvinar, interdum leo id, maximus
      lorem. Donec aliquet auctor turpis ut aliquet. Donec accumsan eu
      ipsum a vehicula.
    </p>
    <div className="mt-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img 
          src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg?w=2000&t=st=1660333883~exp=1660334483~hmac=70d21d08617e34074243187ec59df8fd4b564c084f33609c6db242de4e40fc01"
          className="w-[40px] h-[40px] object-cover rounded-full"
        />
        <div className="text-white">
          <span>Yared Jacquez Trillo</span>
        </div>
      </div>
      <div>
        <p className="uppercase text-gray-600 text-sm text-white">19 sep 2022</p>
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
      src="https://img.freepik.com/foto-gratis/programador-sonriente-tiro-medio-sosteniendo-telefono_23-2149101155.jpg?w=2000&t=st=1660331259~exp=1660331859~hmac=4a6b4885e8141e344e237674190db60aa4431782337bc5df8a22e9d895ebdd6f" 
      className="w-full md:w-[500px] h-full md:h-[300px] object-cover rounded-lg" 
      alt="" 
    />
  </div>
  <div className="mt-4 flex flex-col gap-2">
    <span className="text-blue-600 uppercase font-semibold text-xs text-white">
      Producto
    </span>
    <a href="#" className="text-2xl font-semibold hover:underline text-white">
      Contruí un blog exitoso en un año
    </a>
    <p className="text-white">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
      aliquam ligula. Sed et massa pulvinar, interdum leo id, maximus
      lorem. Donec aliquet auctor turpis ut aliquet. Donec accumsan eu
      ipsum a vehicula.
    </p>
    <div className="mt-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img 
          src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg?w=2000&t=st=1660333883~exp=1660334483~hmac=70d21d08617e34074243187ec59df8fd4b564c084f33609c6db242de4e40fc01"
          className="w-[40px] h-[40px] object-cover rounded-full"
        />
        <div className="text-white">
          <span>Yared Jacquez Trillo</span>
        </div>
      </div>
      <div>
        <p className="uppercase text-gray-600 text-sm text-white">19 sep 2022</p>
      </div>
    </div>
  </div>
</div>

</section>


      </main>
      </div>
   )
  

}
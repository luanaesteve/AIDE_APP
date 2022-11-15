import { useAuth } from "../Context/AuthContext";
import { RiMoonClearFill } from "react-icons/ri";
import Header from "../Components/Header";
import Sidebar from "../Components/SideBar";



export default function HomeScreen() {
  

  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
    <Sidebar />
    <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-10 h-[100vh] overflow-y-scroll ">
      <Header />
      {/* Section 1 */}
      <section className="grid grid-cols-1  mt-10 gap-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 p-10 pb-8 rounded-xl bg-gray-100">

  <div>
    <img
      src="https://www.neuqueninforma.gob.ar/wp-content/uploads/2017/01/WEB-NO-CABEZA...EPET-20.jpg"
      className="object-cover rounded-xl w-full md:w-auto md:max-w-sm -mt-20 drop-shadow-2xl object-center"
    />
  </div>

  <div>
    <div className="flex items-center gap-4 justify-center">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-5xl text-purple-600" height="2em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <g>
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path>
            </g>
      </svg>
      <h2 className="text-2xl text-center font-bold text-gray-900">
        Sobre nosotros
      </h2>
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-5xl text-purple-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <g>
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z"></path>
        </g>
      </svg>
    </div>
    <p className="my-4 text-gray-500 text-center ">
    E.P.E.T N°20 es una institución educativa secundaria técnica, con orientación a Técnico en programación.
    En nuestro establecimiento poseemos diferentes aulas y talleres especializados en la orientación académica y además de recreativos, tales sean como, sala multimedia, talleres de ciclo básico y superior, biblioteca, S.U.M, aulas teóricas, asesoría, preceptoría, oficina técnica, cocina y kiosko.
    </p>
    <div className="mb-8">
      <h4 className="text-lg text-purple-600 font-bold text-center">
       Crecemos con vos
      </h4>
      <p className="text-center">
        <span className="font-medium ">EPET 20</span> en{" "}
        <span className="font-medium ">Direccion general</span>
      </p>
    </div>
  </div>
</div>
      </section>
      <h1 className="text-2xl font-bold mb-8 text-center">Creadoras:</h1>

      {/* Section 2 */}
      <section className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-8">
        
        <div>
       
          <div className="bg-white p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
            {/* Card 1 */}
            <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
              <div className="col-span-2 flex items-center gap-4">
                <img
                  src="http://feibm.com.co/wp-content/uploads/2017/10/mujer-perfil.jpg"
                  className="w-14 h-14 object-cover rounded-xl"
                />
                <div>
                  <h3 className="font-bold">Luana Esteve</h3>
                  <p className="text-gray-500 text-center  ">6to 1era </p>
                </div>
              </div>
              <div>
              <span className="bg-primary-100/10 text-black py-1 px-3 rounded-full font-medium">
                  Tec. Prog
                </span>
              </div>
              <div>
                <span className="font-bold ">19 años
                </span>
              </div>
            </div>
            {/* Card 2 */}
            <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
              <div className="col-span-2 flex items-center gap-4">
                <img
                  src="http://feibm.com.co/wp-content/uploads/2017/10/mujer-perfil.jpg"
                  className="w-14 h-14 object-cover rounded-xl"
                />
                <div>
                  <h3 className="font-bold">Nicole Aramayo</h3>
                  <p className="text-gray-500 text-center"></p>
                </div>
              </div>
              <div>
                <span className="bg-primary-100/10 text-black py-1 px-3 rounded-full font-medium">
                  Tec. prog
                </span>
              </div>
              <div>
                <span className="font-bold"> 20 años</span>
              </div>
            </div>
          
          {/*CARD 3 */}
          <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
              <div className="col-span-2 flex items-center gap-4">
                <img
                  src="http://feibm.com.co/wp-content/uploads/2017/10/mujer-perfil.jpg"
                  className="w-14 h-14 object-cover rounded-xl"
                />
                <div>
                  <h3 className="font-bold">Abigail Salcedo</h3>
                  <p className="text-gray-500 text-center ">6to 1era</p>
                </div>
              </div>
              <div>
              <span className="bg-primary-100/10 text-black py-1 px-3 rounded-full font-medium">
                  Tec. prog
                </span>
              </div>
              <div>
                <span className="font-bold"> 18 años</span>
              </div>
            </div>
            </div>
            {/*Separador 2 */}



          <div className="bg-violetaosc text-gray-300 p-8 rounded-xl shadow-2xl flex items-center justify-between  gap-8">
            <div>
              <h5 className="font-bold text-white ">Excelencia empresarial</h5>
            </div>
            <div className="w-full xl:w-auto">
              <button className="bg-purple-500 py-2 px-6 rounded-xl text-white w-full">
              APROBAR
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src="https://init-dev.com.ar/wp-content/uploads/2022/06/exequiel-iajpg-244x300.jpg"
                  className="w-14 h-14 object-cover rounded-full"
                />
                <div>
                  <h3 className="font-bold">Exequiel Wiedermann</h3>
                  <p className="text-gray-500">Se come los mocos</p>
                </div>
              </div>
              <div>
                <span className="bg-violetaosc py-2 px-4 rounded-full text-white">
                  Profesor
                </span>
              </div>
            </div>
            <div>
              <h5 className="text-lg font-bold">

              </h5>
              <p className="text-gray-500">
                Clara necesidad de un mate.
              </p>
            </div>
            <div className="bg-primary-100/10 flex flex-col md:flex-row items-center justify-between gap-4 py-8 px-4 rounded-lg">
              <div>
                <sup className="text-sm text-gray-500">&euro;</sup>{" "}
                <span className="text-2xl font-bold mr-2">8,700</span>
                <span className="text-sm text-gray-500">/ mes</span>
              </div>
              <div>
              
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
);
}
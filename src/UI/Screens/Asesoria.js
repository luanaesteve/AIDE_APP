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
  <div className="border rounded-lg">
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 p-8">
      <img
        src="https://thumbs.dreamstime.com/b/emprendimiento-distancia-feliz-mujer-millennial-sentada-en-mesa-con-laptop-cocina-retrato-de-milenaria-sonriendo-jovencita-216033803.jpg"
        alt="JT Devs"
        lazyload="true"
        className="rounded-full w-24 h-24 object-cover ring-4 ring-gray-300"
      />
      <div>
        <h3 className="font-semibold text-xl md:text-2xl text-gray-700">
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
  <div className="border rounded-lg">
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 p-8">
      <img
        src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg?w=1380&t=st=1660703188~exp=1660703788~hmac=27d047a887e146bd9657d48286e020a4a4b666a042f8e0efd55ad0c448e00106"
        alt="JT Devs"
        lazyload="true"
        className="rounded-full w-24 h-24 object-cover ring-4 ring-gray-300"
      />
      <div>
        <h3 className="font-semibold text-xl md:text-2xl text-gray-700">
          Juliana Pérez
        </h3>
        <p className="text-gray-600">Psicopedagoga</p>
      </div>
    </div>
    <div className="flex flex-col gap-4 px-6">
      <p className="text-gray-500 text-center lg:text-left">
        Asesora especializada en adolescentes, mayormente los alumnos concurren a ella para poder hablar y tener un espacio seguro. Se incorporó en 2018.
      </p>
      <div className="flex items-center justify-center lg:justify-start gap-2 py-4">
        
      </div>
    </div>
  </div>
  <div className="border rounded-lg">
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 p-8">
      <img
        src="https://img.freepik.com/foto-gratis/retrato-mujer-joven-ramo-girasoles_169016-21587.jpg?w=1380&t=st=1660708365~exp=1660708965~hmac=2ec6707470a72fc810a232735a56f2c1f43daa46ac4393956857f3008b2d28dd"
        alt="JT Devs"
        lazyload="true"
        className="rounded-full w-24 h-24 object-cover ring-4 ring-gray-300"
      />
      <div>
        <h3 className="font-semibold text-xl md:text-2xl text-gray-700">
          Pamela Anderson
        </h3>
        <p className="text-gray-600">Desarrolladora frontend</p>
      </div>
    </div>
    <div className="flex flex-col gap-4 px-6">
      <p className="text-gray-500 text-center lg:text-left">
        Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Illum
        Nesciunt Officia Aliquam Neque Optio? Cumque Facere Numquam Est.
      </p>
      <div className="flex items-center justify-center lg:justify-start gap-2 py-4">
        <a href="https://www.facebook.com/jtdevsmx" target="_blank" class="p-2 bg-gray-100 rounded-lg">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path fill-rule="nonzero" d="M13 9h4.5l-.5 2h-4v9h-2v-9H7V9h4V7.128c0-1.783.186-2.43.534-3.082a3.635 3.635 0 0 1 1.512-1.512C13.698 2.186 14.345 2 16.128 2c.522 0 .98.05 1.372.15V4h-1.372c-1.324 0-1.727.078-2.138.298-.304.162-.53.388-.692.692-.22.411-.298.814-.298 2.138V9z"></path>
                </g>
            </svg>
        </a>
        <a href="https://www.instagram.com/jtdevsmx/" target="_blank" class="p-2 bg-gray-100 rounded-lg">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path fill-rule="nonzero" d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z"></path>
                </g>
            </svg>
        </a>
        <a href="https://twitter.com/jtdevsmx" target="_blank" class="p-2 bg-gray-100 rounded-lg">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path fill-rule="nonzero" d="M15.3 5.55a2.9 2.9 0 0 0-2.9 2.847l-.028 1.575a.6.6 0 0 1-.68.583l-1.561-.212c-2.054-.28-4.022-1.226-5.91-2.799-.598 3.31.57 5.603 3.383 7.372l1.747 1.098a.6.6 0 0 1 .034.993L7.793 18.17c.947.059 1.846.017 2.592-.131 4.718-.942 7.855-4.492 7.855-10.348 0-.478-1.012-2.141-2.94-2.141zm-4.9 2.81a4.9 4.9 0 0 1 8.385-3.355c.711-.005 1.316.175 2.669-.645-.335 1.64-.5 2.352-1.214 3.331 0 7.642-4.697 11.358-9.463 12.309-3.268.652-8.02-.419-9.382-1.841.694-.054 3.514-.357 5.144-1.55C5.16 15.7-.329 12.47 3.278 3.786c1.693 1.977 3.41 3.323 5.15 4.037 1.158.475 1.442.465 1.973.538z"></path>
                </g>
            </svg>
        </a>
      </div>
    </div>
  </div>
  <div className="border rounded-lg">
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 p-8">
      <img
        src="https://img.freepik.com/foto-gratis/feliz-chico-amable-gafas-saludando-hola_74855-3484.jpg?w=1380&t=st=1660708424~exp=1660709024~hmac=74ca1cab6ce765dfa11c1901e1214ed5e55f614d4c5f14f8477ed54c8d4f7d57"
        alt="JT Devs"
        lazyload="true"
        className="rounded-full w-24 h-24 object-cover ring-4 ring-gray-300"
      />
      <div>
        <h3 className="font-semibold text-xl md:text-2xl text-gray-700">
          LUANA HOLA
        </h3>
        <p className="text-gray-600">HOLA SOY ABI</p>
      </div>
    </div>
    <div className="flex flex-col gap-4 px-6">
      <p className="text-gray-500 text-center lg:text-left">
        Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Illum
        Nesciunt Officia Aliquam Neque Optio? Cumque Facere Numquam Est.
      </p>
      <div className="flex items-center justify-center lg:justify-start gap-2 py-4">
        <a href="https://www.facebook.com/jtdevsmx" target="_blank" class="p-2 bg-gray-100 rounded-lg">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path fill-rule="nonzero" d="M13 9h4.5l-.5 2h-4v9h-2v-9H7V9h4V7.128c0-1.783.186-2.43.534-3.082a3.635 3.635 0 0 1 1.512-1.512C13.698 2.186 14.345 2 16.128 2c.522 0 .98.05 1.372.15V4h-1.372c-1.324 0-1.727.078-2.138.298-.304.162-.53.388-.692.692-.22.411-.298.814-.298 2.138V9z"></path>
                </g>
            </svg>
        </a>
        <a href="https://www.instagram.com/jtdevsmx/" target="_blank" class="p-2 bg-gray-100 rounded-lg">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path fill-rule="nonzero" d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z"></path>
                </g>
            </svg>
        </a>
        <a href="https://twitter.com/jtdevsmx" target="_blank" class="p-2 bg-gray-100 rounded-lg">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path fill-rule="nonzero" d="M15.3 5.55a2.9 2.9 0 0 0-2.9 2.847l-.028 1.575a.6.6 0 0 1-.68.583l-1.561-.212c-2.054-.28-4.022-1.226-5.91-2.799-.598 3.31.57 5.603 3.383 7.372l1.747 1.098a.6.6 0 0 1 .034.993L7.793 18.17c.947.059 1.846.017 2.592-.131 4.718-.942 7.855-4.492 7.855-10.348 0-.478-1.012-2.141-2.94-2.141zm-4.9 2.81a4.9 4.9 0 0 1 8.385-3.355c.711-.005 1.316.175 2.669-.645-.335 1.64-.5 2.352-1.214 3.331 0 7.642-4.697 11.358-9.463 12.309-3.268.652-8.02-.419-9.382-1.841.694-.054 3.514-.357 5.144-1.55C5.16 15.7-.329 12.47 3.278 3.786c1.693 1.977 3.41 3.323 5.15 4.037 1.158.475 1.442.465 1.973.538z"></path>
                </g>
            </svg>
        </a>
      </div>
    </div>
  </div>
</div>
    </main>
    </div>
    )

    }
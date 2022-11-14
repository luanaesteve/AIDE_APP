import React from "react";
import Sidebar from "../Components/SideBar";
import Header from "../Components/Header";

export default function Asesoria() {
    return (
     <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
     <Sidebar />
     <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-10 h-[100vh] overflow-y-scroll ">
       <Header />

    </main>
    </div>
    )
    }
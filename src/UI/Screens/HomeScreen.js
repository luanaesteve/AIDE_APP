import { useAuth } from "../Context/AuthContext";
import { RiHomeHeartFill } from "react-icons/ri";
import logo from "../Image/logo.png"

export default function HomeScreen() {
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
    <div className=" min-h-screen grid grid-cols-6 overflow-y-scroll">
      <div className=" bg-violetaosc p-10  flex flex-col justify-center gap-2 items-center">
        <div className="w-20 h-20 items-center">
        <img src={logo} className=""></img>
          </div>
        {/* MENU */}
        <nav>
          <ul>
            <li>
              <a href="#" className="flex items-center p-8 gap-2 text-gray p-4 hover:bg-purple-600 hover:text-white 
              rounded-lg transition-colors font-semibold">
              <RiHomeHeartFill/>Inicio
              </a>
            </li>
            <li>
              <a href="#" className=" flex items-center p-8 gap-2 text-gray p-4 hover:bg-purple-600 hover:text-white 
              rounded-lg transition-colors font-semibold">
              <RiHomeHeartFill/>Inicio
              </a>
            </li>
            <li>
              <a href="#" className=" flex items-center p-8 gap-2 text-gray p-4 hover:bg-purple-600 hover:text-white 
              rounded-lg transition-colors font-semibold">
              <RiHomeHeartFill/>Inicio
              </a>
            </li>
            <li>
              <a href="#" className=" flex items-center p-8 gap-2 text-gray p-4 hover:bg-purple-600 hover:text-white 
              rounded-lg transition-colors font-semibold">
              <RiHomeHeartFill/>Inicio
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="col-span-5">Hola</div>
    </div>
  );
}
import { useAuth } from "../Context/AuthContext";

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
    <div className="min-h-screen grid grid-cols-6">
      <div className="bg-green-300 col-span-1">
        {/*Logotipo*/}
        <div className="text-center p-8">
          <h1 className="uppercase font-bold tracking-[4px]">TU LOGO</h1>
          </div>
      </div>
      <div className="col-span-5">Hola</div>
    </div>
  );
}
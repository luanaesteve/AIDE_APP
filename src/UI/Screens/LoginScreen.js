import { useState, useAuth } from "react";
import {} from '../Context/AuthContext'

export default function LoginScreen() {
  const {} = useAuth()
  console.log(user); 
  

 const[user, setUser] = useState({
    email:'',
    password:'',
   })

   return <div>
<form> 
    <input type="email" name="email" id="email" />
    <input type="password" name="password" id="password"/>
</form>

    </div>;
}

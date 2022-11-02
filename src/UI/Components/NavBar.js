import {NavLink} from 'react-router-dom';

export default function Navbar(){
    return (
        <div>
          <ul>
          <li>
                <NavLink to='/ '>Login</NavLink>
            </li>
            <li>
            <NavLink to='/HomeScreen'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/RegisterScreen'>Register</NavLink>
            </li>
          </ul>
        </div>
    )
}
import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Navbar(){
    return (
        <div>
          <ul>
          <li>
                <NavLink to='/ '>Login</NavLink>
            </li>
            <li>
            <NavLink to='/Home'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/Register'>Register</NavLink>
            </li>
          </ul>
        </div>
    )
}
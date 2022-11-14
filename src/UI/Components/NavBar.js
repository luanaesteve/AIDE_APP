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
            <li>
            <NavLink to='/Invoice'>Invoice</NavLink>
            </li>
            <li>
                <NavLink to='/Projects'>Projects</NavLink>
            </li>
            <li>
                <NavLink to='/Reports'>Reports</NavLink>
            </li>
          </ul>
        </div>
    )
}
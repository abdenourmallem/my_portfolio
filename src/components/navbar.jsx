import React, { use } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
function Navbar() {
  navigation = useNavigate();
  return (
    <>
      <nav className='navbar'>
        <ul>
          <li><NavLink to="/">About</NavLink></li>
          <li><NavLink to="/resumePage">Resume</NavLink></li>
          <li><NavLink to="/projectsPage">Projects</NavLink></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;
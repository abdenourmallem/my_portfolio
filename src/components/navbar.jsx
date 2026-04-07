import React, { use } from 'react';
import { useNavigate } from 'react-router-dom';
function Navbar() {
  navigation = useNavigate();
  return (
    <>
      <nav>
        <ul>
          <li><a onClick={() => navigation('/')}>About</a></li>
          <li><a onClick={() => navigation('/resumePage')}>Resume</a></li>
          <li><a onClick={() => navigation('/contactPage')}>Contact</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;
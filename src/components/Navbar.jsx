import React from 'react';
import {Logo, Search} from "./";
const Navbar = () => {
  return (
    <header>
      <nav className='nav-container'>
     <Logo/>
     <Search/>
      </nav>
    </header>
  )
}
export default Navbar
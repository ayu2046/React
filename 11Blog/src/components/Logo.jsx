import React from 'react';
import logo from '../assets/logo.png'; // Adjust the path based on your file structure

function Logo() {
  return (
    <img className='w-21 h-20 p-0 m-0 bg-slate-500 rounded-3xl' src={logo} alt="Website Logo"  />
  );
}

export default Logo;
import React, { useState } from 'react'
import '../style/navbar.css'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.jpg'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftNav'>
          <img src={Logo} style={{border:"none"}}/>
        </div>
        <div className='rightNav'>
          <Link to= "/">Home</Link>
          <Link to= "/my-pokeman">My Pokemon</Link>
        </div>
    </div>
  )
}

export default Navbar;
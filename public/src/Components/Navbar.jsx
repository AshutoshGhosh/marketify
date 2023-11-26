import React from 'react'
import '../App.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <h3>MARKETIFY</h3>
      </div>
      <div className="navbar-right">
        <ul>
          <li><h3>Home</h3></li>
          <li><h3>Products</h3></li>
          <li><h3>Contact</h3></li>
          <li><h3>About</h3>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar

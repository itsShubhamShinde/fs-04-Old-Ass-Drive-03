import React from 'react'
import './Nav.css'

const Navbar = () => {
  return (
    <div className='NavOuterDiv'>
        <div className="logoDiv">
            <h2>LOGO</h2>
        </div>
        <div className="menuDiv">
            <ul>
                <li className='home' style={{color:"black"}}>HOME</li>
                <li>ABOUT</li>
                <li>MENU</li>
                <li>ORDER</li>
                <li>CONTACT</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
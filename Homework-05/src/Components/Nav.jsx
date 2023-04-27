import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <div className='NavOuterDiv'>
        <div className="NameDiv">
            <h2>Koding Made Simple</h2>
        </div>
        <div className="buttonDiv">
            <button style={{backgroundColor:"#aa0000"}}>Bootstrap</button>
            <button>Themes</button>
            <button>Blog</button>
        </div>

    </div>
  )
}

export default Nav
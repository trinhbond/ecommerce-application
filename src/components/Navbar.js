import React from 'react'
import '../scss/navbar.scss'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return ( 
    <div className='navbar-wrapper'>
        <nav className='navbar'>
            <ul className='options'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/pages/browse'>Browse</Link>
                </li>
                <li>
                    <Link to='/pages/contact'>Contact</Link>
                </li>
                <li>
                    <input className='search-bar' type='text' placeholder='Search...' />
                </li>
            </ul>
        </nav>
    </div>
  )
}

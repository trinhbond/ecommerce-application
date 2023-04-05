import React from 'react'
import '../scss/navbar.scss'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return ( 
    <div className='navbar-wrapper'>
        <nav className='navbar'>
            <ul className='options'>
                <li>
                    <NavLink 
                        to='/'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/pages/products'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Products
                </NavLink>
                </li>
                <li>
                    <NavLink to='/pages/company'                        
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Company
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/pages/contact'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Contact
                    </NavLink>
                </li>
                <li>
                    <input className='search-bar' type='text' placeholder='Search...' />
                </li>
            </ul>
        </nav>
    </div>
  )
}

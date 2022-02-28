import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

function Nav() {
    return (

        <div className='navBar'>
            <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                about
            </NavLink>
            <NavLink to='/portfolio' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                portfolio
            </NavLink>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'inactive')} id='siteName'>
                hilary purrington
            </NavLink>
            <NavLink to='/resume' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                resume
            </NavLink>
            <NavLink to='/contact' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                contact
            </NavLink>
        </div>
    )
}

export default Nav;
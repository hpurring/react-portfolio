import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

function Nav() {
    return (
        
        <div className='navBar'>
            <NavLink to='/react-portfolio' className={({ isActive }) => (isActive ? 'active' : 'inactive')} id='siteName'>
                hilary purrington
            </NavLink>
            {/* <NavLink to='/react-portfolio#bio-container' href='bio-container' className='inactive'>
                about
            </NavLink> */}
            {/* <a className='inactive' href='#bio-container'>about</a> */}
            <NavLink to='/portfolio' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                my recent projects
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
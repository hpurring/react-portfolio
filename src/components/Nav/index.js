import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    <div className='navBar'>
        <NavLink to='/about' className='nav' activeClassName='nav-selected'>
            about
        </NavLink>
        <NavLink to='/portfolio' className='nav' activeClassName='nav-selected'>
            portfolio
        </NavLink>
        <NavLink to='/resume' className='nav' activeClassName='nav-selected'>
            resume
        </NavLink>
        <NavLink to='/contact' className='nav' activeClassName='nav-selected'>
            contact
        </NavLink>
    </div>
}

export default Nav;
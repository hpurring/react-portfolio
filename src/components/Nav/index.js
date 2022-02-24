import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

function Nav() {
    return (

        <div className='navBar'>
            <NavLink to='/about' className='nav' activeClassName='nav-selected'>
                about
            </NavLink>
            <NavLink to='/portfolio' className='nav' activeClassName='nav-selected'>
                portfolio
            </NavLink>
            <NavLink className='nav' id='siteName' activeClassName='nav-selected' to='/'>hilary purrington
            {/* <br />
            <span id='subtitle'>full-stack developer</span> */}
            </NavLink>
            <NavLink to='/resume' className='nav' activeClassName='nav-selected'>
                resume
            </NavLink>
            <NavLink to='/contact' className='nav' activeClassName='nav-selected'>
                contact
            </NavLink>
        </div>
    )
}

export default Nav;
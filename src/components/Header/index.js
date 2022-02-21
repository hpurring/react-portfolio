import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

import Nav from '../Nav';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Resume from '../Resume';

function Header() {
    return (
        <HashRouter> Hello
            <Nav>Hello</Nav>
            <Routes>
                <Route exact path='/'>
                    <Navigate to='/about' />
                </Route>
                <Route path="/about">
                    <About></About>
                </Route>
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
                <Route path="/resume" component={Resume} />
            </Routes>
        </HashRouter>
    )
}

export default Header;
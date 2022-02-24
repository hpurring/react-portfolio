import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './header.css';

import Nav from '../Nav';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Resume from '../Resume';

function Header() {
    return (
        <Router> 
            <Nav></Nav>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </Router>
    )
}

export default Header;
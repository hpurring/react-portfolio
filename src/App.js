import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

function App() {
  const [pages] = useState([
    {name: 'about'},
    {name: 'portfolio'},
    {name: 'contact'},
    {name: 'resume'}
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Nav>
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      </Nav>
      <main>
        <About></About>
        <Portfolio></Portfolio>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

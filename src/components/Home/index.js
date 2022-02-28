import React from 'react';
import './home.css';

function Home() {
    return (
        <div className='homepage'>
            <img src={require("../../assets/photos/Purrington-headshot2.jpg")} alt="Hilary Purrington" className='homepage-headshot'/>
            <div className='home-container'>
                <h1 className='home-header'></h1>
            </div>
        </div>
    )
}

export default Home;
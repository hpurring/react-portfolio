import React from 'react';
import './about.css';

function About() {
    return (
        <section className='bio'>
            <div className='bio-photo'>
                <div className='title-content'>
                    <h1 id='about'>about me</h1>
                    <a className='bio-content'>Hi there! I'm a full-stack developer with a background in classical music and non-profit fundraising. Originally from western Massachusetts, I lived in New York City for a number of years and recently relocated to Durham, North Carolina. In addition to pursuing my work as a software developer, I continue to freelance as a classical composer specializing in concert music. At its core, composing is creative problem solving—not unlike coding. My musical training has meaningfully supported my development as a software engineer. 
                    <br></br>
                    <br></br>
                    I received a bachelor's degree from the Shepherd School of Music at Rice University, master's degrees from The Juilliard School and Yale University, and I'm currently completing a coding certificate at Columbia University's School of Engineering.</a>
                    <br></br>
                    <br></br>
                    <a>Check out my music work <a href="http://hilarypurrington.com/index.html">here.</a></a>
                </div>
                <img className='bio-headshot' src={require("../../assets/photos/Purrington-headshot.jpg")} alt="COV-FIT screenshot"/>
            </div>
        </section>
    );
}

export default About;

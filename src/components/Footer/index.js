import React from 'react';
import './footer.css'

function Footer() {
    return (
        <section id='footer'>
            <div className='home-buttons'>    
                <a className='home-btn' href="https://github.com/hpurring" target="_blank"><img src={require("../../assets/photos/github.png")} alt="Github link" /></a>
                <a className='home-btn' href="https://www.linkedin.com/in/hilarypurrington/" target="_blank"><img src={require("../../assets/photos/linkedin.svg.png")} alt="LinkedIn link"/></a>
                <a className='home-btn' href="mailto:hilarypurrington@gmail.com" target="_blank"><img src={require("../../assets/photos/envelope.svg.png")} alt="email link"/></a>
                <a className='home-btn' href="https://www.instagram.com/hilarypurrington/" target="_blank"><img src={require("../../assets/photos/instagram.png")} alt="Instagram link"/></a>
            </div>
            {/* <div id='copyright'>
            ©2022 by Hilary Purrington. All rights reserved.
            </div> */}
        </section>

    );
}

export default Footer;
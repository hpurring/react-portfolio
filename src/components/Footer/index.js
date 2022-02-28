import React from 'react';
import './footer.css'

function Footer() {
    return (
        <section id='footer'>
            <div className='home-buttons'>
                <a className='home-btn' href="https://github.com/hpurring" target="_blank">github</a>
                <a className='home-btn' href="https://www.linkedin.com/in/hilarypurrington/" target="_blank">linkedin</a>
                <a className='home-btn' href="mailto:hilarypurrington@gmail.com" target="_blank">email</a>
                <a className='home-btn' href="https://www.instagram.com/hilarypurrington/" target="_blank">instagram</a>
            </div>
            <div id='copyright'>
            ©2022 by Hilary Purrington. All rights reserved.
            </div>
        </section>

    );
}

export default Footer;
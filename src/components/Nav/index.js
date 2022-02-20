import React from 'react';

function Nav(props) {

    return (
        <header>
            <h2>
                <a>
                    hilary purrington
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <a href='#about'>about me</a>
                    </li>
                    <li className='mx-2'>
                       <a href='#portfolio'>portfolio</a>
                    </li>
                    <li className='mx-2'>
                       <a href='#contact'>contact</a>
                    </li>
                    <li className='mx-2'>
                        <a href='#resume'>resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;
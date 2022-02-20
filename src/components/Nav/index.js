import React, {useEffect } from 'react';

function Nav(props) {
    useEffect(() => {
        document.title = currentPage.name;
    }, [currentPage]);

    const {
        pages =[],
        setCurrentPage,
        currentPage
    } = props;

    return (
        <header>
            <h2>
                <a>
                    hilary purrington
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    {pages.map((page) => (
                        <li
                            className={`mx-1 ${currentPage.name === page.name && 'navActive'}`}
                            key={page.name}
                        >
                            <span onClick={() => {setCurrentPage(page)}}
                            ></span>
                        </li>
                    ))}

                    {/* <li className='mx-2' onClick={categorySelected}>
                        <a href='#about'>about me</a>
                    </li>
                    <li className='mx-2' onClick={categorySelected}>
                       <a href='#portfolio'>portfolio</a>
                    </li>
                    <li className='mx-2' onClick={categorySelected}>
                       <a href='#contact'>contact</a>
                    </li>
                    <li className='mx-2' onClick={categorySelected}>
                        <a href='#resume'>resume</a>
                    </li> */}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;
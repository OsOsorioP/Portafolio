import React, { useState } from 'react';

export const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <nav>
                <h3 class="logo">Oscar Osorio Dev</h3>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li>
                        <svg onClick={() => setMenuOpen(true)} xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="mobile-menu">
                            <path d="M4 6l16 0"></path>
                            <path d="M4 12l16 0"></path>
                            <path d="M4 18l16 0"></path>
                        </svg>
                    </li>
                </ul>
            </nav>

            <div className={menuOpen ? "mobile-nav open-menu" : "mobile-nav closed-menu"}>
                <span onClick={() => setMenuOpen(false)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                </svg></span>
                <ul className='font-semibold'>
                    <li>
                        <a href='#home' onClick={() => setMenuOpen(false)}>Home</a>
                    </li>
                    <li>
                        <a href='#about' onClick={() => setMenuOpen(false)}>About</a>
                    </li>
                    <li>
                        <a href='#projects' onClick={() => setMenuOpen(false)}>Projects</a>
                    </li>
                    <li>
                        <a href='#contact' onClick={() => setMenuOpen(false)}>Contact</a>
                    </li>
                    <li>
                        <a href='Hojadevida.pdf'  target="_blank" ><i class="fa-solid fa-file"></i></a>
                    </li>
                </ul>
            </div>
        </>

    )
}

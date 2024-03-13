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
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
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
        </>

    )
}

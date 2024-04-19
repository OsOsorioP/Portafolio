import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menu = () => {
        window.scrollTo(0, 0)
        setMenuOpen(false)
    }

    return (
        <>
            <nav>
                <div class="logo">
                    <div class="nav-img"></div>
                    <h3 class="name"><Link to="/" onClick={() => window.scrollTo(0, 0)}>Oscar Osorio</Link></h3>
                </div>
                <ul>
                    <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>Sobre mi</Link></li>
                    <li><Link to="/proyectos" onClick={() => window.scrollTo(0, 0)}>Proyectos</Link></li>
                    <li><Link to="/contacto" onClick={() => window.scrollTo(0, 0)}>Contacto</Link></li>
                    <li><Link to="src/assets/cv.pdf" target='_blanck' onClick={() => window.scrollTo(0, 0)}>CV</Link></li>
                </ul>
                <svg onClick={() => setMenuOpen(true)} xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    class="mobile-menu">
                    <path d="M4 6l16 0"></path>
                    <path d="M4 12l16 0"></path>
                    <path d="M4 18l16 0"></path>
                </svg>
            </nav>

            <div className={menuOpen ? "mobile-nav open-menu" : "mobile-nav closed-menu"}>
                <div class="close">
                    <svg onClick={() => setMenuOpen(false)} xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                        viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                    </svg>
                    <ul className='font-semibold'>
                        <li>
                            <Link to="/" onClick={() => menu()}>Sobre mi</Link>
                        </li>
                        <li>
                            <Link to="/proyectos" onClick={() => menu()}>Proyectos</Link>
                        </li>
                        <li>
                            <Link to="/contacto" onClick={() => menu()}>Contacto</Link>
                        </li>
                        <li>
                            <Link to="src/assets/cv.pdf" onClick={() => menu()}>CV</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>

    )
}

import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

function Header() {
    let location = useLocation()

    return (
        <header className="header">
            <img src="/logo.png" alt="logo de l'agence Kaza" />
            <nav className="navbar">
                <ul>
                    <li className="police">
                        <NavLink
                            to="/"
                            className={() =>
                                location.pathname === '/' ? 'nav-active' : ''
                            }
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li className="police">
                        <NavLink
                            to="/about"
                            className={() =>
                                location.pathname === '/about'
                                    ? 'nav-active'
                                    : ''
                            }
                        >
                            À Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header

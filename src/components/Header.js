import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className="header">
            <img src="/logo.png" alt="logo de l'agence Kaza" />
            <nav className="navbar">
                <ul>
                    <li>
                        <NavLink to="/" exact>
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">À Propos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
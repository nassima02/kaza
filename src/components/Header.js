import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className="header">
            <img src="/logo.png" alt="logo de l'agence Kaza" />
            <nav className="navbar">
                <ul>
                    <li className="police">
                        <NavLink
                            to="/"
                            exact
                            className={(nav) =>
                                nav.isActive ? 'nav-active' : ''
                            }
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li className="police">
                        <NavLink
                            to="/about"
                            className={(nav) =>
                                nav.isActive ? 'nav-active' : ''
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

import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './header-style.scss'
function Header() {
    let location = useLocation() //location contient l'objet représentant l'emplacement actuel de l'application dans l'URL

    return (
        <header className="header">
            <img
                className="header__image"
                src="/logo.png"
                alt="logo de l'agence Kaza"
            />
            <nav>
                <ul className="header__list">
                    <li className="police">
                        <NavLink
                            to="/"
                            className={() =>
                                location.pathname === '/'
                                    ? 'header__link header__link--active' // surligne le lien de navigation de la page active
                                    : 'header__link'
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
                                    ? 'header__link header__link--active'
                                    : 'header__link'
                            }
                        >
                            A Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header

import React from 'react'
import { NavLink } from 'react-router-dom'

function Error() {
    return (
        <div className="error404">
            <img className="error404__image" src="/404.png" alt="erreur 404" />
            <p className="police police__error">
                Oups! La page que vous demandez n'existe pas.
            </p>
            <div className="error404__link">
                <NavLink to="/" className=" police police--nav">
                    Retourner sur la page d’accueil
                </NavLink>
            </div>
        </div>
    )
}

export default Error

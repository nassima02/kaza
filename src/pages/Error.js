import React from 'react'
//import Template from '../components/Template'
import { NavLink } from 'react-router-dom'

function Error() {
    return (
        <div>
            <img className="img404" src="/404.png" alt="erreur 404" />
            <p className=" police police-error">
                Oups! La page que vous demandez n'existe pas.
            </p>
            <div className="error">
                <NavLink to="/" className="police police-nav">
                    Retourner sur la page d’accueil
                </NavLink>
            </div>
        </div>
    )
}

export default Error

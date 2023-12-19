import React, { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.css'
import './accordion-style.sass'

const Accordion = (props) => {
    const [isActive, setIsActive] = useState(false) // Utilisation du hook d'état pour gérer l'état de l'accordéon (ouvert ou fermé)

    const toggleAccordion = () => {
        // Fonction pour basculer l'état de l'accordéon
        setIsActive(!isActive)
    }
    // Définition de la classe CSS dynamique en fonction de l'état de l'accordéon
    const contentClassName = `accordion__content police ${
        isActive
            ? 'accordion__content--open-text'
            : 'accordion__content--close-text'
    }`

    // Rendu du composant accordion
    return (
        <div className="accordion">
            <div className="accordion__title">
                <p className="police police--accordion">{props.title}</p>
                {/* Affichage du titre fourni en tant que propriété */}
                <i
                    className={`fa-solid fa-chevron-up arrow  ${
                        isActive ? 'arrow__rotate' : ''
                    }`}
                    onClick={toggleAccordion}
                ></i>
            </div>
            <div
                className={`accordion__content__wrapper ${
                    isActive ? 'accordion__content__wrapper--open-wrapper ' : ''
                }`}
            >
                <div className={contentClassName}>{props.description}</div>

                <div className={contentClassName}>
                    {props.equipements ? (
                        <ul>
                            {props.equipements.map((equipement, index) => (
                                <li key={index}>{equipement}</li>
                            ))}
                        </ul>
                    ) : null}
                </div>
            </div>
        </div>
    )
}
export default Accordion

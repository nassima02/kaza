//import React, { useState } from 'react'
//import Template from '../components/Template'
import Banner from '../components/Banner'
import '../assets/styles.scss' // Import du fichier CSS
import Accordion from '../components/Accordion'

function About() {
    return (
        <div className="home">
            <Banner
                title=""
                src="/bannerApropos.png"
                alt="Image de bannière représentant une vue sur les montagnes"
            />

            <section>
                <Accordion
                    title="Fiabilité"
                    description="Les annonces postées sur Kasa garantissent une fiabilité
                    totale. Les photos sont conformes aux logements, et toutes les informations
                     sont régulièrement vérifiées par nos équipes. "
                />
                <Accordion
                    title="Respect"
                    description="La bienveillance fait partie des valeurs
                fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage
                 entrianera une exclusion de notre plateforme."
                />
                <Accordion
                    title="Service"
                    description="La bienveillance fait partie des valeurs
                fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage
                 entrianera une exclusion de notre plateforme."
                />
                <Accordion
                    title="Securité"
                    description="La sécurité est la priorité de Kasa. Aussi bien
                 pour nos hôtes que pour les voyageur, chaque logement correspond aux critères de sécurité
                 établis par nos services. En laissant une note aussi bien à l'hôte qu'au locatire, cela
                 permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
                  également des ateliers sur la sécurité domestique pour nos hôtes."
                />
            </section>
        </div>
    )
}

export default About

import { useLoaderData } from 'react-router-dom'
import Carousel from '../fiche-logement-components/carousel/carousel'
import Accordion from '../../../../features/shared-components/accordion/accordion'
import Tag from '../fiche-logement-components/tag/tag'
import Owner from '../fiche-logement-components/owner/owner'
import Stars from '../fiche-logement-components/stars/stars'
import React from 'react'

function FicheLogement() {
    const { logement } = useLoaderData() // Récupération des données du logement à partir du hook useLoaderData

    return (
        <div className="fiche-logement">
            <Carousel images={logement.pictures} />
            <div className="fiche-containt">
                {/* Informations de base sur le logement (titre et emplacement) */}
                <div className="infos">
                    <div>
                        <h1 className="police police__title">
                            {logement.title}
                        </h1>
                        <p className="police police__p">{logement.location}</p>
                    </div>

                    <div className="tagList">
                        {logement.tags.map((tag, index) => (
                            <Tag key={tag} label={tag}></Tag>
                        ))}
                    </div>
                </div>
                {/* Informations sur le propriétaire et la note en étoiles */}
                <div className="owner-and-stars">
                    <Owner host={logement.host} />

                    <div className="fiche-rating">
                        {[...Array(5)].map((_, index) => (
                            <Stars
                                key={index}
                                index={index}
                                star={logement.rating}
                            />
                        ))}
                    </div>
                </div>
            </div>
            {/* Sections pour la description et liste des équipements du logement*/}
            <div className="colaps">
                <div>
                    <Accordion title="Description">
                        <>{logement.description}</>
                    </Accordion>
                </div>
                <div>
                    <Accordion title="Equipements">
                        <>
                            {logement.equipments ? (
                                <ul>
                                    {logement.equipments.map(
                                        (equipement, index) => (
                                            <li key={index}>{equipement}</li>
                                        )
                                    )}
                                </ul>
                            ) : null}
                        </>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default FicheLogement

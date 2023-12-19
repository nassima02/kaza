import { useLoaderData } from 'react-router-dom'
import Carousel from '../components/carousel/carousel'
import Accordion from '../components/accordion/accordion'
import Tag from '../components/tag/tag'
import Owner from '../components/owner/owner'
import Stars from '../components/stars/stars'

function FicheLogement() {
    const { logement } = useLoaderData()

    return (
        <div className="fiche-logement">
            <Carousel images={logement.pictures} />
            <div className="fiche-containt">
                <div className="infos">
                    <div>
                        <h1 className="police police__title">
                            {logement.title}{' '}
                        </h1>
                        <p className="police police__p">{logement.location}</p>
                    </div>

                    <div className="tagList">
                        {logement.tags.map((tag, index) => (
                            <Tag key={tag} label={tag}></Tag>
                        ))}
                    </div>
                </div>
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
            <div className="colaps">
                <div>
                    <Accordion
                        title="Description"
                        description={logement.description}
                    />
                </div>
                <div>
                    <Accordion
                        title="Equipements"
                        equipements={logement.equipments}
                    />
                </div>
            </div>
        </div>
    )
}

export default FicheLogement

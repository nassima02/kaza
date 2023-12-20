import Banner from '../../../features/shared-components/banner/banner'
import '../../style-pages/styles.sass' // Import du fichier CSS
import Accordion from '../../../features/shared-components/accordion/accordion'

function About() {
    return (
        <div className="page">
            <Banner
                title=""
                src="/bannerApropos.png"
                alt="Image de bannière représentant une vue sur les montagnes"
            />

            <section className="page__about">
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
                    title="Sécurité"
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

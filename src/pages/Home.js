import React from 'react'
import Template from '../components/Template'
import Card from '../components/Card'
import Banner from '../components/Banner'
import logementsData from '../data/logements.json'
function Home() {
    return (
        <Template>
            <div className="home">
                <Banner
                    title="Chez vous, partout et ailleurs"
                    src="/banner.png"
                    alt="Image de bannière représentant une vue sur les montagnes"
                />

                <section className="gallery">
                    {/* Utiliser map pour créer les composants de carte pour chaque élément de logementsData */}
                    {logementsData.map((logement) => (
                        <Card
                            key={logement.id}
                            title={logement.title}
                            imageUrl={logement.cover} // Utilisez la propriété cover pour l'image principale
                        />
                    ))}
                </section>
            </div>
        </Template>
    )
}

export default Home

import React from 'react'
import Card from '../components/card/card'
import Banner from '../components/banner/banner'
import { useLoaderData } from 'react-router-dom'

function Home() {
    const { logements } = useLoaderData()

    return (
        <div className="page">
            <Banner
                title="Chez vous, partout et ailleurs"
                src="/banner.png"
                alt="Image de bannière représentant une vue sur les montagnes"
            />

            <section className="page__home">
                {/* Utiliser map pour créer les composants de carte pour chaque élément de logementsData */}
                {logements.map((logement) => (
                    <Card
                        key={logement.id}
                        id={logement.id}
                        title={logement.title}
                        imageUrl={logement.cover} // la propriété cover pour l'image principale
                    />
                ))}
            </section>
        </div>
    )
}
export default Home

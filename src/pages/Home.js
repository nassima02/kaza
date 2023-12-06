import React from 'react'
import Template from '../components/Template'
import Card from '../components/Card'
import Banner from '../components/Banner'

function Home() {
    const galleryData = [
        { id: 1, title: 'Carte 1', imageUrl: '/image1.jpg' },
        { id: 2, title: 'Carte 2', imageUrl: '/image2.jpg' },
        { id: 3, title: 'Carte 3', imageUrl: '/image3.jpg' },
        { id: 4, title: 'Carte 4', imageUrl: '/image4.jpg' },
        { id: 5, title: 'Carte 5', imageUrl: '/image5.jpg' },
        { id: 6, title: 'Carte 6', imageUrl: '/image6.jpg' },
    ]

    return (
        <Template>
            <div className="home">
                <Banner
                    title="Chez vous, partout et ailleurs"
                    src="/banner.png"
                    alt="Image de bannière représentant une vue sur les montagnes"
                />

                <section className="gallery">
                    {/* Utiliser map pour créer les composants de carte pour chaque élément de galleryData */}
                    {galleryData.map((card) => (
                        <Card
                            key={card.id}
                            title={card.title}
                            imageUrl={card.imageUrl}
                        />
                    ))}
                </section>
            </div>
        </Template>
    )
}
export default Home

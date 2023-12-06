import React from 'react'
import Template from '../components/Template'
import Card from '../components/Card'
import Banner from '../components/Banner'
function About() {
    return (
        <Template>
            <div className="home">
                <Banner
                    title=""
                    src="/bannerApropos.png"
                    alt="Image de bannière représentant une vue sur les montagnes"
                />

                <section className="gallery"></section>
            </div>
        </Template>
    )
}

export default About

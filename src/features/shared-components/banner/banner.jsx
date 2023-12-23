import React, { useEffect, useState } from 'react'
import './banner-style.sass'

function Banner(props) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600)

    useEffect(() => {
        window.addEventListener('resize', updateSize)

        // néttoyage de l'effet
        return () => window.removeEventListener('resize', updateSize)
    }, [])

    function updateSize() {
        setIsMobile(window.innerWidth <= 600)
    }

    console.log('isMobile', isMobile)

    return (
        <div className="banner">
            <h1 className={`banner__title ${isMobile ? 'mobile' : ''}`}>
                <span>Chez vous, </span>
                {isMobile && <br />}
                <span>partout et ailleurs</span>
            </h1>
            <img className="banner__image" src={props.src} alt={props.alt} />
        </div>
    )
}
export default Banner

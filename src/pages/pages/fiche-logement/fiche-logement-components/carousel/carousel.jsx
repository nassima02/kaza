import React, { useState } from 'react'
import './carousel-style.sass'

function Carousel({ images }) {
    //images est un tableau d'URL d'images
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const lastIndex = images.length - 1 //lastIndex est le dernier index possible dans le tableau "images".

    const nextSlide = () => {
        const index =
            currentImageIndex === lastIndex ? 0 : currentImageIndex + 1
        setCurrentImageIndex(index)
    }

    const prevSlide = () => {
        const index =
            currentImageIndex === 0 ? lastIndex : currentImageIndex - 1
        setCurrentImageIndex(index)
    }
    // Rendu du composant carousel.
    return (
        <div className="carousel">
            <img
                className="carousel__image"
                src={images[currentImageIndex]}
                alt=""
            />
            {/* Affichage des boutons de navigation et du compteur uniquement si le nombre d'images est supérieur à 1 */}
            {images.length > 1 && (
                <>
                    <button
                        className="carousel__button carousel__button--prev"
                        onClick={prevSlide}
                    >
                        &#10094;
                    </button>
                    <button
                        className="carousel__button carousel__button--next"
                        onClick={nextSlide}
                    >
                        &#10095;
                    </button>
                    <div className="carousel__counter">
                        {currentImageIndex + 1}/{images.length}
                    </div>
                </>
            )}
        </div>
    )
}

export default Carousel

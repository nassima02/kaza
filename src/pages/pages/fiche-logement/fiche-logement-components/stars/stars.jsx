import React from 'react'
import './stars-style.sass'

function Stars({ star, index }) {
    return (
        <div>
            <img
                className={`star ${
                    index < parseInt(star) ? 'star__filled' : 'star__empty'
                }`}
                src={
                    // Chemin de l'image en fonction de la note
                    process.env.PUBLIC_URL +
                    (index < parseInt(star)
                        ? '/starFilled.png'
                        : '/starEmpty.png')
                }
                alt="star"
                key={index}
            />
        </div>
    )
}

export default Stars

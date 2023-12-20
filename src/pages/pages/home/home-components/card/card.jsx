import React from 'react'
import { useNavigate } from 'react-router-dom'
import './card-style.sass'
function Card({ id, title, imageUrl }) {
    const navigate = useNavigate()
    const handleCardClick = () => {
        navigate(`/ficheLogement/${id}`)
    }

    return (
        <div className="card police" onClick={handleCardClick}>
            <img
                className="card__image"
                src={imageUrl}
                alt={`Image de ${title}`}
            />
            <h2 className="card__title">{title}</h2>
        </div>
    )
}

export default Card

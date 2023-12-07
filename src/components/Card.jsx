import React from 'react'

function Card({ title, imageUrl }) {
    return (
        <div className="card police police-card">
            <img src={imageUrl} alt={`Image de ${title}`} />
            <h3>{title}</h3>
        </div>
    )
}

export default Card

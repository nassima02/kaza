import React from 'react'
import './stars-style.scss'

function Stars({ star, index }) {
    return (
        <div>
            <img
                className={`star ${
                    index < parseInt(star) ? 'star-filled' : 'star-empty'
                }`}
                src={
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

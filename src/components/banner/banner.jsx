import React from 'react'
import './banner-style.sass'

function Banner(props) {
    return (
        <div className="banner">
            <h1 className="banner__title">{props.title}</h1>
            <img className="banner__image" src={props.src} alt={props.alt} />
        </div>
    )
}
export default Banner

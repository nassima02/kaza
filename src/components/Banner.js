import React from 'react'

function Banner(props) {
    return (
        <div className="banner">
            <h1 className="police police-banner">{props.title}</h1>
            <img src={props.src} alt={props.alt} />
        </div>
    )
}

export default Banner

import React, { useState } from 'react'
//import './styles.scss' // Assurez-vous de créer un fichier CSS (Accordion.css) pour les styles.
import '@fortawesome/fontawesome-free/css/all.css'
// const Accordion = (props) => {
//     const [isActive, setIsActive] = useState(false)
//
//     const toggleAccordion = () => {
//         setIsActive(!isActive)
//     }
//
//     return (
//         <div className="accordion">
//             <div className="accordion-title" onClick={toggleAccordion}>
//                 <h2 className="police">{props.title}</h2>
//                 <i
//                     className={`fa-solid fa-chevron-up arrow ${
//                         isActive ? 'rotate' : ''
//                     }`}
//                 ></i>
//             </div>
//             {isActive && (
//                 <div
//                     className={`accordion-content-wrapper ${
//                         isActive ? 'open-wrapper' : ''
//                     }`}
//                 >
//                     <p
//                         className={`accordion-content police ${
//                             isActive ? 'open-text' : 'close-text'
//                         }`}
//                     >
//                         {props.description}
//                     </p>
//                 </div>
//             )}
//         </div>
//     )
// }
// export default Accordion
const Accordion = (props) => {
    const [isActive, setIsActive] = useState(false)

    const toggleAccordion = () => {
        setIsActive(!isActive)
    }

    return (
        <div className={`accordion ${isActive ? 'open' : ''}`}>
            <div className="accordion-title" onClick={toggleAccordion}>
                <h2 className="police">{props.title}</h2>
                <i
                    className={`fa-solid fa-chevron-up arrow ${
                        isActive ? 'rotate' : ''
                    }`}
                ></i>
            </div>
            <div
                className={`accordion-content-wrapper ${
                    isActive ? 'open-wrapper' : ''
                }`}
            >
                <p
                    className={`accordion-content police ${
                        isActive ? 'open-text' : ''
                    }`}
                >
                    {props.description}
                </p>
            </div>
        </div>
    )
}

export default Accordion

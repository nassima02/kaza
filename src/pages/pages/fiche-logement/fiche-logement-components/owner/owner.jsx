import React from 'react'
import './owner-style.sass'

function Owner({ host }) {
    // Extraction du prénom et du nom du propriétaire à partir de la chaîne de nom complète
    const { ownerFirstName, ownerLastName } = extractOwnerFirstAndLastName()

    function extractOwnerFirstAndLastName() {
        // Diviser la chaîne de nom complet en un tableau de mots
        const owner = host.name.split(' ')

        return {
            ownerFirstName: owner.shift(), // Prend le premier élément (prénom)
            ownerLastName: owner.join(' '), // Joindre le reste pour obtenir le nom de famille
        }
    }

    return (
        <div className="host police police__p">
            <div className="owner-first-last-name">
                <div>{ownerFirstName}</div>
                <div>{ownerLastName}</div>
            </div>

            <img src={host.picture} alt="Host profile" />
        </div>
    )
}

export default Owner

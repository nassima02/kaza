import React from 'react'
import './owner-style.scss'

function Owner({ host }) {
    const { ownerFirstName, ownerLastName } = extractOwnerFirstAndLastName()

    function extractOwnerFirstAndLastName() {
        const owner = host.name.split(' ')

        return {
            ownerFirstName: owner.shift(),
            ownerLastName: owner.join(' '),
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

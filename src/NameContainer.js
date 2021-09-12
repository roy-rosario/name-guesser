import React from 'react'

function NameContainer(props){
    return(
        <div className = "name-container">
                <h2 className = 'cell one'>Name:<br/> {props.nameInfo.name}</h2>
                <h2 className = 'cell two'>Gender: <br/> {props.nameInfo.gender}</h2>
                <h2 className = 'cell'>probability: <br/> {props.nameInfo.probability}</h2>
            </div>
    )
}

export default NameContainer
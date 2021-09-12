import React, {useState}from 'react'

function NameLogic(){

    const [ nameInfo, setNameInfo] = useState(
        {
            name: "",
            gender: "",
            probability: ""
        })

    async function getData(){    
        
        try{
            const res = await fetch(`https://api.genderize.io?name=${nameInfo.name}`)
            const data = await res.json() 
            setNameInfo({
            name: data.name,
            gender: data.gender,
            probability: data.probability
            })
        }catch(err){
            console.error(err)
        }
    }
    
    return(
        <div className = "container">
        <h1>Name Checker</h1>
        <button onClick = {getData}>click for info</button>
        {/* <form className = "form">
            <input 
                type = 'text' 
                name = "nameInput"
                value = {nameInput} />
        </form> */}
        </div>
    )
}

export default NameLogic
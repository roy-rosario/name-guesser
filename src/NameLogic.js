import React, {useState}from 'react'
import NameContainer from './NameContainer'


function NameLogic(){

    const [nameInput, setNameInput] = useState("")

    const [ nameInfo, setNameInfo] = useState(
        {
            name: "",
            gender: "",
            probability: ""
        })

    async function getData(e){    
        e.preventDefault()
        try{
            const res = await fetch(`https://api.genderize.io?name=${nameInput}`)
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
        <div className = "container" >
            <h1>Name Checker</h1>
            <NameContainer nameInfo={nameInfo} />
            
            <form className = "form" onSubmit = {getData}>
                <input 
                    type = 'text' 
                    placeholder = "type name here"
                    name = "nameInput"
                    value = {nameInput} 
                    onChange = {e =>{
                        
                        setNameInput(e.target.value)
                    }}
                    />
                    <button >Search</button>
            </form>
        
        </div>
    )
}

export default NameLogic
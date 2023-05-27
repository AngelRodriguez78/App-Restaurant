import React, { useState } from 'react'
import "./style/form.css"
import { createItem } from '../firebase/manage'

const Form = () => {
    const [nombre, setNombre] = useState("")
    const handleSubmit = (event)=>{
        event.preventDefault()
        createItem({nombre})
    }
    return (
        <div className='container'>
            <form>
                <label>Nombre</label>
                <input type="text" onChange={(event)=>setNombre(event.target.value)}></input>
                <button type='submit' onClick={handleSubmit} className='bform'>Enviar</button>
            </form>
            <p>{nombre}</p>
        </div>
    )
}

export default Form


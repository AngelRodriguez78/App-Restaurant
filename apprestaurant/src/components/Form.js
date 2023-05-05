import React, { useState } from 'react'


const Form = () => {
    const [nombre, setNombre] = useState("")
    return (
        <div>
            <form>
                <label>Nombre</label>
                <input type="text" onChange={(event)=>setNombre(event.target.value)}></input>
                <button>Enviar</button>
            </form>
            <p>{nombre}</p>
        </div>
    )
}

export default Form
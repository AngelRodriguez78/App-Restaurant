import React, { useState } from 'react'
import "./style/menu.css"

const Menu = () => {
    const [state, setState] = useState(0)
    return (
        <div className='container'>
            <body>
            <p>Numero de Personas</p>
            <button className='boton' onClick={() => setState(state + 1)}><span></span>
                Agregar Persona +1
                <span></span></button>
            {state}
            </body>
        </div>
    )
}

export default Menu
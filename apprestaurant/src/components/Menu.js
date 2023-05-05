import React,{useState} from 'react'

const Menu = () => {
    const[state, setState]=useState(0)
  return (
    <div><button onClick={()=>setState(state+1)}>+1</button>
    {state}
    </div>
    )
}

export default Menu
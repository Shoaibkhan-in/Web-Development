import React from 'react'
import Component1 from './Component1'
import { counterContext } from '../context/Context'
import { useContext } from 'react'
const Button = () => {
    const Value= useContext(counterContext)
    return (
        <div>
            <button onClick={()=>Value.setCount((count)=>count+1)}><span><Component1 />I am a button</span></button>
        </div>
    )
}

export default Button

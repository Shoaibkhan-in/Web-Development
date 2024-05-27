import React from 'react'
import { memo } from 'react';
const Navbar = ({adjective, getAdjective}) => {
    console.log("navbar is rendered");
    return (
        <div>
            I am A {adjective}Navbar
            <button onClick={()=>{getAdjective()}}>hello{getAdjective()}</button>
        </div>
    )
}

export default memo(Navbar)

import React, { useEffect, useState } from 'react'

const Navbar = ({ color }) => {
    //case 1: Run on every render 
    useEffect(() => {
        alert("Hey I will run on every render ")
    })
    //case 2: Run only on first render 
    useEffect(() => {
        alert("hey welcome to my page. this is the first render ")
    }, [])
    //case 3: run only when certain value is changed
    useEffect(() => {
        alert(`color is ${color}`)
    }, [color])

    //example of cleanup function 
    useEffect(() => {
        alert("hey welcome to my page this is first render of app.jsx")
        return () => {
            alert("component is unmounted ")
        }
    }, [])

    return (
        <div>
            i am navbar of {color} color hehe..
        </div>
    )
}

export default Navbar

import React from 'react'
import Footer from './Footer'
const Navbar = ({logoText}) => {
    return (
        <div>
            <div className="logo">{logoText}</div>
            <ul>
                <li>home</li>
                <li>about</li>
                <li>contact us</li>
                <Footer />
            </ul>
        </div>
    )
}

export default Navbar

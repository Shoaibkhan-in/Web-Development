import React from 'react'
import "./Cards.css"
const Cards = (props) => {
    return (
        <div className="card">
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&psig=AOvVaw1IUNDa_OMGyfZxweJ8x8ul&ust=1715786277696000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOCWiom4jYYDFQAAAAAdAAAAABAE" alt="" width="250" style={{border:"2px solid black"}}/>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default Cards

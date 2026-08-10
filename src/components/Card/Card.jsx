import React from 'react'
import './Card.css'
import book from '../../assets/book.svg'

const card = ({data}) => {
    const {titulo, autor, id, leido} = data
  return (
    <div className= {leido ? "cardContainer" : "cardContainer-no-leido"}>
            <h2>{autor}</h2>
        <ul>
            <li><p>{titulo}</p></li>
            <li>{leido ? <h5>Leído</h5> : <h5>No leído</h5> }</li>
        </ul>
    </div>
  )
}

export default card
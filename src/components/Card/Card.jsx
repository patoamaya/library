import React from 'react'
import './Card.css'
import book from '../../assets/book.svg'

const card = ({data}) => {
    const {titulo, autor, id, leido} = data
  return (
    <div className= "cardContainer">
        <div className={leido ? "book-img-leido" : "book-img-no-leido"}>
        <img src= {book} alt=""/>
        </div>
        <ul>
            <li><h3>{autor}</h3></li>
            <li><p>{titulo}</p></li>
            <li>{leido ? <h5>Leído</h5> : <h5>No leído</h5> }</li>
        </ul>
    </div>
  )
}

export default card
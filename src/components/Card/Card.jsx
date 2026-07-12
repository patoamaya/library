import React from 'react'
import './Card.css'
import book from '../../assets/book.svg'

const card = ({data}) => {
    const {titulo, autor, id, leido} = data
  return (
    <div className= "cardContainer">
        <div className={leido ? "book-img-leido" : "book-img-no-leido"}>
        <img src= {book} alt="" />
        </div>
        <ul>
            <li><h3>Autor</h3> {autor}</li>
            <li><h3>Título</h3> {titulo}</li>
        </ul>
    </div>
  )
}

export default card
import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='headerContainer'>
      <h1>Biblioteca</h1>
      <div className="nav">
        <ul>
          <li>Todos</li>
          <li><input type="text" id='busqueda' placeholder='Buscar libro o autor' /></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
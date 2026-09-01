import './Card.css'
import {useState} from 'react'
import check from '../../assets/true.png'
import wrong from '../../assets/false.png'

const card = ({data}) => {
  
  const {titulo, autor, id, leido, sinopsis} = data
  const [seeMore, setSeeMore] = useState(false)
  return (
      <div className= "card-container-all" >
        {
          seeMore ?
          <div className="card-container">

          <ul className='ul-info'>
            <li><h3>{autor}</h3></li>
            <li><h4>{titulo}</h4></li>
            <li><p>{sinopsis}</p></li>
            <button onClick={()=> setSeeMore(!seeMore)} className='seeMore'>Volver</button>
          </ul>
          <ul className='ud-opts'>
            <li><button className='edit-btn'>Editar</button></li>
            <li><button className='delete-btn'>Eliminar</button></li>
          </ul>
          </div>
          :
          < div className="card-container">
          <ul className='ul-info'>
            <li><h3>{autor}</h3></li>
            <li><h4>{titulo}</h4></li>
            <li>{leido ? <h5>Leído <img src={check} alt="" className='true_false'/></h5> : <h5>No leído <img src={wrong} alt="" className='true_false' /></h5> }</li>
            <button onClick={()=> setSeeMore(!seeMore)} className='seeMore'>Sinopsis</button>
        </ul>
          <ul className='ud-opts'>
            <li><button className='edit-btn'>Editar</button></li>
            <li><button className='delete-btn'>Eliminar</button></li>
          </ul>
          </ div>
        }
    </div>
  )
}

export default card
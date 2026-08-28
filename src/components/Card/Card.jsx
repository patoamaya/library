import './Card.css'
import {useState} from 'react'
import check from '../../assets/true.png'
import wrong from '../../assets/false.png'

const card = ({data}) => {
  
  const {titulo, autor, id, leido, sinopsis} = data
  const [seeMore, setSeeMore] = useState(false)
  return (
      <div className= "cardContainer" >
        {
          seeMore ?
          <ul>
            <li><h3>{autor}</h3></li>
            <li><h4>{titulo}</h4></li>
            <li><p>{sinopsis}</p></li>
            <button onClick={()=> setSeeMore(!seeMore)}>Volver</button>
          </ul>
          :
          <ul>
            <li><h3>{autor}</h3></li>
            <li><h4>{titulo}</h4></li>
            <li>{leido ? <h5>Leído <img src={check} alt="" className='true_false'/></h5> : <h5>No leído <img src={wrong} alt="" className='true_false' /></h5> }</li>
            <button onClick={()=> setSeeMore(!seeMore)}>Sinopsis</button>
        </ul>
        }
    </div>
  )
}

export default card
import React from 'react'
import './Home.css'
import Card from '../Card/Card'
// import back from '../../assets/back.jpg'

const Home = ({filteredData}) => {
return(

  filteredData.length != 0 ? 
  <div className='homeContainer'>
    <div className="title">
      <h1>Resultado de la busqueda</h1>
    </div>
    <div className="list">
      {
        filteredData.map((data)=>
          <Card data={data} key={data.id}/>
      )
    }
    </div>
    </div>
  : 
  <div className="homeContainerEmpty">
    <div className="emptyContainer">
    <h1> Nada por aquí, nada por allí </h1>
    </div>
  </div>
  
    )
}

export default Home
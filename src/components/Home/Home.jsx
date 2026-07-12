import React from 'react'
import './Home.css'


const Home = ({allData, filteredData}) => {
return(

  filteredData.length != 0 ? 
  <div className='homeContainer'>
      <h1>todo</h1>
    </div>
  : 
  <div className="homeContainer">
    <h2>Nada aun</h2>
  </div>
  
    )
}

export default Home
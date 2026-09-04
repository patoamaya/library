import './Home.css'
import Card from '../card/card.jsx'
import cat from '../../assets/cat.png'
const Home = ({filteredData}) => {
return(
  filteredData.length != 0 ? 
  <div className="homeContainerAll">

  <div className='homeContainer'>
    <div className="list">
      {
        filteredData.map((data)=>
          <Card data={data} key={data.id}/>
      )
    }
    </div>
    <div className="title">
      <h1>{`${filteredData.length} resultados`}</h1>
    </div>
  </div>
  </div>
  : 
  <div className="homeContainerEmpty">
    <div className="emptyContainer">
      <h1> Nada por aquí, nada por allí </h1>
      <img src={cat} alt="" />
    </div>
  </div>
  
    )
}

export default Home
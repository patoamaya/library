import { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import Home from './Home'

const HomeContainer = () => {
  const {allData, filteredData} = useContext(DataContext)
 
  return (
    <div>
      <Home filteredData={filteredData}/>
    </div>
  )
}

export default HomeContainer
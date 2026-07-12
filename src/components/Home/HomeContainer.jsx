import { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import Home from './Home'

const HomeContainer = () => {
  const {allData, filteredData} = useContext(DataContext)
 
  return (
    <div>
      <Home allData={allData} filteredData={filteredData}/>
    </div>
  )
}

export default HomeContainer
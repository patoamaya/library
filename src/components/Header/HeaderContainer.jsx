import Header from './Header'
import { DataContext } from '../../context/DataContext'
import { useContext } from 'react'


const HeaderContainer = () => {
  const {searchData} = useContext(DataContext)

  return (
    <div>
      <Header searchData={searchData}/>
    </div>
  )
}

export default HeaderContainer
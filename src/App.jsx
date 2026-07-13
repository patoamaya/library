import './App.css'
// import FooterContainer from './components/Footer/FooterContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import HomeContainer from './components/Home/HomeContainer'
import DataContextProvider from './context/DataContext'

function App() {

  return (
    <div>
      <DataContextProvider>
      <HeaderContainer/>
      <HomeContainer/>
      {/* <FooterContainer/> */}
      </DataContextProvider>
    </div>
  )
}

export default App

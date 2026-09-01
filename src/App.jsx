import './App.css'
import CreateEditContainer from './components/CreateEdit/CreateEditContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import HomeContainer from './components/Home/HomeContainer'
import DataContextProvider from './context/DataContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
   <div>
      <BrowserRouter>
        <DataContextProvider> 
          <HeaderContainer/>
            <Routes>
              <Route path='/' element={<HomeContainer />} />
              <Route path='/new' element={<CreateEditContainer />} />
              <Route path='/:id?' element={<CreateEditContainer />} />
            </Routes>
        </DataContextProvider> 
      </BrowserRouter>
    </div>
  )
}

export default App

import './Header.css'

const Header = ({searchData}) => {
  return (
    <div className='headerContainer'>
      <div className="nav">
        <ul>
          <li>
            <button className='add-btn'>
              Agregar
            </button>
          </li>
          <li>
            <form action="" onSubmit={searchData}>
              <input type="text" id='busqueda' placeholder='Buscar libro o autor' />
              <button type='submit' className='search-btn'>Buscar</button>
            </form>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header

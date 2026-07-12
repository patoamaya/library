import './Header.css'

const Header = ({searchData}) => {
  return (
    <div className='headerContainer'>
      <h1>Biblioteca</h1>
      <div className="nav">
        <ul>
          <li>
            <form action="" onSubmit={searchData}>
              <input type="text" id='busqueda' placeholder='Buscar libro o autor' />
              <button type='submit'>Buscar</button>
            </form>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
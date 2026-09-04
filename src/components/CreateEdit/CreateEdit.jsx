import { TextField } from '@mui/material'
import './CreateEdit.css'

const CreateEdit = ({datos}) => {
  const {id, data} = datos
  const {titulo, autor, sinopsis, leido} = data
  return (
    <div>
      {
        id ? 
        <div className="edit-container-all">
        {/* <h2>{id}</h2> */}
        <form action="post">
          <TextField
          required
          id="outlined-required"
          label="Titulo"
          defaultValue="Hello World"
          />
          <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
          />
          <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
          />
          <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
          />

        </form>
        </div>
        :
        <h2>No hay id</h2>
      }
    </div>
  )
}

export default CreateEdit
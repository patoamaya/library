import React from 'react'
import './CreateEdit.css'
const CreateEdit = ({datos}) => {
  const {id, data} = datos
  return (
    <div>
      {
        id ? 
        <div className="">
        <h2>{id}</h2>
        </div>
        :
        <h2>No hay id</h2>
      }
    </div>
  )
}

export default CreateEdit
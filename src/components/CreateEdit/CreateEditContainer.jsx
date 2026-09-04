import { useEffect, useState } from 'react'
import CreateEdit from './CreateEdit'
import { useParams } from 'react-router-dom'
import db from '../../db.json'

const CreateEditContainer = () => {
  const {id} = useParams()
  const [data, setData] = useState("")

  useEffect(()=>{
  const filtro = db.filter((dato)=> dato.id == id)
  filtro.map((dato)=> setData(dato))
},[])

const datos = {
  data, id
}
  
  return (
    <div>
        <CreateEdit datos={datos}/>
    </div>
  )
}

export default CreateEditContainer
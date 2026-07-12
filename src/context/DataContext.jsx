import React, { createContext, useState } from 'react'
import booksData from '../db.json'
export const DataContext = createContext()

const DataContextProvider = ({children}) => {
    const [allData, setAllData] = useState([])
    const [value, setValue] = useState("")
    
    const searchData = (e) =>{
        e.preventDefault()
        setValue(e.target[0].value)
        setAllData(booksData)
    }
    
    const filteredData = allData?.filter((libro)=> {
        const query = value.toUpperCase()
        let bookFound = libro.titulo ? libro.titulo.includes(value) : false
        let authorFound = libro.autor ? libro.autor.includes(query) : false 
        
        return bookFound || authorFound
    })
    
    

    let data = {
        searchData,
        allData,
        filteredData
    }
    return <DataContext.Provider value = {data}>{children}</DataContext.Provider>; 
}

export default DataContextProvider

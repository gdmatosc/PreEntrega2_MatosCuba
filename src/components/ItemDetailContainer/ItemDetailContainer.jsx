
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { getProductos } from '../services/mockService'

function ItemDetailContainer() {
  const [productos,setProductos]=useState([])
  let params=useParams()  
  console.log(params)
 
  useEffect(() => {
    getProductos(params.itemid)
    .then((respuesta)=>{
        setProductos(respuesta)
    })
    .catch((error) => alert(error))
  },[])

  console.log(productos)

  return (
    <ItemDetail title={productos.title} imgurl={productos.imgurl} category={productos.category} price={productos.price}/> 
  )
}

export default ItemDetailContainer
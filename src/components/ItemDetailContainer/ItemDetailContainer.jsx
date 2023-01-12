
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { getProductos } from '../services/mockService'

function ItemDetailContainer() {
  const [productos,setProductos]=useState([])
  const [counter,setCounter]=useState(0)
  const increase=()=>{
    setCounter(count=>count+1)
  }
  const decrease=()=>{
    if (counter>0){
        setCounter(count=>count-1)
    }  
  }

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
    <ItemDetail 
        title={productos.title} 
        imgurl={productos.imgurl} 
        category={productos.category} 
        price={productos.price} 
        counter={counter} 
        increase={increase}
        decrease={decrease}  /> 
  )
}

export default ItemDetailContainer
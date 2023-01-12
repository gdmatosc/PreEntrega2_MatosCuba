function ItemDetail(props) {

    console.log(props)
    const {title,price,imgurl,category}=props
    
    return (
      <div >
          <br></br>
          <div >
              <img className="max-h-80 object-contain items-center px-80" src={imgurl} alt={title}/>
          </div>

          <div>
              <h2>{title}</h2>
          </div>
              
          <div>
              <h3>$ {price}</h3>
              <small>{category}</small>
          </div>
  
          
         <button className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded" >
             Agregar al carrito
         </button>
          
          
          <br></br>
      </div>
    )
  }
  
  export default ItemDetail
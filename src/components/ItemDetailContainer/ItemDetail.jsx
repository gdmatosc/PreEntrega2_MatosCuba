function ItemDetail(props) {

    console.log(props)
    const {title,price,imgurl,category,counter,increase,decrease}=props
    
    return (
      <div className="md:mr-auto font-bold text-xl pt-4">
          <br></br>
          <div >
              <img className="max-h-80 object-contain items-center px-80" src={imgurl} alt={title}/>
          </div>
          <br></br>
          <div>
              <h2>{title}</h2>
          </div>
              
          <div>
              <h3>$ {price}</h3>
              <small>{category}</small>
          </div>
  
          <br></br>
         {/* <button className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded" >
             Agregar al carrito
         </button> */}
         
         <div>
            <button onClick={increase} className="bg-red-600 hover:bg-red-800 text-white font-bold py-1 px-2 rounded">+</button>
            <span> {counter} </span>
            <button onClick={decrease} className="bg-red-600 hover:bg-red-800 text-white font-bold py-1 px-2 rounded">-</button>
         </div>
          
          
          <br></br>
      </div>
    )
  }
  
  export default ItemDetail
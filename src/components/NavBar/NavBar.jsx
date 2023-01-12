import CartWidget from "../ItemListContainer/CartWidget"
import { Link } from "react-router-dom"
function NavBar(){
    return(
        <header className=" bg-teal-600 md:flex px-4 flexitems-center mb-0 gap-16">
            <a href="/"><img src="/compuwork_icon_bg.svg" alt="img" className="mr-auto my-0.5 h-16 md:mr-0"/></a>
        
            <nav className="md:mr-auto md:flex md:gap-4 font-bold text-2xl pt-4">
                <Link to="/category/perifericos">Perifericos</Link>
                <Link to="/category/comunicaciones">Comunicaciones</Link> 
                <Link to="/category/electricos">Electricos</Link>
                {/* <Link to="/detalle">Detalles</Link> */}
            </nav>
            
            <div>
                <CartWidget/>
            </div>
       </header> 
    )
}

export default NavBar

{/* <a href="#">Comunicaciones</a> */}
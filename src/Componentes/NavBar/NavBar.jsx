import CardWidget from "./CardWidget";
import NavItem from "./NavItem";
import {Link } from 'react-router-dom'

export default function NavBar(){
    return(
        <nav>
            <ul>
                <NavItem to='/'>Logo tienda</NavItem>

                <Link to='/category/remera'>Remera</Link>
                <Link to='/category/jean'>Jean</Link>
                <Link to='/category/zapas'>Zapas</Link>
                <Link to='/Cart'>
                   <span class="jam jam-shopping-cart"></span> 
                </Link>
                
            </ul>
            {/* <CardWidget/>  */}  
        </nav>
    )
}
import CardWidget from "./CardWidget";
import NavItem from "./NavItem";

export default function NavBar(){
    const links = [
        {title: 'remeras', url: '/remeras'},
        {title: 'pantalones', url: '/remeras'}

        
    ]
    return(
        <nav>
            <ul>
                <NavItem href='/'>Logo tienda</NavItem>
                {links.map((elemento) => {
                return(
                      <NavItem key={elemento.title} href={elemento.url}>
                        {elemento.title}
                      </NavItem>
                );
                 })}       
            </ul>
            {/* <CardWidget/>  */}
            <span class="jam jam-shopping-cart"></span>

            
        </nav>
    )
}
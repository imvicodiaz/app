import { Link} from 'react-router-dom'

 function NavItem({to, children}){
    return(
        <li>
            <Link className='nav-link' to={href}>
                {children}
            </Link>
        </li>    
    )
}

export default NavItem;
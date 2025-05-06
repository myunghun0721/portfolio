import { Link } from "react-router-dom"
import './Navbar.css'

function Navbar(){
    return (
        <div>
            <div className="navbar">
                <Link className="navbarMenu" to={'/'}>Main</Link>
                <Link className="navbarMenu" to={'/about'}>About</Link>
                <Link className="navbarMenu" to={'/projects'}>Projects</Link>
            </div>
        </div>
    )
}

export default Navbar

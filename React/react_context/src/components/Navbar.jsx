import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/count">Count</Link>
        </nav>
    )
}

export default Navbar;
import { Link } from "react-router-dom";

function Navbar(){
    return (
        <nav className="bg-green-800 bg-clip-padding text-2xl underline" >
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>


        </nav>
    )
}

export default Navbar;
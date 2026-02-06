import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbarDiv">
            <div className="wrapper navbar">
                <h1>CoseCheNonServono Store</h1>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/Products">Prodotti</NavLink>
                    <NavLink to="/AboutUs">Info</NavLink>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;

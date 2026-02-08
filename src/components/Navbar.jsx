import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useBudget } from "../contexts/BudgetContext";

function Navbar() {
    const { maxPrice, setMaxPrice } = useBudget();

    useEffect(() => {
        console.log(maxPrice);
    }, [maxPrice]);

    return (
        <div className="navbarDiv">
            <div className="wrapper navbar">
                <div>
                    <h1>CoseCheNonServono Store</h1>
                </div>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/Products">Prodotti</NavLink>
                    <NavLink to="/AboutUs">Info</NavLink>
                    <p className="navPriceTag">Inserisci Prezzo Massimo</p>
                    <input
                        type="number"
                        className="budgetButton"
                        onChange={(e) => setMaxPrice(e.target.value)}
                    />
                </nav>
            </div>
        </div>
    );
}

export default Navbar;

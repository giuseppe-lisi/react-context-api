import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { BudgetContext } from "../contexts/BudgetContext";

function Navbar() {
    const { budgetMode, setBudgetMode } = useContext(BudgetContext);

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
                    <button
                        className="budgetButton"
                        onClick={() => setBudgetMode(!budgetMode)}
                    >
                        Modalità Budget: {budgetMode ? "On" : "Off"}
                    </button>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;

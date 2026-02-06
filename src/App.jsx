//pages
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import SingleProduct from "./pages/SingleProduct.jsx";

// layout
import DefaultLayout from "./layouts/DefaultLayout.jsx";

// contexts
import BudgetContext from "./contexts/BudgetContext.jsx";

// react imports
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <BudgetContext.Provider>
                <BrowserRouter>
                    <Routes>
                        <Route Component={DefaultLayout}>
                            <Route path="/" Component={Homepage} />
                            <Route path="/Products" Component={Products} />
                            <Route
                                path="/Products/:id"
                                Component={SingleProduct}
                            />
                            <Route path="/AboutUs" Component={AboutUs} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </BudgetContext.Provider>
        </>
    );
}

export default App;

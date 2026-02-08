import { createContext, useContext, useState } from "react";

const BudgetContext = createContext();

function BudgetProvider({ children }) {
    const [maxPrice, setMaxPrice] = useState(null);

    return (
        <BudgetContext.Provider value={{ maxPrice, setMaxPrice }}>
            {children}
        </BudgetContext.Provider>
    );
}

function useBudget() {
    const context = useContext(BudgetContext);
    return context;
}

export { BudgetProvider, useBudget}

import { createContext } from "react";

const BudgetContext = createContext();

function BudgetProvider({ children }) {
    return (
        <BudgetContext.Provider value={{ count: 1 }}>
            {children}
        </BudgetContext.Provider>
    );
}

export { BudgetContext, BudgetProvider}

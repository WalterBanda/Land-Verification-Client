import {createContext, useContext, useState} from "react";
import TransactionService from "../services/transactions"

const transactionContext = createContext();

export function useData() {
    return useContext(transactionContext);
}

export function DataProvider(props) {
    const [transactions, setTransactions] = useState([{error: "Loading ..."}]);

    const initialLoad = () => {
        setTransactions(TransactionService.fetchTransactions())
    }

    const value = {transactions, setTransactions, initialLoad};

    return <transactionContext.Provider value={value} {...props} />;
}
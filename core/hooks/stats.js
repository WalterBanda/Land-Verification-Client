import {createContext, useContext, useState} from "react";
import DataService from "../services/transactions"

const statsContext = createContext();

export function useStats() {
    return useContext(statsContext);
}

export function StatsProvider(props) {
    const [stats, setStats] = useState([{error: "Loading ..."}]);
    const [chain, setChain] = useState([{error: "Loading ..."}]);

    const initialStatsLoad = () => {
        setStats(DataService.fetchTransactions())
        setChain(DataService.fetchChain())
    }

    const refreshTransactions = () => setStats(DataService.fetchTransactions())
    const refreshChain = () => setChain(DataService.fetchChain())

    const value = {stats, chain, refreshTransactions, refreshChain, initialStatsLoad};

    return <statsContext.Provider value={value} {...props} />;
}
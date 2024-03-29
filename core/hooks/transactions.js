import { createContext, useContext, useState } from "react";
import DataService from "../services/transactions";

const transactionContext = createContext();

export function useData() {
  return useContext(transactionContext);
}

export function DataProvider(props) {
  const [transactions, setTransactions] = useState([{ error: "Loading ..." }]);
  const [chain, setChain] = useState([{ error: "Loading ..." }]);
  const [land, setLand] = useState([{ error: "Loading ..." }]);

  const initialLoad = () => {
    setTransactions(DataService.fetchTransactions());
    setChain(DataService.fetchChain());
    setLand(DataService.fetchLand());
  };

  const refreshTransactions = () =>
    setTransactions(DataService.fetchTransactions());
  const refreshChain = () => setChain(DataService.fetchChain());
  const refreshLand = () => setLand(DataService.fetchLand());

  const value = {
    transactions,
    chain,
    land,
    refreshLand,
    refreshTransactions,
    refreshChain,
    initialLoad,
  };

  return <transactionContext.Provider value={value} {...props} />;
}

import { DataProvider } from "./transactions";
import { StatsProvider } from "./stats";
import LoadData from "../services/loaders";
import { AuthProvider } from "./auth";

export default function Provider({ children }) {
    return <>
        <AuthProvider>
            <DataProvider>
                <StatsProvider>
                    <LoadData />
                    {children}
                </StatsProvider>
            </DataProvider>
        </AuthProvider>
    </>
}


export { useStats } from "./stats"
export { useData } from "./transactions"
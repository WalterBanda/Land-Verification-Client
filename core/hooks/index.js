import {DataProvider} from "./transactions";
import {StatsProvider} from "./stats";
import LoadData from "../services/loaders";

export default function Provider({children}) {
    return <>
        <DataProvider>
            <LoadData/>
            <StatsProvider>
                {children}
            </StatsProvider>
        </DataProvider>
    </>
}


export {useStats} from "./stats"
export {useData} from "./transactions"
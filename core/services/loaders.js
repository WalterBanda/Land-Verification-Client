import {useData} from "../hooks/transactions";
import {useStats} from "../hooks";

export default function LoadData({interval}) {
    const {initialLoad} = useData()
    const {initialStatsLoad} = useStats()

    setTimeout(() => {
        initialLoad()
    }, interval?? 10000)
}

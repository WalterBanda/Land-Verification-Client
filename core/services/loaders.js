import {useData, useStats} from "../hooks";

export default function LoadData({interval}) {
    const {initialLoad} = useData()
    const {initialStatsLoad} = useStats()

    setTimeout(() => {
        initialLoad()
        initialStatsLoad()
    }, interval ?? 10000)
}

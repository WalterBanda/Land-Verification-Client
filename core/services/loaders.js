import {useData} from "../hooks/transactions";

export default function LoadData({interval,children}) {
    const {initialLoad} = useData()

    setTimeout(() => {
        initialLoad()
    }, interval?? 10000)

    return children
}

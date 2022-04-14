import {useData} from "../hooks/transactions";

export default function LoadData({interval}) {
    const {initialLoad} = useData()

    setTimeout(() => {
        initialLoad()
    }, interval?? 10000)
}

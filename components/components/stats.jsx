import {sections} from "../../styles";
import {Stat} from "../widgets/components";
import {useStats} from "../../core";

function TransactionStats() {
    const {stats, chain} = useStats()
    return (
        <div className={sections.root}>
            <div className={sections.stats}>
                <Stat name={"Daily Stats"} data={chain.length}/>
                <Stat name={"Land Sold"} data={stats.length}/>
                <Stat name={"Amount transacted"} data={chain.length + stats.length}/>
            </div>
        </div>
    );
}

function LandStats() {

    const {stats, chain} = useStats()

    return (
        <div className={sections.root}>
            <div className={sections.stats}>
                <Stat name={"Land Owned"} data={chain.length - stats.length}/>
                <Stat name={"Land Sold"} data={stats.length}/>
                <Stat name={"Amount transacted"} data={chain.length + stats.length}/>
                <Stat name={"Account balance"} data={chain.length - stats.length}/>
            </div>
        </div>
    );
}

export {LandStats as AccountDetails,TransactionStats}
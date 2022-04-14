import {sections} from "../../styles";
import {Card, Stat} from "../widgets/components";
import {useStats} from "../../core";

function TransactionStats() {
    const {stats, chain} = useStats()
    return (
        <div className={sections.root}>
            <p className={sections.header}>Land Transactions Stats</p>
            <div className={sections.stats}>
                <Stat name={"Daily Stats"} data={chain.length}/>
                <Stat name={"Land Sold"} data={stats.length}/>
                <Stat name={"Amount transacted"} data={chain.length + stats.length}/>
            </div>
        </div>
    );
}

function AccountDetails() {

    const {stats, chain} = useStats()

    return (
        <div className={sections.root}>
            <p className={sections.header}>Account Details</p>
            <div className={sections.stats}>
                <Stat name={"Land Owned"} data={chain.length - stats.length}/>
                <Stat name={"Land Sold"} data={stats.length}/>
                <Stat name={"Amount transacted"} data={chain.length + stats.length}/>
                <Stat name={"Account balance"} data={chain.length - stats.length}/>
            </div>
        </div>
    );
}

export {AccountDetails,TransactionStats}
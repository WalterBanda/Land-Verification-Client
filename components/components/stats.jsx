import {sections} from "../../styles";
import {Card, Stat} from "../widgets/components";
import {useStats} from "../../core";

function TransactionStats() {
    return (
        <div className={sections.root}>
            <p className={sections.header}>Land Transactions Stats</p>
            <div className={sections.stats}>
                <Stat name={"Daily Stats"} data={10}/>
                <Stat name={"Land Sold"} data={20}/>
                <Stat name={"Amount transacted"} data={5}/>
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
                <Stat name={"Land Owned"} data={10}/>
                <Stat name={"Land Sold"} data={10}/>
                <Stat name={"Amount transacted"} data={stats.length}/>
                <Stat name={"Account balance"} data={10}/>
            </div>
        </div>
    );
}

export {AccountDetails,TransactionStats}
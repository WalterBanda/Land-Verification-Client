import {sections} from "../../styles";
import {Stat, Card} from "../index";
import {useData} from "../../core/hooks/transactions";

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

function PopularLand() {
    let stats = [];
    for (let index = 0; index < 20; index++) {
        stats.push(index);
    }

    return (
        <div>
            <p className={sections.header}>Popular Land </p>
            <div className={sections.stats}>
                {stats.map((e) => (
                    <Card
                        key={e}
                        background={
                            "https://images.unsplash.com/photo-1648668874032-862744573bb1"
                        }
                        alt={e}
                    />
                ))}
            </div>
        </div>
    );
}

function AccountDetails() {
    return (
        <div className={sections.root}>
            <p className={sections.header}>Account Details</p>
            <div className={sections.stats}>
                <Stat name={"Land Owned"} data={10}/>
                <Stat name={"Land Sold"} data={10}/>
                <Stat name={"Amount transacted"} data={10}/>
                <Stat name={"Account balance"} data={10}/>
            </div>
        </div>
    );
}

function RecentTransaction({title}) {

    const {transactions} = useData()

    return (
        <div>
            <p className={sections.header}> {title ?? "Recent Transactions"} </p>
            <div className={sections.transactions}>
                {transactions.map((transaction) => {
                    return <Card key={transactions.indexOf(transaction)} className={sections.transaction_root}>
                        {transaction.error ? transaction.error : <>
                                <h2>Owner: {transaction.owner}</h2>
                                <h3>Buyer: {transaction.receiver}</h3>
                            <div className={sections.desc}>
                                <i className="verifier-transactions"/>
                                <h1>{transaction.size}</h1>
                            </div>
                        </>
                        }
                    </Card>
                })}
            </div>
        </div>
    );
}


export {
    TransactionStats,
    RecentTransaction,
    PopularLand,
    AccountDetails
};

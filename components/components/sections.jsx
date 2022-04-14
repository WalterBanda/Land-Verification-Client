import {sections} from "../../styles";
import {Card} from "../index";
import {useData} from "../../core";

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
                                <i className="verifier-stats"/>
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


export {
    RecentTransaction,
    PopularLand
};

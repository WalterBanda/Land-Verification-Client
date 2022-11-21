import { sections } from "../../styles";
import { Card } from "../index";
import { useData } from "../../core";

export function RecentTransaction({ title }) {
  const { transactions } = useData();

  return (
    <div>
      <p></p>
      <div className={sections.transactions}>
        {transactions.map((transaction) => {
          return (
            <Card
              key={transactions.indexOf(transaction)}
              className={sections.transaction_root}
            >
              {transaction.error ? (
                transaction.error
              ) : (
                <>
                  <h2>Owner: {transaction.owner}</h2>
                  <h3>Buyer: {transaction.receiver}</h3>
                  <div className={sections.desc}>
                    <i className="verifier-stats" />
                    <h1>{transaction.size}</h1>
                  </div>
                </>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export function LandTransaction() {
  const { chain } = useData();

  return (
    <div>
      <p></p>
      <div className={sections.transactions}>
        {chain.map((transaction) => {
          return (
            <Card
              key={chain.indexOf(transaction)}
              className={sections.transaction_root}
            >
              {transaction.error ? (
                transaction.error
              ) : (
                <>
                  <h2>Owner: {transaction.owner}</h2>
                  <h3>Buyer: {transaction.receiver}</h3>
                  <div className={sections.desc}>
                    <i className="verifier-stats" />
                    <h1>{transaction.size}</h1>
                  </div>
                </>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}

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
                  <h2>Owner: {transaction?.owner}</h2>
                  <h3>Buyer: {transaction?.receiver}</h3>
                  <h3>Land Purchased: {transaction?.size}</h3>
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
                  <h2>Owner: {transaction?.transaction?.owner}</h2>
                  <h3>
                    LandID: {transaction?.transaction?.landId?.substring(0, 5)}
                  </h3>
                  <h3>Remaining Land: {transaction?.transaction?.size}</h3>
                </>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}

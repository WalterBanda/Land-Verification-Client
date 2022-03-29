import { transaction_stats } from "../../../styles";
import { Stat } from "./components";

function TransactionStats() {
  let stats = [];
  for (let index = 0; index < 20; index++) {
    stats.push(index);
  }

  return (
    <div className={transaction_stats.root}>
      <div className={transaction_stats.header}>
        <p>Land Transactions Stats</p>
        <i className="verifier-down_arrow" />
      </div>
      <div className={transaction_stats.stats}>
        <Stat key={"stat"} name={"stat"} data={"stat"} />
      </div>
    </div>
  );
}

function PopularLand() {
  return (
    <div>
      <p>Popular Land </p>
    </div>
  );
}
function AccountDetails() {
  return (
    <div>
      <p>Account Details</p>
    </div>
  );
}
function RecentTransaction() {
  return (
    <div>
      <p>Recent Transactions</p>
    </div>
  );
}

export { TransactionStats, PopularLand, RecentTransaction, AccountDetails };

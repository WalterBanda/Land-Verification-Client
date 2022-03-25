import { transaction_stats } from "../../../styles";
import { Stat } from "./components";

function TransactionStats() {
  return (
    <div>
      <div>
        <p>Land Transactions Stats</p>
        <i className="verifier-down_arrow" />
      </div>
      <Stat />
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

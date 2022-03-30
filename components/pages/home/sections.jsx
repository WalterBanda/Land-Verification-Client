import { home_components } from "../../../styles";
import { Stat } from "./components";

function TransactionStats() {
  let stats = [];
  for (let index = 0; index < 20; index++) {
    stats.push(index);
  }

  return (
    <div className={home_components.root}>
      <p className={home_components.header}>Land Transactions Stats</p>
      <div className={home_components.stats}>
        <Stat key={"stat"} name={"stat"} data={"stat"} />
      </div>
    </div>
  );
}

function PopularLand() {
  return (
    <div>
      <p className={home_components.header}>Popular Land </p>
    </div>
  );
}
function AccountDetails() {
  return (
    <div>
      <p className={home_components.header}>Account Details</p>
    </div>
  );
}
function RecentTransaction() {
  return (
    <div>
      <p className={home_components.header}>Recent Transactions</p>
    </div>
  );
}

export { TransactionStats, PopularLand, RecentTransaction, AccountDetails };

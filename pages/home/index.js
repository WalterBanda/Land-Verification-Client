import { PageBuilder } from "../../components";
import { home } from "../../styles";
import {
  TransactionStats,
  PopularLand,
  AccountDetails,
  RecentTransaction,
} from "../../components";

export default function Index() {
  return (
    <div className={home.root}>
      <TransactionStats />
      {/* <PopularLand /> */}
      <AccountDetails />
      <RecentTransaction />
    </div>
  );
}
Index.getLayout = function getLayout(page) {
  return <PageBuilder title="Home">{page}</PageBuilder>;
};

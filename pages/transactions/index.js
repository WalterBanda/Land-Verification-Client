import { PageBuilder } from "../../components";
import { home } from "../../styles";
import {
  TransactionStats,
  RecentTransaction,
} from "../../components";

export default function Index() {
  return (
    <div className={home.root}>
      <TransactionStats />
      <RecentTransaction title={"Transactions List"} />
    </div>
  );
}
Index.getLayout = function getLayout(page) {
  return <PageBuilder title="Transactions">{page}</PageBuilder>;
};

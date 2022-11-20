import {
  TransactionStats,
  RecentTransaction, PageBuilder
} from "@components/index";
import { home } from "@styles/index";

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

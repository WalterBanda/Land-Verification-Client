import {
  TransactionStats,
  RecentTransaction, PageBuilder
} from "@components/index";
import { home, sections } from "@styles/index";

export default function Index() {
  return (
    <div className={home.root}>
      <TransactionStats />
      <p className={sections.header}> Transactions List </p>
      <RecentTransaction />
    </div>
  );
}
Index.getLayout = function getLayout(page) {
  return <PageBuilder title="Transactions">{page}</PageBuilder>;
};

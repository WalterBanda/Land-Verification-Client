import { PageBuilder } from "../../components";
import { home } from "../../styles";
import {
  TransactionStats,
  RecentTransaction,
} from "../../components";

export default function Home() {
  return (
    <div className={home.root}>
      <TransactionStats />
      <RecentTransaction title={"Transactions List"} />
    </div>
  );
}
Home.getLayout = function getLayout(page) {
  return <PageBuilder title="Transactions">{page}</PageBuilder>;
};

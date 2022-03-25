import { PageBuilder } from "../../components";
import { home } from "../../styles";
import {
  TransactionStats,
  PopularLand,
  AccountDetails,
  RecentTransaction,
} from "../../components";

export default function Home() {
  return (
    <div className={home.root}>
      <TransactionStats />
      <PopularLand />
      <AccountDetails />
      <RecentTransaction />
    </div>
  );
}
Home.getLayout = function getLayout(page) {
  return <PageBuilder title="Home">{page}</PageBuilder>;
};

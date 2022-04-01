import { PageBuilder } from "../../components";
import { home } from "../../styles";
import {
  TransactionStats,
  AccountDetails,
  RecentTransaction,
} from "../../components";

export default function Index() {
  return (
    <div className={home.root}>
      <AccountDetails />
      <RecentTransaction title={"Owners List"} />
    </div>
  );
}
Index.getLayout = function getLayout(page) {
  return <PageBuilder title="Land Owners">{page}</PageBuilder>;
};

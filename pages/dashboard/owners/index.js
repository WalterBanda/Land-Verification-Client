import {
  AccountDetails,
  RecentTransaction, PageBuilder
} from "@components/index";
import { home } from "@styles/index";

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

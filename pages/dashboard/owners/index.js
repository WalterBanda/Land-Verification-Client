import { LandTransaction } from "@components/components/sections";
import {
  AccountDetails,
  RecentTransaction, PageBuilder
} from "@components/index";
import { home, sections } from "@styles/index";

export default function Index() {
  return (
    <div className={home.root}>
      <p className={sections.header}>Land Stats</p>
      <AccountDetails />
      <p className={sections.header}> Owners List </p>
      <LandTransaction />
    </div>
  );
}
Index.getLayout = function getLayout(page) {
  return <PageBuilder title="Land Owners">{page}</PageBuilder>;
};

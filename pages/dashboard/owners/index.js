import { LandOwners } from "@components/components/sections";
import { AccountDetails, PageBuilder } from "@components/index";
import { home, sections } from "@styles/index";

export default function Index() {
  return (
    <div className={home.root}>
      <p className={sections.header}>Land Stats</p>
      <AccountDetails />
      <p className={sections.header}> Owners List </p>
      <LandOwners />
    </div>
  );
}
Index.getLayout = function getLayout(page) {
  return <PageBuilder title="Land Owners">{page}</PageBuilder>;
};

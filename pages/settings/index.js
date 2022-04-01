import { PageBuilder } from "../../components";
import { home } from "../../styles";
import Link from "next/link"

export default function Index() {
  return (
    <div className={home.root}>
      <Link href={"/settings/theme"}>Themes Settings </Link>
    </div>
  );
}
Index.getLayout = function getLayout(page) {
  return <PageBuilder title="Settings">{page}</PageBuilder>;
};

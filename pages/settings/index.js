import { PageBuilder } from "../../components";
import { home } from "../../styles";

export default function Home() {
  return (
    <div className={home.root}>
    </div>
  );
}
Home.getLayout = function getLayout(page) {
  return <PageBuilder title="Settings">{page}</PageBuilder>;
};

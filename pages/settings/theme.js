import { PageBuilder } from "../../components/index";

export default function Theme() {
    return <h1>Theme</h1>
}
Theme.getLayout = function getLayout(page) {
    return <PageBuilder title="Settings">{page}</PageBuilder>;
  };
  
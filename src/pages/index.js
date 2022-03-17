import PageBuilder from "../components";
export default function Index() {
  return <>Index</>;
}

Index.getLayout = function buildLayout(page) {
  return <PageBuilder title="Index Page">{page}</PageBuilder>;
};

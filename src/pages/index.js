import PageBuilder from "../components";
export default function Index() {
  return <div>Index ✅ Page</div>;
}

Index.getLayout = function buildLayout(page) {
  return <PageBuilder title="Index Page">{page}</PageBuilder>;
};

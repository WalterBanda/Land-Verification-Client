import PageBuilder from "../../components";

export default function Home() {
  return <>Home</>;
}
Home.getLayout = function getLayout(page) {
    return <PageBuilder>{page}</PageBuilder>
}
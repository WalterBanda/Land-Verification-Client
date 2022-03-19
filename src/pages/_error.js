import PageBuilder from "../components";
import Error from "next/error";

function ErrorPage({ statusCode }) {
  return (
    <PageBuilder>
      <Error statusCode={errorCode} />
    </PageBuilder>
  );
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;

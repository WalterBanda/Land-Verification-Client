import { PageBuilder } from "../components";
import { ErrorCode } from "../core";

function ErrorPage({ statusCode }) {
  // TODO Implement Auth based Routing
  return <PageBuilder>
    <ErrorCode status={statusCode} />
  </PageBuilder>;
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;

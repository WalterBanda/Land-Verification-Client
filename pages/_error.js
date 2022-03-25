import { ErrorCode, PageBuilder } from "../components";

function ErrorPage({ statusCode }) {
  return (
    <PageBuilder>
      <ErrorCode status={statusCode} />
    </PageBuilder>
  );
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;

import { PageBuilder } from "../components";
import { ErrorCode, useAuth } from "../core";
import { Builder } from "../components/core/builder";

function ErrorPage({ statusCode }) {
  const { user } = useAuth();

  if (!user) {
    return (
      <Builder title="🌋 Error occured">
        <ErrorCode status={statusCode} />
      </Builder>
    );
  }
  return (
    <PageBuilder title="🌋 Error occured">
      <ErrorCode status={statusCode} />
    </PageBuilder>
  );
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;

import { PageBuilder, Builder } from "@components/index";
import { ErrorCode } from "@core/index";
import { useRouter } from "next/router";

function ErrorPage({ statusCode }) {
    // TODO USer Object replacement
    const { user } = true;
    const router = useRouter()

    if (typeof (window) !== "undefined") {
        setTimeout(() => {
            router.push("/").then(() => {
            })
        }, 6000);
    }

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

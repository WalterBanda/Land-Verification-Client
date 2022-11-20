import {
    TransactionStats,
    AccountDetails,
    RecentTransaction, PageBuilder
} from "@components/index";
import { home } from "@styles/index";

export default function Index() {

    return (
        <div className={home.root}>
            <TransactionStats />
            <AccountDetails />
            <RecentTransaction />
        </div>
    );
}
Index.getLayout = function getLayout(page) {
    return <PageBuilder title="Home ">{page}</PageBuilder>;
};

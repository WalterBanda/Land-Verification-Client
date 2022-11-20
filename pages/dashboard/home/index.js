import {PageBuilder} from "../../../components";
import {home} from "../../../styles";
import {
    TransactionStats,
    AccountDetails,
    RecentTransaction,
} from "../../../components";

export default function Index() {

    return (
        <div className={home.root}>
            <TransactionStats/>
            <AccountDetails/>
            <RecentTransaction/>
        </div>
    );
}
Index.getLayout = function getLayout(page) {
    return <PageBuilder title="Home ">{page}</PageBuilder>;
};

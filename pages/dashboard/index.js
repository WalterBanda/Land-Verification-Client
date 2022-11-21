import {
    TransactionStats,
    AccountDetails,
    RecentTransaction, PageBuilder
} from "@components/index";
import { home, components, sections } from "@styles/index";

function AddLand() {
    return <div className={components.stats}>
        <h2>Add Land</h2>
    </div>
}

function AddTransaction() {
    return <div className={components.stats}>
        <h2>Add Transaction</h2>
    </div>
}


export default function Index() {

    return (
        <div className={home.root}>
            <div className={sections.root}>
                <p className={sections.header}>Manage</p>
                <div className={sections.stats}>
                    <AddLand />
                    <AddTransaction />
                </div>
            </div>
            <RecentTransaction />
        </div >
    );
}
Index.getLayout = function getLayout(page) {
    return <PageBuilder title="Home ">{page}</PageBuilder>;
};

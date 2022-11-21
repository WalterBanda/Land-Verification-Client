import { LandTransaction } from "@components/components/sections";
import { PageBuilder, RecentTransaction } from "@components/index";
import { TabPanelUnstyled, TabsUnstyled, TabUnstyled, TabsListUnstyled } from "@mui/base";
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
            <div className={sections.root}>
                <p className={sections.header}>Recent Items</p>
                <TabsUnstyled defaultValue={0}>
                    <TabsListUnstyled>
                        <TabUnstyled className={sections.tab}>Transactions</TabUnstyled>
                        <TabUnstyled className={sections.tab}>Purchased Land</TabUnstyled>
                    </TabsListUnstyled>
                    <TabPanelUnstyled value={0}>
                        <RecentTransaction />
                    </TabPanelUnstyled>
                    <TabPanelUnstyled value={1}>
                        <LandTransaction />
                    </TabPanelUnstyled>
                </TabsUnstyled>
            </div>
        </div >
    );
}
Index.getLayout = function getLayout(page) {
    return <PageBuilder title="Home ">{page}</PageBuilder>;
};

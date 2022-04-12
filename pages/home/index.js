import {PageBuilder} from "../../components";
import {home} from "../../styles";
import {
    TransactionStats,
    PopularLand,
    AccountDetails,
    RecentTransaction,
} from "../../components";
import {firebaseAuth} from "../../core/config/firebase.config";
import {getAuth} from "firebase/auth";

export default function Index() {

    const user = firebaseAuth.currentUser;
    console.log(getAuth().currentUser)
    return (
        <div className={home.root}>
            {user !== null || undefined ? user.displayName : "No User"}
            <TransactionStats/>
            {/* <PopularLand /> */}
            <AccountDetails/>
            <RecentTransaction/>
        </div>
    );
}
Index.getLayout = function getLayout(page) {
    return <PageBuilder title="Home ">{page}</PageBuilder>;
};

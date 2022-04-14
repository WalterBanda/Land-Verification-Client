import {default as Home} from "./home/index"
import {default as Auth} from "./auth/index"
import {AuthPage, PageBuilder} from "../components";

export default function Index() {
    const {user} = true;

    if (user !== true) {
        return (
            <PageBuilder title="Dashboard">
                <Home/>
            </PageBuilder>
        );
    }
    return (
        <AuthPage title="Onboarding">
            <Auth/>
        </AuthPage>
    );
}

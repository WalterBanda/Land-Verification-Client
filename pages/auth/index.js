import {AuthPage, RegisterUser, Authlets} from "../../components";
import {auth} from "../../styles";
import {useAuth} from "../../core";

export default function Index() {
    const {user} = useAuth();

    const username = user !== null || undefined ? user.displayName : "Not Signed";
    return (
        <div className={auth.onboarding}>
            <p>Login to your Account {username}</p>
            <Authlets/>
            <RegisterUser/>
        </div>
    );
}

Index.getLayout = function getLayout(page) {
    return <AuthPage title="Onboarding 🔐">{page}</AuthPage>;
};

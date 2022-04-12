import {AuthPage, RegisterUser, Authlet} from "../../components";
import {auth, sections} from "../../styles";
import {useRouter} from "next/router";

export default function Index() {
    const router = useRouter();
    return (
        <div className={auth.onboarding}>
            <p>Login to your Account </p>
            <div className={sections.authlets}>
                <Authlet icon="verifier-google"/>
                <Authlet icon="verifier-github"/>
                <Authlet icon="verifier-email" callback={()=>router.push("/auth/login")} />
            </div>
            <RegisterUser/>
        </div>
    );
}

Index.getLayout = function getLayout(page) {
    return <AuthPage title="Onboarding 🔐">{page}</AuthPage>;
};

import { AuthPage, RegisterUser, Authlet } from "@components/index";
import { auth, sections } from "@styles/index";
import { useRouter } from "next/router";
import AuthService from "@core/services/auth";

export default function Index() {
    const router = useRouter();
    return (
        <div className={auth.onboarding}>
            <p>Login to your Account </p>
            <div className={sections.authlets}>
                <Authlet icon="verifier-google" callback={() => AuthService.googleLogin({ router })} />
                <Authlet icon="verifier-github" callback={() => AuthService.githubLogin({ router })} />
                <Authlet icon="verifier-email" callback={() => router.push("/auth/login")} />
            </div>
            <RegisterUser />
        </div>
    );
}

Index.getLayout = function getLayout(page) {
    return <AuthPage title="Onboarding 🔐">{page}</AuthPage>;
};

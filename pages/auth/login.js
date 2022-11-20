import { Input, Button, AuthPage } from "../../components";
import { auth, input } from "@styles/index";
import { useRouter } from "next/router";

export default function Login() {

    const router = useRouter();

    return (
        <div className={auth.login}>
            <div className={auth.nav} onClick={() => router.back()}>
                <i className="verifier-caret_down" />
                <span>Back</span>
            </div>
            <p>Login with your Credentials </p>
            <form>
                <Input
                    hint="Email address"
                    icon="verifier-email"
                    input_type="email"
                    icon_leading
                    className={input.auth}
                />
                <Input
                    hint="Your Password"
                    icon="verifier-password"
                    input_type="password"
                    icon_leading
                    className={input.auth}
                />
            </form>
            <Button className={auth.btn}>Login</Button>
        </div>
    );
}

Login.getLayout = function getLayout(page) {
    return <AuthPage title="Login 🔒">{page}</AuthPage>;
};

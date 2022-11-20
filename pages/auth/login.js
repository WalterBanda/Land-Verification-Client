import { Input, Button, AuthPage } from "../../components";
import { auth, input } from "@styles/index";

export default function Login() {
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
                    className={input.auth}
                />
                <Input
                    hint="Your Password"
                    icon="verifier-password"
                    input_type="password"
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

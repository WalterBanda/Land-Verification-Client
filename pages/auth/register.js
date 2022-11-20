import { Button, AuthPage, Input } from "@components/index";
import { auth, input } from "@styles/index";

export default function Register() {
    return (
        <div className={auth.register}>
            <div className={auth.nav} onClick={() => router.back()}>
                <i className="verifier-caret_down" />
                <span>Back</span>
            </div>
            <p>Create a new User</p>
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
            <Button className={auth.btn}>Register</Button>
        </div>
    );
}

Register.getLayout = function getLayout(page) {
    return <AuthPage title="Register 🗝">{page}</AuthPage>;
};

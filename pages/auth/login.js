import { Input, Button, AuthPage } from "../../components";
import { auth, input } from "@styles/index";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import AuthService from "@core/services/auth";

export default function Login() {

    const { register, handleSubmit } = useForm()

    const router = useRouter();

    const submit = ({ email, password }) => {
        AuthService.login({ email, password, router })
    }

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
                    {...register('email', { required: true })}
                />
                <Input
                    hint="Your Password"
                    icon="verifier-password"
                    input_type="password"
                    icon_leading
                    className={input.auth}
                    {...register('password', { required: true })}
                />
            </form>
            <Button className={auth.btn} onClick={handleSubmit(submit)}>Login</Button>
        </div>
    );
}

Login.getLayout = function getLayout(page) {
    return <AuthPage title="Login 🔒">{page}</AuthPage>;
};

import { Button, AuthPage, Input } from "@components/index";
import { auth, input } from "@styles/index";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import AuthService from "@core/services/auth";

export default function Register() {

    const { register, handleSubmit } = useForm()

    const router = useRouter();

    const submit = ({ email, password }) => {
        AuthService.createAccount({ email, password, router })
    }

    return (
        <div className={auth.register}>
            <div className={auth.nav} onClick={() => router.back()}>
                <i className="verifier-caret_down" />
                <span>Back</span>
            </div>
            <p>Create a new User</p>
            <form>
                <div className={input.auth} data-state={errors['email'] && "failed"}>
                    <Input
                        hint="Email address"
                        icon="verifier-email"
                        input_type="email"
                        icon_leading
                        {...register('email', { required: true, pattern: /^([\w-\.])+@([\w-]+\.)+[\w-]{2,4}$/ })}
                        data-state={errors['email'] && "failed"}
                    />
                    {errors['email'] && <p>Invalid email</p>}
                </div>
                <div className={input.auth} data-state={errors['password'] && "failed"}>
                    <Input
                        hint="Your Password"
                        icon="verifier-password"
                        input_type="password"
                        icon_leading
                        {...register('password', { required: true })}
                    />
                    {errors['password'] && <p>Password is required</p>}
                </div>
            </form>
            <Button className={auth.btn} onClick={handleSubmit(submit)}>Register</Button>
        </div>
    );
}

Register.getLayout = function getLayout(page) {
    return <AuthPage title="Register 🗝">{page}</AuthPage>;
};

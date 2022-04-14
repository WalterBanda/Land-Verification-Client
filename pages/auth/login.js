import {Input, Button, AuthPage} from "../../components";
import {auth, input} from "../../styles";
import {useState} from "react";
import {useRouter} from "next/router";

export default function Login() {

    const [typing, setTyping] = useState(false);
    const router = useRouter()

    const validate_email = (event) => {
        setTyping(true);
    };
    const validate_password = (event) => {
        setTyping(true);
    };

    return (
        <div className={auth.login}>
            <div className={auth.nav} onClick={() => router.back()}>
                <i className="verifier-caret_down"/>
                <span>Back</span>
            </div>
            <p>Login with your Credentials </p>
            <form>
                <Input
                    hint="Email address"
                    icon="verifier-email"
                    input_type="email"
                    onChange={validate_email}
                    className={typing ? ` ${input.auth}` : input.auth}
                />
                <Input
                    hint="Your Password"
                    icon="verifier-password"
                    input_type="password"
                    onChange={validate_password}
                    className={typing ? ` ${input.auth}` : input.auth}
                />
            </form>
            <Button className={auth.btn} onClick={()=> router.replace("/home")}>Login</Button>
        </div>
    );
}

Login.getLayout = function getLayout(page) {
    return <AuthPage title="Login 🔒">{page}</AuthPage>;
};

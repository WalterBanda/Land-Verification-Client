import { Input, Button, AuthPage } from "../../components";
import { auth } from "../../styles";

export default function Login() {
  return (
    <div className={auth.onboarding}>
      <p>Login </p>
      <Input hint="Email address" icon="verifier-info" input_type="email" />
      <Input hint="Password" icon="verifier-info" input_type="password" />
      <Button>Auth Button</Button>
    </div>
  );
}

Login.getLayout = function getLayout(page) {
  return <AuthPage title="Login 🔒">{page}</AuthPage>;
};

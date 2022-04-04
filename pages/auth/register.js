import { Input, Button, AuthPage } from "../../components";
import { auth } from "../../styles";

export default function Register() {
  return (
    <div className={auth.onboarding}>
      <p>Create a new User</p>
      <Input hint="Email address" icon="verifier-info" input_type="email" />
      <Input hint="Password" icon="verifier-info" input_type="password" />
      <Button>Auth Button</Button>
    </div>
  );
}

Register.getLayout = function getLayout(page) {
  return <AuthPage title="Register 🗝">{page}</AuthPage>;
};

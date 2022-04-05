import { Input, Button, AuthPage, AuthInput } from "../../components";
import { auth } from "../../styles";

export default function Login() {
  return (
    <div className={auth.login}>
      <p>Login </p>
      <form>
        <label>Hello</label>
        <AuthInput />
        <AuthInput />
      </form>
        <Button>Auth Button</Button>
    </div>
  );
}

Login.getLayout = function getLayout(page) {
  return <AuthPage title="Login 🔒">{page}</AuthPage>;
};

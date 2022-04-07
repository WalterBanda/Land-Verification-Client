import { AuthInput, Button, AuthPage } from "../../components";
import { auth } from "../../styles";

export default function Register() {
  return (
    <div className={auth.register}>
      <p>Create a new User</p>
      <form>
        <label>Hello</label>
        <AuthInput type="email" />
        <AuthInput type="password" />
      </form>
      <Button>Register</Button>
    </div>
  );
}

Register.getLayout = function getLayout(page) {
  return <AuthPage title="Register 🗝">{page}</AuthPage>;
};

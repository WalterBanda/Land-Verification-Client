import { AuthPage, RegisterUser,Authlets } from "../../components";
import { auth } from "../../styles";
export default function Index() {
  return (
    <div className={auth.onboarding}>
      <p>Login to your Account</p>
      <Authlets />
      <RegisterUser />
    </div>
  );
}

Index.getLayout = function getLayout(page) {
  return <AuthPage title="Onboarding 🔐">{page}</AuthPage>;
};

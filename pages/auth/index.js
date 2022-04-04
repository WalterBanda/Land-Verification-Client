import { AuthPage, RegisterUser } from "../../components";
import { auth, sections } from "../../styles";
import { useRouter } from "next/router";

function Authlets() {
  const router = useRouter();

  const login_nav = () => router.push("/auth/login");

  return (
    <div className={sections.authlets}>
      <Authlet icon="verifier-google" />
      <Authlet icon="verifier-github" />
      <Authlet
        icon="verifier-email"
        className={sections.email}
        callback={login_nav}
      />
    </div>
  );
}

function Authlet({ icon, callback, className }) {
  return (
    <button className={`${className} ${sections.authlet}`} onClick={callback}>
      <i className={icon ?? "verifier-info"} />
    </button>
  );
}
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

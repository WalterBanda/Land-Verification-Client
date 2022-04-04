import { AuthPage, Button, Input } from "../../components";
export default function Auth() {
  return (
    <>
      <Input hint="Email address" icon="verifier-info" />
      <Button>Auth Button</Button>
    </>
  );
}

Auth.getLayout = function getLayout(page) {
  return <AuthPage title="Onboarding 🔐">{page}</AuthPage>;
};

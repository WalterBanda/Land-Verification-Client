import { sections } from "../../styles";
import { useRouter } from "next/router";

export function RegisterUser() {
    const router = useRouter()
  const navigate = () => {
      router.push("/auth/register")
  };
  return (
    <button className={sections.register_user} onClick={navigate}>
      Don’t have an Account ? <span>Create Account</span>
    </button>
  );
}

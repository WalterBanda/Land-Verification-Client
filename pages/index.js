import { useRouter } from "next/router";
import { Builder } from "../components";
import { useAuth } from "../core";

function Index() {
  const router = useRouter();
  const {user} = useAuth()

  return (
    <Builder>
      <p>Redirecting... {user !== null || undefined ? user.displayName : "No User"} </p>
    </Builder>
  );
}

export default Index;

import { useRouter } from "next/router";
import { Builder } from "../components";
import { useAuth } from "../core";

function Index() {
  const router = useRouter();
  const { user } = useAuth();

  if (typeof window !== "undefined") {
    if (!user) {
      router.replace("/auth");
    }

    if (user) {
      router.replace("/home");
    }
  }
  

  return (
    <Builder>
      <p>Redirecting... </p>
    </Builder>
  );
}

export default Index;

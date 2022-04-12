import { useAuth } from "../hooks/auth";
import { useRouter } from "next/router";

export function Router({ children }) {
  const { user } = useAuth();
  const router = useRouter();

  if (typeof window !== "undefined") {
    if (!user) {
      router.push("/auth");
    }
  }

  return children;
}

import { useRouter } from "next/router";

function Router() {
  const router = useRouter();
  // Make sure we're in the browser
  if (typeof window !== "undefined") {
    router.push("/home");
    return null;
  }
  return (
    <>
      <p>Redirecting </p>
      <div className=".animate-spin" />
    </>
  );
}

export default Router;

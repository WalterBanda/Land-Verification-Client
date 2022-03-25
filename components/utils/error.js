import { useRouter } from "next/router";
import { error } from "../../styles";
export function ErrorCode({ status, message }) {
  const router = useRouter();

  return (
    <div className={error.root}>
      <div className={error.body}>
        <h1>{status}</h1>
        <div>
          {message ?? (
            <div className={error.message}>
              <h2>Error 😢 occurred, return to safety by clicking below</h2>
              <h3 onClick={() => router.push("/home")}>➡ Return to safety</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

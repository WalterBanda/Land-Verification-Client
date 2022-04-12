import { useAuth } from "../hooks/auth";
import { useRouter } from "next/router";
import {requireAuthentication} from "./routes";

export function Router({ children }) {
  return children;
}

export const getServerSideProps = requireAuthentication( async (ctx) => ({
  props: {}
}))

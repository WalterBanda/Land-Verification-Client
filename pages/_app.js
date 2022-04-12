import "../styles/global.scss";
import "../core/config/firebase.config";
import { AuthProvider, Router } from "../core";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <AuthProvider>
      <Router>{getLayout(<Component {...pageProps} />)}</Router>
    </AuthProvider>
  );
}

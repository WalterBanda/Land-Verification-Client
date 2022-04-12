import "../styles/global.scss";
import "../core/config/firebase.config";

export default function App({Component, pageProps}) {
    const getLayout = Component.getLayout || ((page) => page);

    return getLayout(<Component {...pageProps} />);
}

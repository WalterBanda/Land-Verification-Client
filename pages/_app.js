import "@styles/global.scss";
import Provider from "@core/hooks";
import initAuth, { initEmulators } from "@core/config/initAuth";

if (typeof (window) !== "undefined") {
    initAuth()

    initEmulators()
}

export default function App({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => page);

    return <Provider>
        {getLayout(<Component {...pageProps} />)}
    </Provider>
}

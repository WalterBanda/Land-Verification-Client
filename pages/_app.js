import "@styles/global.scss";
import Provider from "@core/hooks";


export default function App({Component, pageProps}) {
    const getLayout = Component.getLayout || ((page) => page);

    return <Provider>
        {getLayout(<Component {...pageProps} />)}
    </Provider>
}

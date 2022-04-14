import "../styles/global.scss";
import {DataProvider} from "../core/hooks/transactions";
import LoadData from "../core/services/loaders";


export default function App({Component, pageProps}) {
    const getLayout = Component.getLayout || ((page) => page);

    return <DataProvider>
        <LoadData interval={1000}/>
        {getLayout(<Component {...pageProps} />)}
    </DataProvider>
}

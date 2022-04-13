import Head from "next/head";
import Image from "next/image";
import {builder, auth} from "../../styles";
import logo from "../../public/assets/res/logo.svg";
import Header, {Theme_Switcher} from "./header";
import {Card as div} from "../widgets/components";
import Sidebar from "./sidebar";

export function PageBuilder({title, children}) {
    return (
        <div className={builder.root}>
            <Head>
                <title>{title}</title>
            </Head>
            <nav>
                <Header title={title}/>
            </nav>
            <main>
                <aside>
                    <Sidebar/>
                </aside>
                <section>{children}</section>
            </main>
        </div>
    );
}

export function AuthPage({title, children}) {
    return (
        <div className={auth.root}>
            <Head>
                <title>{title}</title>
            </Head>

            <div className={auth.page}>
                <div className={auth.logo}>
                    <Image src={logo} alt="App Logo"/>
                </div>

                <div className={auth.page_content}>{children}</div>

                <div className={auth.theming}>
                    <Theme_Switcher/>
                </div>
            </div>
        </div>
    );
}

export function Builder({title, children}) {
    return <div className={auth.root}>
        <Head>
            <title>{title}</title>
        </Head>

        <div className={auth.page}>
            <div className={auth.page_content}>{children}</div>

            <div className={auth.theming}>
                <Theme_Switcher/>
            </div>
        </div>
    </div>
}
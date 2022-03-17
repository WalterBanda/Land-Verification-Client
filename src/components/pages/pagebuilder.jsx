import Head from "next/head";
import { pgbld_style } from "../../styles";
import Header from "./Header";
import Sidebar from "./sidebar";

export default function PageBuilder({ title, children }) {
  return (
    <div className={pgbld_style.root}>
      <Head>
        <title>{title}</title>
      </Head>
      <nav>
        <Header />
      </nav>
      <main>
        <aside>
          <Sidebar />
        </aside>
        <section>{children}</section>
      </main>
    </div>
  );
}

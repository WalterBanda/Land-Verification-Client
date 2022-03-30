import Head from "next/head";
import { builder } from "../../styles";
import Header from "./Header";
import Sidebar from "./sidebar";

export function PageBuilder({ title, children }) {
  return (
    <div className={builder.root}>
      <Head>
        <title>{title}</title>
      </Head>
      <nav>
        <Header title={title} />
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

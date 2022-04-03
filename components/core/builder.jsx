import Head from "next/head";
import { builder,auth } from "../../styles";
import Header from "./header";
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

export function AuthPage({title,children}) {
  return <div className={auth.root}>
  <Head>
    <title>{title}</title>
  </Head>

  <div className={auth.page}>
      <div className={auth.logo}>
      </div>

      <div className={auth.pageContent}>
          {children}
      </div>

  </div>
</div>
}

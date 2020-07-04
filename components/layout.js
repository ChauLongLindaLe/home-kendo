import Head from "next/head";
import styles from "./layout.module.css";

const Layout = ({ children }) => (
  <div className={styles.container}>
    <Head>
      <title>Kendo</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bulma@0.8.2/css/bulma.min.css"
      />
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
      />
    </Head>
    <main>{children}</main>
  </div>
);

export default Layout;

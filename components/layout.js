import Head from "next/head";
// import styles from "./layout.module.css";

// export default function Layout({ children }) {
//     return <div className={styles.container}>{children}</div>
// }

const Layout = (props) => (
  <>
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
    <div className="section">{props.children}</div>
  </>
);

export default Layout;

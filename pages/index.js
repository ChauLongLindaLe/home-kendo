import Link from "next/link";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <main>
        <Link href="/dashboard">
          <p className="subtitle is-link">Return to Dashboard</p>
        </Link>
        <div className="section">
          <h1 className="title">Kendo from home</h1>
          <h2 className="subtitle">How to get swole whilst in lockdown</h2>
          <div className="container">
            <p>Start a session now</p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

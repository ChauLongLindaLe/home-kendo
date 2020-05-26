import Link from "next/link";
import Layout from "../components/layout";
import SessionsList from "../components/sessionsList";

export default function TrainingSessions() {
  return (
    <Layout>
      <main>
        <Link href="/dashboard">
          <p className="subtitle is-link">Return to Dashboard</p>
        </Link>
        <div className="section">
          <h1 className="title">MY SESSIONS</h1>
          <SessionsList />
        </div>
      </main>
    </Layout>
  );
}

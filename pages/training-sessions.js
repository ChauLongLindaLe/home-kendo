import Link from "next/link";
import Layout from "../components/layout";
import SessionsList from "../components/sessionsList";

export default function TrainingSessions({ trainingSessions, error }) {
  return (
    <Layout>
      <main>
        <Link href="/dashboard">
          <p className="subtitle is-link">Return to Dashboard</p>
        </Link>
        <div className="section">
          <h1 className="title">MY SESSIONS</h1>
          <SessionsList trainingSessions={trainingSessions} error={error} />
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  let trainingSessions = [];
  let error = null;

  try {
    const response = await fetch("http://localhost:3000/api/training-sessions");
    trainingSessions = await response.json();
  } catch (err) {
    error = "Sorry, something went wrong";
  }

  return {
    props: { trainingSessions, error }
  };
}

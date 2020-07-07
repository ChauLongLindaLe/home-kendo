import Link from "next/link";
import TrainingSessionForm from "../../components/trainingSessionForm";
import Layout from "../../components/layout";

export default function New() {
  return (
    <>
      <Layout>
        <div className="container">
          <Link href="/dashboard">
            <p className="subtitle is-link">Return to Dashboard</p>
          </Link>
          <TrainingSessionForm
          httpMethod="POST"
          endpoint="/api/training-sessions"
          />
        </div>
      </Layout>
    </>
  );
}

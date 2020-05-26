import Link from "next/link";
import TrainingSessionForm from "../../components/trainingSessionForm";
import "axios";
import Layout from "../../components/layout";

export default function New() {
  return (
    <>
      <Layout>
        <div className="container">
          <Link href="/dashboard">
            <p className="subtitle is-link">Return to Dashboard</p>
          </Link>
          <TrainingSessionForm />
        </div>
      </Layout>
    </>
  );
}

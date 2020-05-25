import Link from "next/link";
import TrainingSessionForm from "../../components/trainingSessionForm";
import Layout from "../../components/Layout";

export default function New() {
  return (
    <Layout>
      <div className='container'>
        <Link href='/dashboard'>
          <a className='subtitle is-link'>Return to Dashboard</a>
        </Link>
        <TrainingSessionForm />
      </div>
    </Layout>
  );
}

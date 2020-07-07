import Link from "next/link";
import TrainingSessionForm from "../../../components/trainingSessionForm";
import Layout from "../../../components/layout";

export default function Edit({ formData, error }) {
  console.log(formData);
  return (
    <>
      <Layout>
        <div className="container">
          <Link href="/dashboard">
            <p className="subtitle is-link">Return to Dashboard</p>
          </Link>
          <h1 className="title">EDIT YOUR MISTAKES</h1>
          <TrainingSessionForm
            title={formData.title}
            duration={formData.duration}
            httpMethod="PATCH"
            endpoint={`/api/training-sessions/${formData.id}`}
          />
        </div>
      </Layout>
    </>
  );
}
export async function getServerSideProps(context) {
  let formData = [];
  let error = null;
  const { id } = context.query;

  try {
    const response = await fetch(`http://localhost:3000/api/training-sessions/${id}`);
    formData = await response.json();
  } catch (err) {
    error = "Sorry, something went wrong";
  }

  return {
    props: { formData, error }
  };
}

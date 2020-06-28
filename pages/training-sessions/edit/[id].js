import Link from "next/link";
import TrainingSessionForm from "../../../components/trainingSessionForm";
import Layout from "../../../components/layout";

// handleUpdate(id) {
//   const { title, duration } = this.state;
//   this.setState({ isLoading: true });
//   fetch(`/api/training-sessions/${id}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ title, duration })
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw response;
//       }
//       Router.push("/training-sessions");
//       this.setState({ isLoading: false });
//     })
//     .catch((error) =>
//       this.setState({ error: error.message, isLoading: false })
//     );
// }

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
            formData={formData}
            endpoint={`/api/training-sessions/${formData.id}`}
          />
        </div>
      </Layout>
    </>
  );
}
export async function getStaticPaths() {
  // Call an external API endpoint to get sessions
  const res = await fetch("http://localhost:3000/api/training-sessions")
  const sessions = await res.json()

  // Get the paths we want to pre-render based on sessions
  const paths = sessions.map((session) => ({
    params: { id: session.id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps() {
  let formData = [];
  let error = null;

  try {
    const response = await fetch("http://localhost:3000/api/training-sessions");
    formData = await response.json();
  } catch (err) {
    error = "Sorry, something went wrong";
  }

  return {
    props: { formData, error }
  };
}

import Link from "next/link";
import Layout from "../components/layout";

export default function Dashboard() {
  return (
    <Layout>
      <Link href="/training-sessions/new">
        <h2 className="title"> Insert training session</h2>
      </Link>
      <Link href="/training-sessions">
        <h2 className="title"> View All Sessions</h2>
      </Link>
      <Link href="/training-sessions">
        <h2 className="title"> View All Sessions</h2>
      </Link>
    </Layout>
  );
}

import Link from "next/link";
import Layout from "../components/Layout";

const Dashboard = () => (
  <Layout>
    <Link href="/training-sessions/new">
      <h2 className="title"> Insert training session</h2>
    </Link>
  </Layout>
);

export default Dashboard;

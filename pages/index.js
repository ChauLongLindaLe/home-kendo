import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div className='container'>
      <Layout>
        <main>
          <Link href='/dаshboard'>
            <a>Dashboard</a>
          </Link>
          <div className='section'>
            <h1 className='title'>Kendo from home</h1>
            <h2 className='subtitle'>How to get swole whilst in lockdown</h2>
            <div className='container'>
              <p>Start a session now</p>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}

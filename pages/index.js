import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Kendo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
        <Link href="/dаshboard"><a>Dashboard</a></Link>
          <h1 className="title">
            <p>Title</p>
          </h1>

        </main>
      </Layout>
    </div>
  )
}

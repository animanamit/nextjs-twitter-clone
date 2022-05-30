import type { NextPage } from 'next'
import Head from 'next/head'
import Sidebar from 'components/sidebar.component'
import Feed from 'components/feed.component'
import Widgets from 'components/widgets.component'

const Home: NextPage = () => {
  return (
    <div className="max-h-screen mx-auto lg:max-w-6xl">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid grid-cols-9">
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </div>
  )
}

export default Home

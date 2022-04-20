import type { NextPage } from 'next'
import Head from 'next/head'
import LinkList from '../../components/LinkList'
import Switch from '../../components/SwitchTheme'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Link Tree Galleguillos</title>
        <meta name="All your links in one place"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <Switch/>
        <LinkList
          title="MEUS LINKS"
          hasEdition
        />
      </section>
    </>
  )
}

export default Home

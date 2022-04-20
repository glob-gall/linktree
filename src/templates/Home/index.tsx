import type { NextPage } from 'next'
import Head from 'next/head'
import LinkList from '../../components/LinkList'
// import Image from 'next/image'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Link Tree Galleguillos</title>
        <meta name="All your links in one place"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <LinkList
          title="MEUS LINKS"
          links={[
              {
                platform:'github',
                link:'http://www.github.com/glob-gall',
              },
              {
                platform:'facebook',
                link:'http://www.facebook.com',
              },
              {
                platform:'instagram',
                link:'http://www.instagram.com',
              },
              {
                platform:'website',
                link:'http://www.galleguillos.me'
              },
            ]}
          />
      </section>
    </>
  )
}

export default Home

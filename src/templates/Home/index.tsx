import type { NextPage } from 'next'
import Head from 'next/head'
import LinkList from '../../components/LinkList'
import { RenderLinkProps } from '../../components/LinkList/SocialLinks'
import Switch from '../../components/SwitchTheme'
// import Image from 'next/image'

const MOCK_LINKS: RenderLinkProps[] = [
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
]

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
          links={MOCK_LINKS}
          />
      </section>
    </>
  )
}

export default Home

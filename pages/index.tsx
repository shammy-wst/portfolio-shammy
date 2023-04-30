import { Inter } from 'next/font/google'
import Head from 'next/head'
import Main from './components/Main'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Resume from './components/resume'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Icham | Front-End Developer</title>
        <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://use.typekit.net/fqg2pyf.css"/>
        <meta name='description' content='Icham Front-End Developer' />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
        <Resume />
      <Contact />

    </div>
  )
}

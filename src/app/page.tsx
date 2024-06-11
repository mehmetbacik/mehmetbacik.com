import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import '../styles/styles.scss';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';

const inter = Inter({ subsets: ['latin'] })

export default function Page() {
  return (
    <main className={styles.main}>
      <Header />
      <About />
      <Experience />
      <Contact />
    </main>
  )
}

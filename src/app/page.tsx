import Image from 'next/image'
import { Inter } from 'next/font/google'
import '../styles/styles.scss';
import Home from './pages/Home/Home';

const inter = Inter({ subsets: ['latin'] })

export default function Page() {
  return (
    <div>
      <Home />
    </div>
  )
}

import { Inter } from '@next/font/google'
import Home from './Home/page'


const inter = Inter({ subsets: ['latin'] })

export default function Main() {
  return (
    <>
      <Home/>
    </>
  )
}

// import About from './component/aboutus'
import Navbar from './component/navbar'
import './globals.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}

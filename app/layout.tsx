import { Inter } from 'next/font/google'
import './globals.css'
import './styles.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Your Name - Interactive Resume',
  description: 'Personal website showcasing skills, projects, and personality',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="flex flex-col items-center justify-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}


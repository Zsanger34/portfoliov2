import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-50 w-full">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex justify-between items-center">
          <li><Link href="/" className="text-2xl font-bold">Zachary Sanger</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/resume">Resume</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/journey">Journey</Link></li>
          <li><Link href="/homelab">Homelab</Link></li>
          <li><Link href="/fun">Fun</Link></li>
        </ul>
      </nav>
    </header>
  )
}


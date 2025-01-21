import Link from "next/link";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-50 w-full">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Zachary Sanger
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-6">
          <li>
            <Link href="/about" className="hover:text-secondary">
              About
            </Link>
          </li>
          <li>
            <Link href="/resume" className="hover:text-secondary">
              Resume
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-secondary">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/journey" className="hover:text-secondary">
              Journey
            </Link>
          </li>
          {/* <li>
            <Link href="/homelab" className="hover:text-secondary">
              Homelab
            </Link>
          </li> */}
          <li>
            <Link href="/fun" className="hover:text-secondary">
              Fun
            </Link>
          </li>
        </ul>

        {/* Mobile Dropdown Menu */}
        <DropdownMenu.Root>
          <DropdownMenu.Trigger
            className="lg:hidden block focus:outline-none text-primary-foreground"
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </DropdownMenu.Trigger>

          <DropdownMenu.Content
            className="bg-primary border border-secondary text-primary-foreground rounded-lg shadow-lg w-40 mt-2 p-2"
            align="end"
          >
            <DropdownMenu.Item className="hover:bg-secondary hover:text-primary-foreground p-2 rounded">
              <Link href="/about">About</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="hover:bg-secondary hover:text-primary-foreground p-2 rounded">
              <Link href="/resume">Resume</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="hover:bg-secondary hover:text-primary-foreground p-2 rounded">
              <Link href="/projects">Projects</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="hover:bg-secondary hover:text-primary-foreground p-2 rounded">
              <Link href="/journey">Journey</Link>
            </DropdownMenu.Item>
            {/* <DropdownMenu.Item className="hover:bg-secondary hover:text-primary-foreground p-2 rounded">
              <Link href="/homelab">Homelab</Link>
            </DropdownMenu.Item> */}
            <DropdownMenu.Item className="hover:bg-secondary hover:text-primary-foreground p-2 rounded">
              <Link href="/fun">Fun</Link>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </nav>
    </header>
  );
}

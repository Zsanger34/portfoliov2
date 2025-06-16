import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-primary/80 backdrop-blur-lg text-primary-foreground sticky top-0 z-50 w-full">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
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
          <li>
            <Link href="/fun" className="hover:text-secondary">
              Fun
            </Link>
          </li>
        </ul>

        {/* Mobile Dropdown Menu */}
        <div className="relative lg:hidden">
          {/* Trigger */}
          <button
            id="dropdown-trigger"
            className="focus:outline-none text-primary-foreground"
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
          </button>

          {/* Dropdown Content */}
          <div
            id="dropdown-content"
            className="absolute right-0 bg-primary/90 border border-secondary text-primary-foreground rounded-lg shadow-lg w-40 mt-2 p-2 hidden"
          >
            <Link href="/about" className="block hover:bg-secondary hover:text-primary-foreground p-2 rounded">
              About
            </Link>
            <Link href="/resume" className="block hover:bg-secondary hover:text-primary-foreground p-2 rounded">
              Resume
            </Link>
            <Link href="/projects" className="block hover:bg-secondary hover:text-primary-foreground p-2 rounded">
              Projects
            </Link>
            <Link href="/journey" className="block hover:bg-secondary hover:text-primary-foreground p-2 rounded">
              Journey
            </Link>
            <Link href="/fun" className="block hover:bg-secondary hover:text-primary-foreground p-2 rounded">
              Fun
            </Link>
          </div>
        </div>
      </nav>

      {/* Vanilla JavaScript for Dropdown */}
      <script>
        {`
          // Wait for the DOM to load
          document.addEventListener('DOMContentLoaded', function () {
            const dropdownTrigger = document.getElementById('dropdown-trigger');
            const dropdownContent = document.getElementById('dropdown-content');

            let isDropdownOpen = false;

            // Toggle dropdown on click
            dropdownTrigger.addEventListener('click', function () {
              isDropdownOpen = !isDropdownOpen;
              dropdownContent.style.display = isDropdownOpen ? 'block' : 'none';
            });

            // Close dropdown on scroll or outside click
            window.addEventListener('scroll', function () {
              if (isDropdownOpen) {
                isDropdownOpen = false;
                dropdownContent.style.display = 'none';
              }
            });
            document.addEventListener('click', function (event) {
              if (
                isDropdownOpen &&
                !dropdownTrigger.contains(event.target as Node) &&
                !dropdownContent.contains(event.target as Node)
              ) {
                isDropdownOpen = false;
                dropdownContent.style.display = 'none';
              }
            });
          });
        `}
      </script>
    </header>
  );
}

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-8">
      <div className="container mx-auto px-4 py-4 text-center">
        © {new Date().getFullYear()} Zachary Sanger. All rights reserved.
      </div>
    </footer>
  )
}


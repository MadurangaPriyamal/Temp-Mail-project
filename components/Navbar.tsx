
export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-600 text-white">
            <span className="text-lg font-bold">T</span>
          </span>

          <span className="text-xl font-bold text-gray-900">
            TempMails
          </span>
        </a>

        <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
          <a href="/" className="text-blue-600">
            Home
          </a>
          <a href="#features" className="transition-colors hover:text-blue-600">
            Features
          </a>
          <a href="#faq" className="transition-colors hover:text-blue-600">
            FAQ
          </a>
          <a href="#footer" className="transition-colors hover:text-blue-600">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

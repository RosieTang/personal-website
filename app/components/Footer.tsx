export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-400">
          © {year} Rosie Tang. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/RosieTang"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-gray-700 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yunxi-tang-rosie"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-gray-700 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
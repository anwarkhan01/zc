import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Page not found</h1>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          The page you are looking for doesn&apos;t exist or may have been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center rounded-md bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-700"
        >
          Go back home
        </Link>
      </div>
    </main>
  )
}



import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-24 text-center">
      <div>
        <p className="eyebrow mb-3">404</p>
        <h1 className="text-4xl font-extrabold text-ink mb-4">This page has left the terminal</h1>
        <p className="text-slate-600 mb-8">The page you were looking for does not exist. Your shuttle still does.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="btn-outline">Back to home</Link>
          <Link to="/book-now" className="btn-primary">Book a shuttle <ArrowRight className="w-5 h-5" /></Link>
        </div>
      </div>
    </div>
  )
}

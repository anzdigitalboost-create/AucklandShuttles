import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { cn } from '../../lib/cn'
import LanguageSelector from '../LanguageSelector'
import Logo from '../Logo'
import { PHONE_DISPLAY, PHONE_TEL } from '../../config/siteConfig'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { t } = useTranslation()

  const NAV_LINKS = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.airport'), path: '/auckland-airport-shuttle' },
    { label: t('nav.services'), path: '/services' },
    { label: t('nav.cruise'), path: '/cruise-transfers' },
    { label: t('nav.about'), path: '/about' },
    { label: t('nav.contact'), path: '/contact' },
  ]

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b transition-shadow duration-300',
        scrolled ? 'border-slate-200 shadow-sm' : 'border-transparent'
      )}
    >
      <nav className="container-max px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between gap-4">
        <Link to="/" aria-label="Auckland Shuttles — home" className="shrink-0">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'px-3.5 py-2 text-sm font-medium rounded-full transition-colors duration-200',
                location.pathname === link.path
                  ? 'text-brand bg-brand-50'
                  : 'text-slate-600 hover:text-ink hover:bg-slate-100'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageSelector />
          <a href={`tel:${PHONE_TEL}`} className="hidden xl:flex items-center gap-2 text-sm font-semibold text-ink hover:text-brand transition-colors">
            <Phone className="w-4 h-4 text-brand" />
            {PHONE_DISPLAY}
          </a>
          <Link
            to="/book-now"
            className="bg-brand hover:bg-brand-500 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors duration-200 shadow-sm"
          >
            {t('nav.bookRide')}
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2.5 rounded-full text-ink bg-slate-100 hover:bg-slate-200 transition-colors"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pb-5 pt-3 space-y-1 animate-slide-down">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'block px-4 py-3 text-sm font-medium rounded-xl transition-colors',
                location.pathname === link.path ? 'text-brand bg-brand-50' : 'text-slate-700 hover:bg-slate-50'
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="md:hidden px-2 py-1">
            <LanguageSelector />
          </div>
          <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-ink">
            <Phone className="w-4 h-4 text-brand" /> {PHONE_DISPLAY}
          </a>
          <Link
            to="/book-now"
            className="block w-full text-center bg-brand hover:bg-brand-500 text-white font-semibold px-4 py-3 rounded-full transition-colors"
          >
            {t('nav.bookRide')}
          </Link>
        </div>
      )}
    </header>
  )
}

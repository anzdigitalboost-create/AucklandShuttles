import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Logo from '../Logo'
import { AREAS } from '../../data/areas'
import { PHONE_DISPLAY, PHONE_TEL, EMAIL } from '../../config/siteConfig'

const FOOTER_LINKS = {
  Shuttles: [
    { label: 'Auckland Airport Shuttle', path: '/auckland-airport-shuttle' },
    { label: 'All Shuttle Services', path: '/services' },
    { label: 'Cruise Terminal Shuttle', path: '/cruise-transfers' },
    { label: 'Auckland to Hobbiton', path: '/hobbiton-transfers' },
    { label: 'Book Online', path: '/book-now' },
  ],
  'Areas We Cover': Object.entries(AREAS).map(([slug, a]) => ({
    label: `${a.name} Shuttle`,
    path: `/areas/${slug}`,
  })),
  Company: [
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'Terms & Conditions', path: '/terms-and-conditions' },
    { label: 'Privacy Policy', path: '/privacy-policy' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-ink text-slate-300 pb-20 md:pb-0">
      <div className="container-max px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-12">
          <div>
            <Link to="/" className="inline-block mb-5" aria-label="Auckland Shuttles — home">
              <Logo light />
            </Link>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed max-w-xs">
              Private door-to-door shuttles across Auckland — to the airport, the cruise terminal and beyond. Fixed prices, booked online in a minute.
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2.5 text-white font-semibold hover:text-sun transition-colors">
                  <Phone className="w-4 h-4 text-sun" /> {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-sun" /> {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-sun" /> Auckland, New Zealand
              </li>
              <li className="flex items-center gap-2.5 text-slate-400">
                <Clock className="w-4 h-4 text-sun" /> Open 24 hours, 7 days
              </li>
            </ul>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold mb-4 text-sm font-sans">{title}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.path + link.label}>
                    <Link to={link.path} className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Auckland Shuttles. All rights reserved.</p>
          <p>
            Operated by{' '}
            <a href="https://www.bookaride.co.nz" className="text-slate-400 hover:text-white underline underline-offset-2">Book A Ride NZ</a>
            {' '}— bookings, payments and confirmations are handled by Book A Ride NZ.
          </p>
        </div>
      </div>
    </footer>
  )
}

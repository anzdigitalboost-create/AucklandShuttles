import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Logo from '../Logo'
import { AREAS } from '../../data/areas'
import { PHONE_DISPLAY, PHONE_TEL, EMAIL } from '../../config/siteConfig'

export default function Footer() {
  const { t } = useTranslation()

  const columns = [
    {
      title: t('footer.colShuttles'),
      links: [
        { label: t('footer.airport'), path: '/auckland-airport-shuttle' },
        { label: t('footer.allServices'), path: '/services' },
        { label: t('footer.cruise'), path: '/cruise-transfers' },
        { label: t('footer.hobbiton'), path: '/hobbiton-transfers' },
        { label: t('footer.bookOnline'), path: '/book-now' },
      ],
    },
    {
      title: t('footer.colAreas'),
      links: Object.keys(AREAS).map((slug) => ({
        label: t('footer.areaLink', { name: t(`areas.${slug}.name`) }),
        path: `/areas/${slug}`,
      })),
    },
    {
      title: t('footer.colCompany'),
      links: [
        { label: t('footer.about'), path: '/about' },
        { label: t('footer.contact'), path: '/contact' },
        { label: t('footer.terms'), path: '/terms-and-conditions' },
        { label: t('footer.privacy'), path: '/privacy-policy' },
      ],
    },
  ]

  return (
    <footer className="bg-ink text-slate-300 pb-20 md:pb-0">
      <div className="container-max px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-12">
          <div>
            <Link to="/" className="inline-block mb-5" aria-label={t('common.logoAria')}>
              <Logo light />
            </Link>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed max-w-xs">{t('footer.blurb')}</p>
            <ul className="space-y-1 text-sm">
              <li>
                <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2.5 py-2 text-white font-semibold hover:text-sun transition-colors">
                  <Phone className="w-4 h-4 text-sun" /> {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2.5 py-2 text-slate-300 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-sun" /> {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2.5 py-2 text-slate-400">
                <MapPin className="w-4 h-4 text-sun" /> {t('footer.location')}
              </li>
              <li className="flex items-center gap-2.5 py-2 text-slate-400">
                <Clock className="w-4 h-4 text-sun" /> {t('footer.open')}
              </li>
            </ul>
          </div>

          {columns.map(({ title, links }) => (
            <div key={title}>
              <h2 className="text-white font-semibold mb-4 text-sm font-sans">{title}</h2>
              <ul className="space-y-1">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="inline-block py-1.5 text-sm text-slate-400 hover:text-white transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>{t('footer.rights', { year: new Date().getFullYear() })}</p>
          <p>
            {t('footer.operated')}{' '}
            <a href="https://www.bookaride.co.nz" className="text-slate-300 hover:text-white underline underline-offset-2">bookaride.co.nz</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

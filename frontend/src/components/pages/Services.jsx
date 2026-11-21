import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Plane, Navigation, Ship, Mountain, Users, Briefcase, ArrowRight, Check, LayoutGrid } from 'lucide-react'
import PageMeta from '../PageMeta'
import { PageHero, SectionHeading, CtaBand } from '../Sections'

// Icons and links pair with services.items in locales/*.js by position.
const ICONS = [Plane, Navigation, Ship, Mountain, Users, Briefcase]
const PATHS = ['/auckland-airport-shuttle', '/book-now', '/cruise-transfers', '/hobbiton-transfers', '/book-now', '/book-now']

export default function Services() {
  const { t } = useTranslation()
  const items = t('services.items')

  return (
    <div className="bg-white">
      <PageMeta title={t('meta.services.title')} description={t('meta.services.desc')} />

      <PageHero eyebrow={t('services.eyebrow')} icon={LayoutGrid} title={t('services.title')} accent={t('services.accent')}>
        {t('services.lead')}
      </PageHero>

      <section className="section-padding">
        <div className="container-max">
          <SectionHeading eyebrow={t('services.listEyebrow')} title={t('services.listTitle')} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map(({ title, text, points }, i) => {
              const Icon = ICONS[i]
              const path = PATHS[i]
              return (
                <div key={title} className="flex flex-col rounded-3xl border border-slate-200 p-8 hover:border-brand-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-brand" />
                  </div>
                  <h2 className="text-xl font-bold text-ink mb-2">{title}</h2>
                  <p className="text-slate-600 leading-relaxed mb-5">{text}</p>
                  <ul className="space-y-2 mb-7">
                    {points.map((p) => (
                      <li key={p} className="flex items-center gap-2.5 text-sm text-slate-700">
                        <Check className="w-4 h-4 text-brand shrink-0" /> {p}
                      </li>
                    ))}
                  </ul>
                  <Link to={path} className="mt-auto inline-flex items-center gap-1.5 text-brand font-semibold hover:gap-2.5 transition-all">
                    {path === '/book-now' ? t('common.getAPrice') : t('common.learnMore')} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── FLEET ───────────────────────────────────────────── */}
      <section className="section-padding bg-slate-50">
        <div className="container-max grid lg:grid-cols-2 gap-12 items-center max-w-5xl">
          <img
            src="/images/fleet-van.jpg"
            alt={t('services.fleetAlt')}
            className="rounded-3xl shadow-xl w-full h-[420px] object-cover"
            loading="lazy"
          />
          <div>
            <span className="eyebrow">{t('services.fleetEyebrow')}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink mt-2 mb-5 tracking-tight">{t('services.fleetTitle')}</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">{t('services.fleetP1')}</p>
            <p className="text-slate-600 text-lg leading-relaxed">{t('services.fleetP2')}</p>
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  )
}

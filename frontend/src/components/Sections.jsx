import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Phone, ChevronDown } from 'lucide-react'
import BookingReassurance from './BookingReassurance'
import { PHONE_DISPLAY, PHONE_TEL } from '../config/siteConfig'

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' } }),
}

/** Pair translated {title, text} items with their icons, by position. */
export const withIcons = (items, icons) => items.map((item, i) => ({ ...item, icon: icons[i] }))

/** Navy hero band used at the top of every inner page. */
export function PageHero({ eyebrow, title, accent, children, icon: Icon }) {
  const { t } = useTranslation()
  return (
    <section className="hero-surface relative overflow-hidden">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="max-w-3xl">
          {eyebrow && (
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-7">
                {Icon && <Icon className="w-4 h-4 text-sun" />}
                <span className="text-white/90 font-medium text-sm">{eyebrow}</span>
              </div>
            </motion.div>
          )}
          <motion.h1
            initial="hidden" animate="visible" custom={1} variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.08] tracking-tight"
          >
            {title}
            {accent && <> <span className="text-sun">{accent}</span></>}
          </motion.h1>
          <motion.div
            initial="hidden" animate="visible" custom={2} variants={fadeUp}
            className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl"
          >
            {children}
          </motion.div>
          <motion.div
            initial="hidden" animate="visible" custom={3} variants={fadeUp}
            className="flex flex-col sm:flex-row gap-3 mt-9"
          >
            <Link to="/book-now" className="btn-accent">
              {t('common.getPrice')} <ArrowRight className="w-5 h-5" />
            </Link>
            <a href={`tel:${PHONE_TEL}`} className="btn-ghost">
              <Phone className="w-5 h-5" /> {PHONE_DISPLAY}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function SectionHeading({ eyebrow, title, children, center = true }) {
  return (
    <div className={`${center ? 'text-center mx-auto' : ''} max-w-2xl mb-12`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-ink mt-2 mb-4 tracking-tight">{title}</h2>
      {children && <p className="text-lg text-slate-600 leading-relaxed">{children}</p>}
    </div>
  )
}

/** Icon + title + text card grid. */
export function FeatureGrid({ items, cols = 3 }) {
  const grid = cols === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : cols === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'
  return (
    <div className={`grid grid-cols-1 ${grid} gap-6`}>
      {items.map(({ icon: Icon, title, text }, i) => (
        <motion.div
          key={title}
          initial="hidden" whileInView="visible" custom={i % 4} variants={fadeUp}
          viewport={{ once: true, margin: '-40px' }}
          className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-brand-200 hover:shadow-lg transition-all duration-300"
        >
          {Icon && (
            <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-5">
              <Icon className="w-6 h-6 text-brand" />
            </div>
          )}
          <h3 className="text-lg font-bold text-ink mb-2">{title}</h3>
          <p className="text-slate-600 text-[15px] leading-relaxed">{text}</p>
        </motion.div>
      ))}
    </div>
  )
}

/** FAQ list using native <details>; also emits FAQPage structured data. */
export function Faq({ items }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
  return (
    <div className="max-w-3xl mx-auto space-y-3">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {items.map(({ q, a }) => (
        <details key={q} className="group bg-white border border-slate-200 rounded-2xl px-6 py-5 open:border-brand-200 open:shadow-sm">
          <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold text-ink">
            {q}
            <ChevronDown className="w-5 h-5 text-brand shrink-0 transition-transform group-open:rotate-180" />
          </summary>
          <p className="text-slate-600 leading-relaxed mt-3">{a}</p>
        </details>
      ))}
    </div>
  )
}

/** Closing call-to-action band. */
export function CtaBand({ title, text }) {
  const { t } = useTranslation()
  return (
    <section className="hero-surface">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">{title || t('cta.title')}</h2>
        <p className="text-lg text-white/75 mb-9 max-w-xl mx-auto">{text || t('cta.text')}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/book-now" className="btn-accent">
            {t('common.getPrice')} <ArrowRight className="w-5 h-5" />
          </Link>
          <a href={`tel:${PHONE_TEL}`} className="btn-ghost">
            <Phone className="w-5 h-5" /> {t('common.callPhone', { phone: PHONE_DISPLAY })}
          </a>
        </div>
        <BookingReassurance dark className="mt-10" />
      </div>
    </section>
  )
}

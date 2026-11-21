import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowRight, Plane, MapPin, Check, Shield, Clock, Users, Ship, Baby, Luggage, CreditCard, Phone, Mountain, Navigation } from 'lucide-react'
import GoogleReviews from '../GoogleReviews'
import PageMeta from '../PageMeta'
import { fadeUp, SectionHeading, FeatureGrid, Faq, CtaBand, withIcons } from '../Sections'
import { AREAS } from '../../data/areas'
import { PHONE_DISPLAY, PHONE_TEL } from '../../config/siteConfig'

// Icons and links pair with the translated items in locales/*.js by position.
const SERVICE_ICONS = [Plane, Navigation, Ship, Mountain]
const SERVICE_PATHS = ['/auckland-airport-shuttle', '/services', '/cruise-transfers', '/hobbiton-transfers']
const WHY_ICONS = [Users, CreditCard, Plane, Clock, Baby, Luggage]

export default function Home() {
  const { t } = useTranslation()
  const services = t('home.services')
  const steps = t('home.steps')

  return (
    <div className="bg-white">
      <PageMeta title={null} description={t('meta.home.desc')} />

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="hero-surface relative overflow-hidden">
        <div className="container-max px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-20 sm:pb-24">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
            <div>
              <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-7">
                  <Plane className="w-4 h-4 text-sun" />
                  <span className="text-white/90 font-medium text-sm">{t('hero.badge')}</span>
                </div>
              </motion.div>

              <motion.h1
                initial="hidden" animate="visible" custom={1} variants={fadeUp}
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight"
              >
                {t('hero.title1')}
                <br />
                <span className="text-sun">{t('hero.title2')}</span>
              </motion.h1>

              <motion.p
                initial="hidden" animate="visible" custom={2} variants={fadeUp}
                className="text-xl text-white/80 mb-9 leading-relaxed max-w-xl"
              >
                {t('hero.subtitle')}
              </motion.p>

              <motion.div
                initial="hidden" animate="visible" custom={3} variants={fadeUp}
                className="flex flex-col sm:flex-row gap-3 mb-10"
              >
                <Link to="/book-now" className="btn-accent text-lg">
                  {t('hero.bookYourRide')} <ArrowRight className="w-5 h-5" />
                </Link>
                <a href={`tel:${PHONE_TEL}`} className="btn-ghost text-lg">
                  <Phone className="w-5 h-5" /> {PHONE_DISPLAY}
                </a>
              </motion.div>

              <motion.div
                initial="hidden" animate="visible" custom={4} variants={fadeUp}
                className="flex flex-wrap items-center gap-x-6 gap-y-3 text-white/75 text-sm"
              >
                {[
                  { icon: Shield, label: t('hero.chipInsured') },
                  { icon: Clock, label: t('hero.chip247') },
                  { icon: Check, label: t('hero.chipFixed') },
                  { icon: Plane, label: t('hero.chipFlight') },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-sun" />
                    <span>{label}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
              className="hidden lg:block relative"
            >
              <img
                src="/images/fleet-van.webp"
                alt={t('home.fleetAlt')}
                width="840" height="1120" loading="lazy" decoding="async"
                className="rounded-[2rem] w-full h-[520px] object-cover shadow-2xl ring-1 ring-white/20"
              />
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center">
                  <Users className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <div className="text-ink font-bold leading-tight">{t('home.fleetBadgeTitle')}</div>
                  <div className="text-slate-500 text-sm">{t('home.fleetBadgeText')}</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats band */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
            {[
              { value: '24/7', label: t('stats.hours') },
              { value: '60s', label: t('stats.bookTime') },
              { value: '11', label: t('stats.seats') },
              { value: t('statValues.price'), label: t('stats.price') },
            ].map(({ value, label }) => (
              <div key={label} className="bg-white/[0.07] border border-white/15 rounded-2xl px-5 py-5 text-center">
                <div className="text-sun font-display font-extrabold text-2xl sm:text-3xl mb-1">{value}</div>
                <div className="text-white/65 text-xs sm:text-sm font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <SectionHeading eyebrow={t('home.servicesEyebrow')} title={t('home.servicesTitle')}>
            {t('home.servicesText')}
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ title, text }, i) => {
              const Icon = SERVICE_ICONS[i]
              return (
                <motion.div
                  key={title}
                  initial="hidden" whileInView="visible" custom={i} variants={fadeUp}
                  viewport={{ once: true, margin: '-40px' }}
                >
                  <Link
                    to={SERVICE_PATHS[i]}
                    className="group block h-full bg-white rounded-2xl p-7 border border-slate-200 hover:border-brand hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-brand-50 group-hover:bg-brand rounded-xl flex items-center justify-center mb-5 transition-colors">
                      <Icon className="w-6 h-6 text-brand group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-ink mb-2">{title}</h3>
                    <p className="text-slate-600 text-[15px] leading-relaxed mb-5">{text}</p>
                    <span className="inline-flex items-center gap-1.5 text-brand font-semibold text-sm group-hover:gap-2.5 transition-all">
                      {t('common.learnMore')} <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── WHY ─────────────────────────────────────────────── */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <SectionHeading eyebrow={t('home.whyEyebrow')} title={t('home.whyTitle')}>
            {t('home.whyText')}
          </SectionHeading>
          <FeatureGrid items={withIcons(t('home.why'), WHY_ICONS)} cols={3} />
        </div>
      </section>

      {/* ── AREAS ───────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <SectionHeading eyebrow={t('home.areasEyebrow')} title={t('home.areasTitle')}>
            {t('home.areasText')}
          </SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {Object.entries(AREAS).map(([slug, a]) => (
              <Link
                key={slug}
                to={`/areas/${slug}`}
                className="group rounded-2xl border border-slate-200 p-6 hover:border-brand hover:bg-brand-50/50 transition-all"
              >
                <MapPin className="w-6 h-6 text-brand mb-4" />
                <h3 className="font-bold text-ink mb-1">{t(`areas.${slug}.name`)}</h3>
                <p className="text-sm text-slate-500 mb-4">
                  {t('common.toAirport', { time: t('common.minutes', { range: a.driveTime }) })}
                </p>
                <span className="inline-flex items-center gap-1.5 text-brand font-semibold text-sm group-hover:gap-2.5 transition-all">
                  {t('common.viewArea')} <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
          <p className="text-center text-sm text-slate-500 mt-6">
            {t('home.areasNote')}{' '}
            <Link to="/book-now" className="text-brand font-semibold hover:underline">{t('home.areasNoteLink')}</Link>
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────── */}
      <section className="section-padding bg-ink">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sun text-sm font-semibold uppercase tracking-wider">{t('home.howEyebrow')}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">{t('home.howTitle')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ title, text }, i) => (
              <motion.div
                key={title}
                initial="hidden" whileInView="visible" custom={i} variants={fadeUp}
                viewport={{ once: true, margin: '-40px' }}
                className="rounded-2xl bg-white/[0.06] border border-white/10 p-7"
              >
                <div className="w-11 h-11 rounded-full bg-sun text-ink font-display font-extrabold flex items-center justify-center mb-5">{i + 1}</div>
                <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                <p className="text-white/65 text-[15px] leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIVE GOOGLE REVIEWS (real reviews of our operator) ── */}
      <GoogleReviews />

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <SectionHeading eyebrow={t('common.questions')} title={t('home.faqTitle')} />
          <Faq items={t('home.faqs')} />
        </div>
      </section>

      <CtaBand />
    </div>
  )
}

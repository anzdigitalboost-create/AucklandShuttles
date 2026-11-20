import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowRight, Plane, MapPin, Check, Shield, Clock, Users, Ship, Baby, Luggage, CreditCard, Phone, Mountain, Navigation } from 'lucide-react'
import GoogleReviews from '../GoogleReviews'
import PageMeta from '../PageMeta'
import { fadeUp, SectionHeading, FeatureGrid, Faq, CtaBand } from '../Sections'
import { AREAS } from '../../data/areas'
import { META } from '../../data/routes'
import { PHONE_DISPLAY, PHONE_TEL } from '../../config/siteConfig'

const SERVICES = [
  { icon: Plane, title: 'Auckland Airport Shuttle', text: 'To or from the domestic and international terminals, from any Auckland address. Your flight is tracked, so the pickup moves if the flight does.', path: '/auckland-airport-shuttle' },
  { icon: Navigation, title: 'Private Shuttle', text: 'Point-to-point across Auckland for events, weddings, work travel or a night out. The vehicle is yours alone.', path: '/services' },
  { icon: Ship, title: 'Cruise Terminal Shuttle', text: 'Between Queens Wharf or Princes Wharf and the airport or your hotel, with space for cruise luggage.', path: '/cruise-transfers' },
  { icon: Mountain, title: 'Auckland to Hobbiton', text: 'A private day transfer to the Hobbiton Movie Set in Matamata and back, timed to your tour.', path: '/hobbiton-transfers' },
]

const WHY = [
  { icon: Users, title: 'A shuttle to yourself', text: 'Every booking is private. No waiting for other passengers and no detours through other suburbs on the way.' },
  { icon: CreditCard, title: 'One fixed price', text: 'The price is calculated from your addresses and shown before you pay. No meter, no surge pricing.' },
  { icon: Plane, title: 'Flight tracking', text: 'Give us your flight number and we watch it. Early or delayed, your driver is there when you land.' },
  { icon: Clock, title: 'Any hour, any day', text: 'Shuttles run 24 hours, 365 days a year, including the 4am departures and midnight arrivals.' },
  { icon: Baby, title: 'Free child seats', text: 'Infant, child and booster seats at no charge. Tell us ages when you book and they are fitted before pickup.' },
  { icon: Luggage, title: 'Room for luggage', text: 'High-roof vans carry up to 11 passengers with bags, and trailers handle the big loads.' },
]

const STEPS = [
  { step: '1', title: 'Enter your trip', text: 'Pickup address, drop-off, date and passenger numbers. The price appears straight away.' },
  { step: '2', title: 'Pay securely', text: 'Check out by card through Stripe. Your confirmation and booking reference arrive by email.' },
  { step: '3', title: 'We track and plan', text: 'For airport pickups we follow your flight and adjust the pickup time if it changes.' },
  { step: '4', title: 'Ride door to door', text: 'Your driver arrives at your address or meets you at the terminal, and helps with the bags.' },
]

const FAQS = [
  { q: 'How much is a shuttle to Auckland Airport?', a: 'The price depends on your pickup address, passenger numbers and whether you book a return. Enter your trip on the booking page and you will see the exact fixed price before paying — there is no obligation to book.' },
  { q: 'Is this a shared shuttle or a private one?', a: 'Private. The vehicle is booked for your group only, so there are no other pickups or drop-offs along the way.' },
  { q: 'What happens if my flight is delayed?', a: 'We track arriving flights and adjust the pickup time at no extra charge. Free waiting time is 30 minutes after domestic arrivals and 60 minutes after international arrivals.' },
  { q: 'How many people fit in one shuttle?', a: 'Up to 11 passengers per vehicle with luggage. Larger groups can be split across vehicles — call us on 022 355 2808 and we will arrange it.' },
  { q: 'Can I cancel or change a booking?', a: 'Yes. Cancellations made more than 24 hours before pickup are refunded in full. Inside 24 hours, contact us and we will do what we can to reschedule.' },
  { q: 'Do you charge extra at night?', a: 'Pickups between 11pm and 5:59am carry a $15 night surcharge per trip. It is included in the price you see before you pay.' },
]

export default function Home() {
  const { t } = useTranslation()
  return (
    <div className="bg-white">
      <PageMeta title={META.home.title} description={META.home.desc} />

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
                src="/images/fleet-van.jpg"
                alt="Auckland Shuttles Toyota Hiace high-roof passenger van"
                className="rounded-[2rem] w-full h-[520px] object-cover shadow-2xl ring-1 ring-white/20"
              />
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center">
                  <Users className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <div className="text-ink font-bold leading-tight">Up to 11 passengers</div>
                  <div className="text-slate-500 text-sm">per vehicle, with luggage</div>
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
          <SectionHeading eyebrow="Auckland shuttle services" title="Where Can We Take You?">
            One booking system for every kind of Auckland shuttle — airport runs, cruise days and private trips.
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map(({ icon: Icon, title, text, path }, i) => (
              <motion.div
                key={title}
                initial="hidden" whileInView="visible" custom={i} variants={fadeUp}
                viewport={{ once: true, margin: '-40px' }}
              >
                <Link
                  to={path}
                  className="group block h-full bg-white rounded-2xl p-7 border border-slate-200 hover:border-brand hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-brand-50 group-hover:bg-brand rounded-xl flex items-center justify-center mb-5 transition-colors">
                    <Icon className="w-6 h-6 text-brand group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-2">{title}</h3>
                  <p className="text-slate-600 text-[15px] leading-relaxed mb-5">{text}</p>
                  <span className="inline-flex items-center gap-1.5 text-brand font-semibold text-sm group-hover:gap-2.5 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ─────────────────────────────────────────────── */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <SectionHeading eyebrow="Why Auckland Shuttles" title="A Simpler Way to the Airport">
            Everything a shared shuttle or a taxi rank makes you guess at, settled before you leave the house.
          </SectionHeading>
          <FeatureGrid items={WHY} cols={3} />
        </div>
      </section>

      {/* ── AREAS ───────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <SectionHeading eyebrow="Areas we cover" title="Shuttles From Every Part of Auckland">
            Pick your side of town for typical travel times and local pickup details.
          </SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {Object.entries(AREAS).map(([slug, a]) => (
              <Link
                key={slug}
                to={`/areas/${slug}`}
                className="group rounded-2xl border border-slate-200 p-6 hover:border-brand hover:bg-brand-50/50 transition-all"
              >
                <MapPin className="w-6 h-6 text-brand mb-4" />
                <h3 className="font-bold text-ink mb-1">{a.name}</h3>
                <p className="text-sm text-slate-500 mb-4">{a.driveTime} to the airport</p>
                <span className="inline-flex items-center gap-1.5 text-brand font-semibold text-sm group-hover:gap-2.5 transition-all">
                  View area <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
          <p className="text-center text-sm text-slate-500 mt-6">
            Travel times are typical off-peak figures. Not on the list? We cover the whole Auckland region — enter your address on the{' '}
            <Link to="/book-now" className="text-brand font-semibold hover:underline">booking page</Link>.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────── */}
      <section className="section-padding bg-ink">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sun text-sm font-semibold uppercase tracking-wider">How it works</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">Booked in About a Minute</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map(({ step, title, text }, i) => (
              <motion.div
                key={step}
                initial="hidden" whileInView="visible" custom={i} variants={fadeUp}
                viewport={{ once: true, margin: '-40px' }}
                className="rounded-2xl bg-white/[0.06] border border-white/10 p-7"
              >
                <div className="w-11 h-11 rounded-full bg-sun text-ink font-display font-extrabold flex items-center justify-center mb-5">{step}</div>
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
          <SectionHeading eyebrow="Questions" title="Auckland Shuttle FAQs" />
          <Faq items={FAQS} />
        </div>
      </section>

      <CtaBand />
    </div>
  )
}

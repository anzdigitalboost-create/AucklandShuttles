import { Link } from 'react-router-dom'
import { MapPin, Clock, ArrowRight, Check } from 'lucide-react'
import PageMeta from '../PageMeta'
import { PageHero, SectionHeading, FeatureGrid, Faq, CtaBand } from '../Sections'
import { AREAS } from '../../data/areas'

export { AREAS }

export default function AreaLanding({ area }) {
  const a = AREAS[area]
  const others = Object.entries(AREAS).filter(([slug]) => slug !== area)

  const faqs = [
    { q: `How long does a shuttle from ${a.name} to Auckland Airport take?`, a: `Typically ${a.driveTime} off-peak. Morning and evening traffic can add to that, so we recommend choosing a pickup time with a comfortable margin before check-in closes.` },
    { q: `How much is an airport shuttle from ${a.name}?`, a: 'The price depends on your exact address and passenger numbers. Enter your trip on the booking page to see the fixed price before you pay.' },
    { q: `Do you pick up from any address in ${a.name}?`, a: `Yes — homes, hotels, apartments and workplaces across ${a.suburbs.slice(0, 4).join(', ')} and the surrounding suburbs.` },
    { q: 'Is the shuttle shared with other passengers?', a: 'No. Every booking is a private vehicle for your group, with no other pickups on the way.' },
  ]

  return (
    <div className="bg-white">
      <PageMeta title={a.seoTitle} description={a.seoDesc} />

      <PageHero eyebrow={`${a.driveTime} to Auckland Airport, off-peak`} icon={Clock} title={`${a.name}`} accent="Airport Shuttle">
        {a.intro}
      </PageHero>

      <section className="section-padding">
        <div className="container-max">
          <SectionHeading eyebrow={`Shuttles in ${a.short}`} title={`Why Book a ${a.name} Shuttle With Us`} />
          <FeatureGrid items={a.points.map((p) => ({ ...p, icon: Check }))} cols={3} />
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-max max-w-4xl">
          <SectionHeading eyebrow="Pickup suburbs" title={`Where We Pick Up in ${a.name}`}>
            These are the suburbs we are asked for most. Any address in the area is covered.
          </SectionHeading>
          <ul className="flex flex-wrap justify-center gap-3">
            {a.suburbs.map((s) => (
              <li key={s} className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 text-sm font-medium text-slate-700">
                <MapPin className="w-4 h-4 text-brand" /> {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <SectionHeading eyebrow="Questions" title={`${a.name} Shuttle FAQs`} />
          <Faq items={faqs} />
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <SectionHeading eyebrow="Other areas" title="Shuttles Elsewhere in Auckland" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {others.map(([slug, o]) => (
              <Link
                key={slug}
                to={`/areas/${slug}`}
                className="group flex items-center justify-between gap-3 bg-white rounded-2xl border border-slate-200 px-5 py-4 hover:border-brand transition-colors"
              >
                <span className="font-semibold text-ink">{o.name}</span>
                <ArrowRight className="w-4 h-4 text-brand group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={`Price Your ${a.name} Shuttle`} />
    </div>
  )
}

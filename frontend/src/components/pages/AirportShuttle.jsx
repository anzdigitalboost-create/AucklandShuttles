import { Link } from 'react-router-dom'
import { Plane, PlaneLanding, PlaneTakeoff, Clock, Users, Baby, Luggage, CreditCard, Check, ArrowRight, MapPin } from 'lucide-react'
import PageMeta from '../PageMeta'
import { PageHero, SectionHeading, FeatureGrid, Faq, CtaBand } from '../Sections'
import { AREAS } from '../../data/areas'
import { META } from '../../data/routes'

const INCLUDED = [
  { icon: Users, title: 'Private vehicle', text: 'Booked for your group only. The shuttle goes from your address to the terminal with no other stops.' },
  { icon: Plane, title: 'Flight tracking', text: 'Add your flight number and we follow it. If the flight is early or late, the pickup time moves with it.' },
  { icon: Clock, title: 'Free waiting time', text: '30 minutes after domestic arrivals and 60 minutes after international arrivals, counted from the scheduled landing.' },
  { icon: Baby, title: 'Free child seats', text: 'Infant, child and booster seats are provided at no charge when requested at booking.' },
  { icon: Luggage, title: 'Luggage space', text: 'High-roof vans with room for suitcases, plus trailers for skis, bikes, golf bags and group luggage.' },
  { icon: CreditCard, title: 'Fixed price', text: 'Calculated from your addresses and shown before payment. Includes GST, with no surge pricing.' },
]

const FAQS = [
  { q: 'Where does the driver meet me at Auckland Airport?', a: 'For arrivals, your driver meets you in the arrivals area of the international or domestic terminal. If you cannot spot each other, call 022 355 2808. For departures, you are dropped at the terminal doors.' },
  { q: 'How early should I book the pickup for a departing flight?', a: 'As a guide, aim to arrive two hours before a domestic flight closes and three hours before an international departure. Typical drive times are 25–35 minutes from the city and 35–50 minutes from the North Shore, longer at peak hours.' },
  { q: 'Do you serve both the domestic and international terminals?', a: 'Yes. Select the terminal on the booking page, or simply type "Auckland Airport" and choose the right one from the address suggestions.' },
  { q: 'Can I book a return shuttle at the same time?', a: 'Yes. Tick the return option on the booking page, add your return flight and both legs are priced and confirmed together.' },
  { q: 'Is there a charge for late-night flights?', a: 'Pickups between 11pm and 5:59am carry a $15 night surcharge per trip, shown in the price before you pay. All other hours are the standard fixed price.' },
  { q: 'What if I need to cancel?', a: 'Cancel more than 24 hours before pickup for a full refund. Email or call us with your booking reference.' },
]

export default function AirportShuttle() {
  return (
    <div className="bg-white">
      <PageMeta title={META.airport.title} description={META.airport.desc} />

      <PageHero eyebrow="Domestic & international terminals" icon={Plane} title="Auckland Airport Shuttle," accent="Just for You">
        A private shuttle between Auckland Airport and any address in the region. One fixed price for the vehicle, with your flight tracked from take-off to landing.
      </PageHero>

      {/* ── TO / FROM ───────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-max grid md:grid-cols-2 gap-6">
          {[
            {
              icon: PlaneTakeoff, title: 'Shuttle to Auckland Airport',
              text: 'We collect you from home, your hotel or the office at the time you choose and drop you at the departures door.',
              points: ['Pickup from any Auckland address', 'Choose your own pickup time', 'Help loading luggage', 'Dropped at the terminal door'],
            },
            {
              icon: PlaneLanding, title: 'Shuttle from Auckland Airport',
              text: 'Your driver is waiting when you land, whatever time the flight actually arrives, and takes you straight to your door.',
              points: ['Flight tracked automatically', 'Free waiting time after landing', 'Meet and greet at arrivals', 'Direct to your address'],
            },
          ].map(({ icon: Icon, title, text, points }) => (
            <div key={title} className="rounded-3xl border border-slate-200 p-8 sm:p-10">
              <div className="w-14 h-14 rounded-2xl bg-brand flex items-center justify-center mb-6">
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-extrabold text-ink mb-3">{title}</h2>
              <p className="text-slate-600 leading-relaxed mb-6">{text}</p>
              <ul className="space-y-2.5">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-slate-700">
                    <Check className="w-5 h-5 text-brand shrink-0" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── INCLUDED ────────────────────────────────────────── */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <SectionHeading eyebrow="What you get" title="Included in Every Airport Shuttle" />
          <FeatureGrid items={INCLUDED} cols={3} />
        </div>
      </section>

      {/* ── AREAS ───────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeading eyebrow="Typical travel times" title="Airport Shuttles Across Auckland">
            Off-peak drive times to Auckland Airport. Allow extra at morning and evening peaks.
          </SectionHeading>
          <div className="max-w-3xl mx-auto divide-y divide-slate-200 border border-slate-200 rounded-2xl overflow-hidden">
            {Object.entries(AREAS).map(([slug, a]) => (
              <Link
                key={slug}
                to={`/areas/${slug}`}
                className="group flex items-center justify-between gap-4 px-6 py-5 hover:bg-brand-50/60 transition-colors"
              >
                <span className="flex items-center gap-3 font-semibold text-ink">
                  <MapPin className="w-5 h-5 text-brand" /> {a.name}
                </span>
                <span className="flex items-center gap-4 text-slate-600 text-sm">
                  {a.driveTime}
                  <ArrowRight className="w-4 h-4 text-brand group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <SectionHeading eyebrow="Questions" title="Auckland Airport Shuttle FAQs" />
          <Faq items={FAQS} />
        </div>
      </section>

      <CtaBand title="Price Your Airport Shuttle Now" />
    </div>
  )
}

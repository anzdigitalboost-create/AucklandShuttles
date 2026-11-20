import { Link } from 'react-router-dom'
import { Plane, Navigation, Ship, Mountain, Users, Briefcase, ArrowRight, Check, LayoutGrid } from 'lucide-react'
import PageMeta from '../PageMeta'
import { PageHero, SectionHeading, CtaBand } from '../Sections'
import { META } from '../../data/routes'

const SERVICES = [
  {
    icon: Plane, title: 'Auckland Airport Shuttle', path: '/auckland-airport-shuttle',
    text: 'Private transfers to and from the domestic and international terminals, with flight tracking and free waiting time on arrivals.',
    points: ['Any Auckland address', 'Flight tracked', '24 hours a day'],
  },
  {
    icon: Navigation, title: 'Private Shuttle', path: '/book-now',
    text: 'Point-to-point shuttles anywhere in the Auckland region — weddings, concerts, sports fixtures, wineries, or simply getting a group across town.',
    points: ['Your schedule', 'One vehicle, one price', 'Return trips available'],
  },
  {
    icon: Ship, title: 'Cruise Terminal Shuttle', path: '/cruise-transfers',
    text: 'Transfers between Queens Wharf or Princes Wharf and the airport, your hotel or home, timed around boarding and disembarkation.',
    points: ['Cruise luggage welcome', 'Airport connections', 'Hotel pickups'],
  },
  {
    icon: Mountain, title: 'Auckland to Hobbiton', path: '/hobbiton-transfers',
    text: 'A private return day transfer from Auckland to the Hobbiton Movie Set near Matamata, timed to your tour booking.',
    points: ['About 2 hours each way', 'Priced per vehicle', 'Leave when you are ready'],
  },
  {
    icon: Users, title: 'Group Shuttle', path: '/book-now',
    text: 'Sports teams, school groups, wedding parties and tour groups. Each van seats up to 11, and larger groups travel in convoy.',
    points: ['Up to 11 per vehicle', 'Luggage trailers', 'Multiple vehicles on request'],
  },
  {
    icon: Briefcase, title: 'Corporate Shuttle', path: '/book-now',
    text: 'Airport runs and off-site transport for staff and visitors, with emailed confirmations and receipts for every booking.',
    points: ['Receipts for expenses', 'Reliable timing', 'Return trips in one booking'],
  },
]

export default function Services() {
  return (
    <div className="bg-white">
      <PageMeta title={META.services.title} description={META.services.desc} />

      <PageHero eyebrow="Everything we run" icon={LayoutGrid} title="Auckland Shuttle" accent="Services">
        Airport, private, cruise and group shuttles across the Auckland region. Every service is private to your group and priced upfront.
      </PageHero>

      <section className="section-padding">
        <div className="container-max">
          <SectionHeading eyebrow="Choose your shuttle" title="Six Ways We Get Auckland Moving" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(({ icon: Icon, title, text, points, path }) => (
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
                  {path === '/book-now' ? 'Get a price' : 'Learn more'} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FLEET ───────────────────────────────────────────── */}
      <section className="section-padding bg-slate-50">
        <div className="container-max grid lg:grid-cols-2 gap-12 items-center max-w-5xl">
          <img
            src="/images/fleet-van.jpg"
            alt="Toyota Hiace high-roof shuttle van used for Auckland Shuttles transfers"
            className="rounded-3xl shadow-xl w-full h-[420px] object-cover"
            loading="lazy"
          />
          <div>
            <span className="eyebrow">The fleet</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink mt-2 mb-5 tracking-tight">Vans Built for Airport Runs</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              Late-model Toyota Hiace high-roof vans with air conditioning, seating for up to 11 passengers and space for everyone's luggage.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Trailers are available for oversized gear and group luggage. Mention skis, bikes, surfboards or golf bags when you book.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  )
}

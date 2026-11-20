import { Shield, Clock, Heart, CreditCard, Info } from 'lucide-react'
import PageMeta from '../PageMeta'
import GoogleReviews from '../GoogleReviews'
import { PageHero, SectionHeading, FeatureGrid, CtaBand } from '../Sections'
import { META } from '../../data/routes'

const VALUES = [
  { icon: Shield, title: 'Licensed and insured', text: 'Professional drivers and commercially insured vehicles on every trip.' },
  { icon: Clock, title: 'On time, tracked', text: 'We follow your flight and plan pickups around real traffic, not best-case guesses.' },
  { icon: CreditCard, title: 'Honest pricing', text: 'The price you see when you book is the price you pay. No surge, no meter.' },
  { icon: Heart, title: 'Local to Auckland', text: 'A New Zealand business based in Auckland, driving these roads every day.' },
]

export default function About() {
  return (
    <div className="bg-white">
      <PageMeta title={META.about.title} description={META.about.desc} />

      <PageHero eyebrow="Who we are" icon={Info} title="About" accent="Auckland Shuttles">
        A straightforward shuttle service for Auckland: private vehicles, fixed prices and online booking that takes about a minute.
      </PageHero>

      <section className="section-padding">
        <div className="container-max grid lg:grid-cols-2 gap-12 items-center max-w-5xl">
          <div>
            <span className="eyebrow">Our story</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink mt-2 mb-5 tracking-tight">Operated by Book A Ride NZ</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              Auckland Shuttles is run by Book A Ride NZ, an Auckland transfer company. The drivers, vehicles and booking system are the same ones behind Book A Ride's airport, cruise and private transfers.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              That is why your booking confirmation and receipt arrive from Book A Ride NZ, and why the Google reviews shown on this site are Book A Ride's reviews.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              We built this site to do one thing well: give anyone in Auckland a fast, clear price for a shuttle and a simple way to book it.
            </p>
          </div>
          <img
            src="/images/fleet-van.jpg"
            alt="Toyota Hiace high-roof van from the Auckland Shuttles fleet"
            className="rounded-3xl shadow-xl w-full h-[440px] object-cover"
            loading="lazy"
          />
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <SectionHeading eyebrow="How we work" title="What You Can Expect" />
          <FeatureGrid items={VALUES} cols={4} />
        </div>
      </section>

      <GoogleReviews />

      <CtaBand />
    </div>
  )
}

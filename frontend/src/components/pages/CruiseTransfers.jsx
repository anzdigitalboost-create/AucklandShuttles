import { Ship, Plane, Hotel, Clock, Luggage, Users } from 'lucide-react'
import PageMeta from '../PageMeta'
import { PageHero, SectionHeading, FeatureGrid, Faq, CtaBand } from '../Sections'
import { META } from '../../data/routes'

const ROUTES = [
  { icon: Plane, title: 'Airport to cruise terminal', text: 'Land at Auckland Airport and ride straight to Queens Wharf or Princes Wharf. Allow 30–45 minutes for the drive into the city.' },
  { icon: Ship, title: 'Cruise terminal to airport', text: 'Step off the ship and into your shuttle. We plan the pickup around your disembarkation time and your flight.' },
  { icon: Hotel, title: 'Hotel and home transfers', text: 'Staying a night before or after the cruise? We run between the terminals and any Auckland hotel or home address.' },
]

const FEATURES = [
  { icon: Luggage, title: 'Space for cruise luggage', text: 'Cruise bags are bigger than flight bags. Our high-roof vans and trailers are sized for them.' },
  { icon: Clock, title: 'Timed to the ship', text: 'Tell us your boarding window or disembarkation time and we work the pickup back from there.' },
  { icon: Users, title: 'Travel as one group', text: 'Up to 11 passengers per vehicle, so families and friends sailing together arrive together.' },
]

const FAQS = [
  { q: 'Which Auckland cruise terminals do you serve?', a: 'Both city cruise berths: Queens Wharf and Princes Wharf, at the bottom of Queen Street. Your cruise line will confirm which one your ship is using.' },
  { q: 'How long is the drive from Auckland Airport to the cruise terminal?', a: 'Usually 30–45 minutes, depending on traffic into the city. On sailing days, we suggest leaving a generous buffer before final boarding.' },
  { q: 'What time should I book the pickup after disembarking?', a: 'Use the disembarkation time your cruise line gives you and add time to collect bags. If the ship runs late, call us on 022 355 2808 and we will adjust.' },
  { q: 'Can you fit all our luggage?', a: 'Yes. Enter your passenger and bag numbers when booking. For very large loads we add a luggage trailer.' },
]

export default function CruiseTransfers() {
  return (
    <div className="bg-white">
      <PageMeta title={META.cruise.title} description={META.cruise.desc} />

      <PageHero eyebrow="Queens Wharf & Princes Wharf" icon={Ship} title="Auckland Cruise" accent="Terminal Shuttle">
        Private shuttles between Auckland's cruise terminals, the airport and city hotels. One vehicle for your group and all its luggage.
      </PageHero>

      <section className="section-padding">
        <div className="container-max">
          <SectionHeading eyebrow="Cruise day routes" title="Port, Airport and Hotel — Connected" />
          <FeatureGrid items={ROUTES} cols={3} />
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <SectionHeading eyebrow="Made for cruise passengers" title="Built Around Your Sailing" />
          <FeatureGrid items={FEATURES} cols={3} />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <SectionHeading eyebrow="Questions" title="Cruise Shuttle FAQs" />
          <Faq items={FAQS} />
        </div>
      </section>

      <CtaBand title="Price Your Cruise Shuttle" />
    </div>
  )
}

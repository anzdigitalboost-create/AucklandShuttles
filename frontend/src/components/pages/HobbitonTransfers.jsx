import { Mountain, Clock, Users, CalendarCheck, DoorOpen, Route } from 'lucide-react'
import PageMeta from '../PageMeta'
import { PageHero, SectionHeading, FeatureGrid, Faq, CtaBand } from '../Sections'
import { META } from '../../data/routes'

const FEATURES = [
  { icon: DoorOpen, title: 'Door-to-door from Auckland', text: 'Pickup from your hotel, home, the airport or the cruise terminal — wherever your day starts.' },
  { icon: Clock, title: 'Timed to your tour', text: 'Tell us your Hobbiton tour time and we plan the departure so you arrive with time to spare.' },
  { icon: Users, title: 'Priced per vehicle', text: 'One fixed price covers the vehicle for up to 11 passengers, which suits families and groups.' },
  { icon: Route, title: 'About two hours each way', text: 'Hobbiton is roughly 175 km south of Auckland, near Matamata, through Waikato farmland.' },
  { icon: CalendarCheck, title: 'Your own timetable', text: 'No coach schedule to keep. Head back to Auckland when your group is ready.' },
  { icon: Mountain, title: 'Add a stop', text: 'Want to continue to Rotorua or stop in Hamilton or Cambridge? Call us and we will quote it.' },
]

const FAQS = [
  { q: 'Are Hobbiton tour tickets included?', a: 'No. Our price covers private transport only. Book your Hobbiton Movie Set tour directly with Hobbiton, then give us the tour time.' },
  { q: 'How long does the day take?', a: 'Allow about two hours each way for the drive plus your tour, so around seven to eight hours door to door from central Auckland.' },
  { q: 'How do I book an Auckland to Hobbiton shuttle?', a: 'Enter your Auckland pickup address and "Hobbiton Movie Set" as the destination on the booking page, tick return, and you will see the fixed price.' },
  { q: 'Can you pick up from the cruise terminal or airport?', a: 'Yes. Cruise passengers should allow for the ship\'s all-aboard time — call us on 022 355 2808 if the timing is tight and we will check it with you.' },
]

export default function HobbitonTransfers() {
  return (
    <div className="bg-white">
      <PageMeta title={META.hobbiton.title} description={META.hobbiton.desc} />

      <PageHero eyebrow="Private day transfer to Matamata" icon={Mountain} title="Auckland to Hobbiton" accent="Shuttle">
        A private return shuttle from Auckland to the Hobbiton Movie Set. Your vehicle, your schedule, one fixed price for the group.
      </PageHero>

      <section className="section-padding">
        <div className="container-max">
          <SectionHeading eyebrow="How the day works" title="A Private Shuttle to the Shire" />
          <FeatureGrid items={FEATURES} cols={3} />
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <SectionHeading eyebrow="Questions" title="Hobbiton Shuttle FAQs" />
          <Faq items={FAQS} />
        </div>
      </section>

      <CtaBand title="Price Your Hobbiton Shuttle" />
    </div>
  )
}

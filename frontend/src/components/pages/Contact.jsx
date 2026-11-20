import { Link } from 'react-router-dom'
import { Mail, MapPin, Clock, Calendar, ArrowRight, MessageCircle, Phone } from 'lucide-react'
import PageMeta from '../PageMeta'
import BookingReassurance from '../BookingReassurance'
import { PageHero } from '../Sections'
import { META } from '../../data/routes'
import { PHONE_DISPLAY, PHONE_TEL, EMAIL } from '../../config/siteConfig'

export default function Contact() {
  return (
    <div className="bg-white">
      <PageMeta title={META.contact.title} description={META.contact.desc} />

      <PageHero eyebrow="We answer every day of the year" icon={MessageCircle} title="Contact" accent="Auckland Shuttles">
        For a price or availability, the booking page is fastest. For anything else, call or email us.
      </PageHero>

      <section className="section-padding bg-slate-50">
        <div className="container-max max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Link to="/book-now" className="group block bg-ink rounded-3xl p-8 hover:shadow-2xl transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                <Calendar className="w-6 h-6 text-sun" />
              </div>
              <h2 className="text-xl font-bold text-white mb-2">Book Online</h2>
              <p className="text-white/70 leading-relaxed mb-5">Live pricing and instant email confirmation, any time of day.</p>
              <span className="inline-flex items-center gap-2 text-sun font-semibold group-hover:gap-3 transition-all">
                Get an instant price <ArrowRight className="w-5 h-5" />
              </span>
            </Link>

            <a href={`tel:${PHONE_TEL}`} className="group block bg-white rounded-3xl p-8 border border-slate-200 hover:border-brand hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-5">
                <Phone className="w-6 h-6 text-brand" />
              </div>
              <h2 className="text-xl font-bold text-ink mb-2">Call Us</h2>
              <p className="text-slate-600 leading-relaxed mb-5">Group bookings, special requests or a change to your trip.</p>
              <span className="inline-flex items-center gap-2 text-brand font-semibold group-hover:gap-3 transition-all">
                {PHONE_DISPLAY} <ArrowRight className="w-5 h-5" />
              </span>
            </a>

            <a href={`mailto:${EMAIL}`} className="group block bg-white rounded-3xl p-8 border border-slate-200 hover:border-brand hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-5">
                <Mail className="w-6 h-6 text-brand" />
              </div>
              <h2 className="text-xl font-bold text-ink mb-2">Email Us</h2>
              <p className="text-slate-600 leading-relaxed mb-5">Include your booking reference if you already have one.</p>
              <span className="inline-flex items-center gap-2 text-brand font-semibold group-hover:gap-3 transition-all break-all">
                {EMAIL} <ArrowRight className="w-5 h-5 shrink-0" />
              </span>
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-white border border-slate-200">
              <MapPin className="w-6 h-6 text-brand shrink-0" />
              <div>
                <h3 className="font-semibold text-ink font-sans">Auckland, New Zealand</h3>
                <p className="text-slate-500 text-sm">Serving the whole Auckland region, the cruise terminals and Hobbiton</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-white border border-slate-200">
              <Clock className="w-6 h-6 text-brand shrink-0" />
              <div>
                <h3 className="font-semibold text-ink font-sans">Shuttles run 24/7</h3>
                <p className="text-slate-500 text-sm">Early flights, late arrivals and public holidays included</p>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-slate-500 mt-8">
            Auckland Shuttles is operated by Book A Ride NZ, so replies and confirmations come from Book A Ride NZ.
          </p>
          <BookingReassurance className="mt-8" />
        </div>
      </section>
    </div>
  )
}

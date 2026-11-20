// Central SEO route manifest — consumed by scripts/prerender.mjs at build
// time to emit a static, crawlable index.html per route (unique title,
// description, canonical, hreflang) plus sitemap.xml. Titles/descriptions
// for the static pages mirror the <PageMeta> values inside each page
// component — keep them in sync when page meta changes.
import { AREAS } from './areas.js'

export const META = {
  home: {
    title: null, // default site title
    desc: 'Auckland shuttle service to and from Auckland Airport. Private door-to-door shuttles across Auckland, 24/7, fixed prices and flight tracking. Book online in 60 seconds.',
  },
  bookNow: {
    title: 'Book an Auckland Shuttle Online',
    desc: 'Book your Auckland shuttle in 60 seconds. Live fixed pricing, secure card payment, flight tracking and instant email confirmation.',
  },
  airport: {
    title: 'Auckland Airport Shuttle — Private Door-to-Door Transfers',
    desc: 'Private Auckland Airport shuttle to and from any Auckland address. Your own vehicle, no shared stops, flight tracking, free child seats and one fixed price. Book online 24/7.',
  },
  services: {
    title: 'Auckland Shuttle Services — Airport, Private, Cruise & Group',
    desc: 'Auckland shuttle services: airport shuttles, private point-to-point shuttles, cruise terminal transfers, Hobbiton day trips and group transport for up to 11 passengers per vehicle.',
  },
  cruise: {
    title: 'Auckland Cruise Terminal Shuttle — Port to Airport Transfers',
    desc: 'Private shuttle between Auckland cruise terminals, Auckland Airport and city hotels. Luggage-friendly vans for up to 11 passengers, fixed prices, book online.',
  },
  hobbiton: {
    title: 'Auckland to Hobbiton Shuttle — Private Day Transfer',
    desc: 'Private shuttle from Auckland to the Hobbiton Movie Set in Matamata and back. Your own vehicle and schedule, one fixed price per vehicle for up to 11 passengers.',
  },
  about: {
    title: 'About Auckland Shuttles',
    desc: 'Auckland Shuttles is the Auckland airport and private shuttle service operated by Book A Ride NZ — local drivers, modern Toyota Hiace vans and online booking with fixed prices.',
  },
  contact: {
    title: 'Contact Auckland Shuttles',
    desc: 'Contact Auckland Shuttles on 022 355 2808 or by email. Book online 24/7 for an instant fixed price on any Auckland shuttle.',
  },
}

const STATIC_ROUTES = [
  { path: '/', ...META.home, priority: 1.0, changefreq: 'weekly' },
  { path: '/auckland-airport-shuttle', ...META.airport, priority: 0.9, changefreq: 'monthly' },
  { path: '/book-now', ...META.bookNow, priority: 0.9, changefreq: 'monthly' },
  { path: '/services', ...META.services, priority: 0.8, changefreq: 'monthly' },
  { path: '/cruise-transfers', ...META.cruise, priority: 0.7, changefreq: 'monthly' },
  { path: '/hobbiton-transfers', ...META.hobbiton, priority: 0.7, changefreq: 'monthly' },
  { path: '/about', ...META.about, priority: 0.5, changefreq: 'yearly' },
  { path: '/contact', ...META.contact, priority: 0.5, changefreq: 'yearly' },
]

const AREA_ROUTES = Object.entries(AREAS).map(([slug, a]) => ({
  path: `/areas/${slug}`,
  title: a.seoTitle,
  desc: a.seoDesc,
  priority: 0.8,
  changefreq: 'monthly',
}))

export const ROUTES = [...STATIC_ROUTES, ...AREA_ROUTES]

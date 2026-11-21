// Site configuration for aucklandshuttles.co.nz.
//
// Imported by the mirrored booking page (src/pages/BookNow.jsx) and SEO.jsx,
// so the default export must keep the same shape as the bookaride.co.nz one.
export const PHONE_DISPLAY = '022 355 2808'
export const PHONE_TEL = '+64223552808'
export const EMAIL = 'info@bookaride.co.nz'

const siteConfig = {
  siteName: 'Auckland Shuttles',
  domain: 'aucklandshuttles.co.nz',
  siteUrl: 'https://www.aucklandshuttles.co.nz',
  email: EMAIL,
  phone: PHONE_TEL,
  phoneDisplay: PHONE_DISPLAY,
  operator: 'Gap Digital',
  tagline: 'Auckland Airport Shuttle & Private Shuttle Service',
  description:
    'Auckland shuttle service to and from Auckland Airport. Private door-to-door shuttles across Auckland, 24/7, fixed prices, flight tracking. Book online in 60 seconds.',
  keywords:
    'Auckland shuttle, Auckland shuttles, Auckland airport shuttle, airport shuttle Auckland, shuttle to Auckland airport, private shuttle Auckland',
  address: 'Auckland, New Zealand',
  logo: '/favicon.svg',
  favicon: '/favicon.svg',
  primaryColor: 'brand',
}

export const getSiteConfig = () => siteConfig

export default siteConfig

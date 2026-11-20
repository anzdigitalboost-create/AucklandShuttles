import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './components/pages/Home'
import AirportShuttle from './components/pages/AirportShuttle'
import Services from './components/pages/Services'
import AreaLanding, { AREAS } from './components/pages/AreaLanding'
import CruiseTransfers from './components/pages/CruiseTransfers'
import HobbitonTransfers from './components/pages/HobbitonTransfers'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Terms from './components/pages/Terms'
import Privacy from './components/pages/Privacy'
import NotFound from './components/pages/NotFound'
import BookNow from './pages/BookNow'
import PaymentSuccess from './pages/PaymentSuccess'
import { Toaster } from './components/ui/sonner'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <Toaster />
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="auckland-airport-shuttle" element={<AirportShuttle />} />
          <Route path="services" element={<Services />} />
          <Route path="cruise-transfers" element={<CruiseTransfers />} />
          <Route path="hobbiton-transfers" element={<HobbitonTransfers />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="terms-and-conditions" element={<Terms />} />
          <Route path="privacy-policy" element={<Privacy />} />

          {/* Booking flow — mirrored verbatim from bookaride.co.nz */}
          <Route path="book-now" element={<BookNow />} />
          <Route path="payment/success" element={<PaymentSuccess />} />
          <Route path="payment-success" element={<PaymentSuccess />} />

          {/* Area SEO landing pages — data-driven from src/data/areas.js */}
          {Object.keys(AREAS).map((slug) => (
            <Route key={slug} path={`areas/${slug}`} element={<AreaLanding area={slug} />} />
          ))}

          <Route path="airport-shuttle" element={<Navigate to="/auckland-airport-shuttle" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

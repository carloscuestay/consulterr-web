import { Suspense, lazy, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

const Nosotros = lazy(() => import('./pages/Nosotros'))
const Servicios = lazy(() => import('./pages/Servicios'))
const ServicioDetalle = lazy(() => import('./pages/ServicioDetalle'))
const Metodologia = lazy(() => import('./pages/Metodologia'))
const Gobierno = lazy(() => import('./pages/Gobierno'))
const Contacto = lazy(() => import('./pages/Contacto'))
const Legal = lazy(() => import('./pages/Legal'))
const NoEncontrado = lazy(() => import('./pages/NoEncontrado'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])
  return null
}

function Cargando() {
  return (
    <div className="grid min-h-[50vh] place-items-center" role="status" aria-live="polite">
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-marina-200 border-t-marina-600" />
      <span className="sr-only">Cargando…</span>
    </div>
  )
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main id="contenido" className="flex-1">
        <Suspense fallback={<Cargando />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/servicios/:slug" element={<ServicioDetalle />} />
            <Route path="/metodologia" element={<Metodologia />} />
            <Route path="/gobierno-corporativo" element={<Gobierno />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/legal/:doc" element={<Legal />} />
            <Route path="*" element={<NoEncontrado />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo'
import Icon from './Icon'
import { servicios } from '../data/servicios'
import { empresa } from '../data/empresa'

const NAV = [
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/servicios', label: 'Servicios', mega: true },
  { to: '/metodologia', label: 'Metodología' },
  { to: '/gobierno-corporativo', label: 'Gobierno y cumplimiento' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [mega, setMega] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setMega(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60]
                   focus:rounded-full focus:bg-marina-800 focus:px-5 focus:py-2.5 focus:text-sm
                   focus:font-semibold focus:text-white"
      >
        Saltar al contenido
      </a>

      {/* Barra institucional superior */}
      <div className="hidden bg-marina-900 text-marina-200 lg:block">
        <div className="container-x flex h-9 items-center justify-between text-[12px]">
          <p className="flex items-center gap-2">
            <Icon name="map-pin" className="h-3.5 w-3.5 text-marina-400" />
            {empresa.domicilio.ciudad}, {empresa.domicilio.departamento} — {empresa.domicilio.pais}
          </p>
          <div className="flex items-center gap-6">
            <a href={`mailto:${empresa.contacto.email}`} className="link-underline flex items-center gap-2 hover:text-white">
              <Icon name="mail" className="h-3.5 w-3.5 text-marina-400" />
              {empresa.contacto.email}
            </a>
            <span className="h-3 w-px bg-marina-700" />
            <span className="text-marina-400">{empresa.naturaleza} · {empresa.marcoLegal}</span>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? 'border-marina-200 bg-white/90 backdrop-blur-xl shadow-[0_1px_20px_-8px_rgba(26,63,107,.25)]'
            : 'border-transparent bg-white'
        }`}
        onMouseLeave={() => setMega(false)}
      >
        <div className="container-x flex h-[72px] items-center justify-between gap-6">
          <Link to="/" className="shrink-0" aria-label="Inicio — CONSULTERR S.A.S.">
            <Logo variant="compacto" className="h-12 w-auto" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
            {NAV.map((item) => (
              <div key={item.to} className="relative">
                <NavLink
                  to={item.to}
                  onMouseEnter={() => setMega(!!item.mega)}
                  className={({ isActive }) =>
                    `flex items-center gap-1 rounded-full px-4 py-2 text-[14px] font-medium transition-colors ${
                      isActive ? 'text-marina-600' : 'text-marina-800 hover:text-marina-600'
                    }`
                  }
                >
                  {item.label}
                  {item.mega && (
                    <Icon name="chevron-down" className={`h-3.5 w-3.5 transition-transform ${mega ? 'rotate-180' : ''}`} />
                  )}
                </NavLink>
              </div>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link to="/contacto" className="btn-primary !px-5 !py-2.5">
              Solicitar propuesta
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-marina-200 p-2.5 text-marina-800 lg:hidden"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            <Icon name={open ? 'x' : 'menu'} className="h-5 w-5" />
          </button>
        </div>

        {/* Mega-menú de servicios */}
        <div
          className={`absolute inset-x-0 top-full hidden origin-top border-b border-marina-200 bg-white shadow-lift transition-all duration-200 lg:block ${
            mega ? 'visible opacity-100' : 'invisible -translate-y-1 opacity-0'
          }`}
          onMouseEnter={() => setMega(true)}
        >
          <div className="container-x grid grid-cols-12 gap-8 py-8">
            <div className="col-span-3 border-r border-marina-100 pr-6">
              <p className="eyebrow">Líneas de servicio</p>
              <h3 className="mt-3 text-xl">Siete especialidades, un solo expediente</h3>
              <p className="mt-3 text-sm leading-relaxed text-marina-700/80">
                El objeto social de la sociedad, organizado en frentes de trabajo con equipo propio.
              </p>
              <Link to="/servicios" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-marina-600 hover:gap-2.5 transition-all">
                Ver todas <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
            </div>
            <ul className="col-span-9 grid grid-cols-2 gap-x-6 gap-y-1 xl:grid-cols-3">
              {servicios.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/servicios/${s.slug}`}
                    className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-marina-50"
                  >
                    <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-marina-100 text-marina-600 transition-colors group-hover:bg-marina-600 group-hover:text-white">
                      <Icon name={s.icono} className="h-4.5 w-4.5" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold leading-snug text-marina-900">{s.corto}</span>
                      <span className="mt-0.5 block text-[12.5px] leading-snug text-marina-700/70 line-clamp-2">
                        {s.resumen}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      {/* Menú móvil */}
      <div
        className={`fixed inset-0 z-[55] lg:hidden ${open ? '' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-marina-950/40 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setOpen(false)}
        />
        <nav
          className={`absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col overflow-y-auto bg-white transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
          aria-label="Menú móvil"
        >
          <div className="flex items-center justify-between border-b border-marina-100 px-5 py-4">
            <Logo variant="compacto" className="h-10 w-auto" />
            <button onClick={() => setOpen(false)} aria-label="Cerrar menú" className="p-2 text-marina-800">
              <Icon name="x" className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 px-5 py-6">
            <ul className="space-y-1">
              {NAV.map((i) => (
                <li key={i.to}>
                  <NavLink
                    to={i.to}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 text-base font-medium ${
                        isActive ? 'bg-marina-50 text-marina-600' : 'text-marina-900'
                      }`
                    }
                  >
                    {i.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <p className="mt-8 px-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-marina-500">
              Líneas de servicio
            </p>
            <ul className="mt-2 space-y-0.5">
              {servicios.map((s) => (
                <li key={s.slug}>
                  <Link to={`/servicios/${s.slug}`} className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm text-marina-800">
                    <Icon name={s.icono} className="h-4 w-4 text-marina-500" />
                    {s.corto}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-marina-100 p-5">
            <Link to="/contacto" className="btn-primary w-full">
              Solicitar propuesta <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}

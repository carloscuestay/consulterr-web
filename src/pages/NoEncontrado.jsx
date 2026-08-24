import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import Icon from '../components/Icon'
import { useSeo } from '../hooks/useSeo'
import { servicios } from '../data/servicios'

export default function NoEncontrado() {
  useSeo({
    title: 'Página no encontrada',
    description: 'La página solicitada no existe o fue movida.',
    path: '/404',
  })

  return (
    <section className="relative overflow-hidden bg-marina-950 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <Logo variant="isotipo" tone="blanco" className="absolute -right-20 top-1/2 h-[520px] w-auto -translate-y-1/2" />
      </div>
      <div className="container-x relative flex min-h-[70vh] flex-col justify-center py-20">
        <p className="font-serif text-[5rem] leading-none text-marina-700 sm:text-[8rem]">404</p>
        <h1 className="mt-4 max-w-2xl text-3xl text-white sm:text-5xl">
          Esta ruta no existe en el sitio
        </h1>
        <p className="mt-5 max-w-xl text-marina-200/85">
          Es posible que el enlace esté desactualizado o que la dirección se haya escrito de otra
          forma. Puede volver al inicio o ir directamente a una línea de servicio.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link to="/" className="btn-light">
            Volver al inicio
            <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
          <Link to="/contacto" className="btn-outline-light">Contactar</Link>
        </div>
        <ul className="mt-12 flex flex-wrap gap-2 border-t border-white/10 pt-8">
          {servicios.map((s) => (
            <li key={s.slug}>
              <Link
                to={`/servicios/${s.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[13px] text-marina-200 transition-colors hover:border-white/40 hover:bg-white/5 hover:text-white"
              >
                <Icon name={s.icono} className="h-3.5 w-3.5" />
                {s.corto}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

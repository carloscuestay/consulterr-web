import { Link } from 'react-router-dom'
import Logo from './Logo'
import Icon from './Icon'
import SocialIcon from './SocialIcon'
import { empresa } from '../data/empresa'
import { servicios } from '../data/servicios'

const REDES = [
  { key: 'linkedin', label: 'LinkedIn' },
  { key: 'instagram', label: 'Instagram' },
  { key: 'facebook', label: 'Facebook' },
  { key: 'x', label: 'X' },
  { key: 'tiktok', label: 'TikTok' },
  { key: 'youtube', label: 'YouTube' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-marina-950 text-marina-200">
      <div className="container-x grid gap-12 py-16 lg:grid-cols-12 lg:gap-8 lg:py-20">
        <div className="lg:col-span-4">
          <Logo tone="blanco" className="h-16 w-auto" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-marina-300/80">
            {empresa.razonSocial} — {empresa.naturaleza} constituida conforme a la{' '}
            {empresa.marcoLegal}, con domicilio principal en {empresa.domicilio.ciudad}.
          </p>
          <div className="mt-6 flex gap-2.5">
            {REDES.map((r) => (
              <a
                key={r.key}
                href={empresa.redes[r.key]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={r.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/12 text-marina-300 transition-colors hover:border-white/40 hover:bg-white/5 hover:text-white"
              >
                <SocialIcon name={r.key} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">Servicios</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {servicios.map((s) => (
              <li key={s.slug}>
                <Link to={`/servicios/${s.slug}`} className="text-marina-300/80 transition-colors hover:text-white">
                  {s.corto}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">Compañía</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {[
              ['/nosotros', 'Nosotros'],
              ['/metodologia', 'Metodología'],
              ['/gobierno-corporativo', 'Gobierno corporativo'],
              ['/contacto', 'Contacto'],
              ['/legal/tratamiento-de-datos', 'Tratamiento de datos'],
              ['/legal/terminos', 'Términos de uso'],
              ['/legal/cookies', 'Política de cookies'],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-marina-300/80 transition-colors hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">Contacto</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <Icon name="map-pin" className="mt-0.5 h-4 w-4 shrink-0 text-marina-500" />
              <span className="text-marina-300/80">
                {empresa.domicilio.direccion}
                <br />
                {empresa.domicilio.ciudad}, {empresa.domicilio.departamento}
              </span>
            </li>
            <li className="flex gap-3">
              <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-marina-500" />
              <a href={`mailto:${empresa.contacto.email}`} className="text-marina-300/80 hover:text-white">
                {empresa.contacto.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Icon name="clock" className="mt-0.5 h-4 w-4 shrink-0 text-marina-500" />
              <span className="text-marina-300/80">{empresa.contacto.horario}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-6 text-[12.5px] text-marina-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {empresa.sigla} Todos los derechos reservados.
          </p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>NIT: {empresa.registro.nit}</span>
            <span className="hidden h-3 w-px bg-white/15 sm:block" />
            <span>Matrícula mercantil: {empresa.registro.matricula}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

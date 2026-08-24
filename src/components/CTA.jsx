import { Link } from 'react-router-dom'
import Icon from './Icon'
import Logo from './Logo'
import Reveal from './Reveal'
import { empresa } from '../data/empresa'

export default function CTA({
  titulo = '¿Tiene un proceso, una obra o un plan que necesita respaldo técnico?',
  texto = 'Cuéntenos el alcance y le devolvemos una propuesta con equipo, cronograma y entregables definidos.',
}) {
  return (
    <section className="relative overflow-hidden bg-marina-800 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <Logo variant="isotipo" tone="blanco" className="absolute -bottom-32 -left-16 h-[460px] w-auto" />
      </div>
      <div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: 'radial-gradient(48rem 24rem at 90% 0%, rgba(92,141,184,.45), transparent 65%)' }}
      />
      <div className="container-x relative py-16 sm:py-20">
        <Reveal className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-[1.75rem] leading-tight text-white sm:text-4xl">{titulo}</h2>
            <p className="mt-4 text-marina-200/85">{texto}</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link to="/contacto" className="btn-light">
              Solicitar propuesta
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
            <a href={`mailto:${empresa.contacto.email}`} className="btn-outline-light">
              <Icon name="mail" className="h-4 w-4" />
              Escribirnos
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

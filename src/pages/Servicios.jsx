import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import CTA from '../components/CTA'
import { useSeo } from '../hooks/useSeo'
import { servicios } from '../data/servicios'

export default function Servicios() {
  useSeo({
    title: 'Servicios',
    description:
      'Siete líneas de especialidad: hacienda pública, tecnología e IA, planeación territorial, servicios públicos y ambiente, consultoría jurídica, consultoría financiera y social, e interventoría y supervisión.',
    path: '/servicios',
  })

  return (
    <>
      <PageHero
        eyebrow="Objeto social"
        title="Siete líneas de especialidad, un solo estándar de entrega"
        lead="Cada línea corresponde a un literal del objeto social de la sociedad. Debajo encontrará el alcance completo, los entregables típicos y el marco normativo que rige cada frente de trabajo."
      >
        <div className="mt-10 flex flex-wrap gap-2">
          {servicios.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="rounded-full border border-white/20 px-4 py-2 text-[13px] font-medium text-marina-200 transition-colors hover:border-white/50 hover:bg-white/10 hover:text-white"
            >
              <span className="mr-2 font-semibold text-marina-400">{s.id}</span>
              {s.corto}
            </a>
          ))}
        </div>
      </PageHero>

      <div className="divide-y divide-marina-100">
        {servicios.map((s, idx) => (
          <section
            key={s.slug}
            id={s.slug}
            className={`scroll-mt-28 py-16 sm:py-20 ${idx % 2 === 1 ? 'bg-marina-50/60' : ''}`}
          >
            <div className="container-x grid gap-12 lg:grid-cols-12">
              <Reveal className="lg:col-span-5">
                <div className="flex items-center gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-marina-600 text-white">
                    <Icon name={s.icono} className="h-6 w-6" />
                  </span>
                  <span className="font-serif text-4xl text-marina-200">{s.id}</span>
                </div>
                <h2 className="mt-6 text-[1.75rem] leading-[1.18] sm:text-[2.15rem]">{s.titulo}</h2>
                <p className="mt-5 text-[15.5px] leading-relaxed text-marina-700/85">{s.resumen}</p>

                <div className="mt-7 rounded-xl border-l-2 border-marina-400 bg-white/70 py-4 pl-5 pr-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-marina-500">
                    El problema que resolvemos
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-marina-800">{s.dolor}</p>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {s.normas.map((n) => (
                    <span
                      key={n}
                      className="rounded-md bg-marina-100 px-2.5 py-1 text-[11.5px] font-medium text-marina-700"
                    >
                      {n}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/servicios/${s.slug}`}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-marina-600 transition-all hover:gap-3"
                >
                  Ver ficha completa
                  <Icon name="arrow-right" className="h-4 w-4" />
                </Link>
              </Reveal>

              <Reveal delay={120} className="lg:col-span-7">
                <div className="rounded-2xl border border-marina-200/70 bg-white p-7 shadow-card sm:p-8">
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-marina-500">
                    Entregables típicos
                  </h3>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {s.entregables.map((e) => (
                      <li key={e} className="flex gap-3">
                        <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-marina-500" />
                        <span className="text-[14px] leading-snug text-marina-800">{e}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="mt-9 text-[11px] font-semibold uppercase tracking-[0.16em] text-marina-500">
                    Alcance según el objeto social
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {s.items.slice(0, 5).map((it) => (
                      <li key={it} className="flex gap-3 text-[13.5px] leading-relaxed text-marina-700/85">
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-marina-400" />
                        {it}
                      </li>
                    ))}
                  </ul>
                  {s.items.length > 5 && (
                    <Link
                      to={`/servicios/${s.slug}`}
                      className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-marina-600 hover:underline"
                    >
                      +{s.items.length - 5} actividades más
                      <Icon name="chevron-right" className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </div>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      <CTA
        titulo="¿Necesita más de una de estas líneas a la vez?"
        texto="Es lo habitual. Definimos un solo equipo, un solo cronograma y un único responsable frente a la entidad."
      />
    </>
  )
}

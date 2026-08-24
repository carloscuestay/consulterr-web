import { Link, Navigate, useParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import CTA from '../components/CTA'
import { useSeo } from '../hooks/useSeo'
import { getServicio, servicios, metodologia } from '../data/servicios'

export default function ServicioDetalle() {
  const { slug } = useParams()
  const s = getServicio(slug)

  useSeo({
    title: s ? s.titulo : 'Servicio',
    description: s ? s.resumen : '',
    path: `/servicios/${slug}`,
  })

  if (!s) return <Navigate to="/servicios" replace />

  const otros = servicios.filter((x) => x.slug !== s.slug).slice(0, 3)

  return (
    <>
      <PageHero
        eyebrow={`Línea ${s.id} · Objeto social`}
        title={s.titulo}
        lead={s.resumen}
      >
        <div className="mt-8 flex flex-wrap gap-2">
          {s.normas.map((n) => (
            <span
              key={n}
              className="rounded-md border border-white/20 px-3 py-1.5 text-[12px] font-medium text-marina-200"
            >
              {n}
            </span>
          ))}
        </div>
      </PageHero>

      {/* Migas */}
      <nav aria-label="Ruta de navegación" className="border-b border-marina-100 bg-marina-50/50">
        <div className="container-x flex items-center gap-2 py-3 text-[13px] text-marina-600">
          <Link to="/" className="hover:text-marina-800">Inicio</Link>
          <Icon name="chevron-right" className="h-3.5 w-3.5 text-marina-400" />
          <Link to="/servicios" className="hover:text-marina-800">Servicios</Link>
          <Icon name="chevron-right" className="h-3.5 w-3.5 text-marina-400" />
          <span className="truncate font-medium text-marina-900">{s.corto}</span>
        </div>
      </nav>

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <div className="rounded-2xl border-l-2 border-marina-500 bg-marina-50/70 py-6 pl-7 pr-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-marina-500">
                  El problema que resolvemos
                </p>
                <p className="mt-3 text-[16px] leading-relaxed text-marina-800">{s.dolor}</p>
              </div>
            </Reveal>

            <Reveal delay={80} className="mt-12">
              <h2 className="text-[1.65rem] sm:text-[2rem]">Alcance completo</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-marina-700/85">
                Transcripción del literal {s.id} del Artículo 4° del documento privado de
                constitución de la sociedad.
              </p>
              <ul className="mt-7 space-y-4">
                {s.items.map((it, i) => (
                  <li key={it} className="flex gap-4 border-b border-marina-100 pb-4 last:border-0">
                    <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-md bg-marina-100 text-[11px] font-bold text-marina-600">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[14.5px] leading-relaxed text-marina-800">{it}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={80} className="mt-14">
              <h2 className="text-[1.65rem] sm:text-[2rem]">Cómo se ejecuta el encargo</h2>
              <ol className="mt-7 grid gap-4 sm:grid-cols-2">
                {metodologia.map((m) => (
                  <li key={m.paso} className="rounded-xl border border-marina-200/70 bg-white p-5 shadow-card">
                    <span className="font-serif text-lg text-marina-400">{m.paso}</span>
                    <h3 className="mt-2 text-[1.05rem]">{m.titulo}</h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-marina-700/80">{m.texto}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>

          {/* Aside */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 space-y-6">
              <Reveal className="rounded-2xl border border-marina-200 bg-white p-7 shadow-card">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-marina-600 text-white">
                  <Icon name={s.icono} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg">Entregables típicos</h3>
                <ul className="mt-4 space-y-3">
                  {s.entregables.map((e) => (
                    <li key={e} className="flex gap-3">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-marina-500" />
                      <span className="text-[13.5px] leading-snug text-marina-800">{e}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contacto" className="btn-primary mt-7 w-full">
                  Solicitar propuesta
                  <Icon name="arrow-right" className="h-4 w-4" />
                </Link>
              </Reveal>

              <Reveal delay={100} className="rounded-2xl bg-marina-50 p-7">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-marina-500">
                  Otras líneas
                </h3>
                <ul className="mt-4 space-y-1">
                  {otros.map((o) => (
                    <li key={o.slug}>
                      <Link
                        to={`/servicios/${o.slug}`}
                        className="group flex items-center gap-3 rounded-lg px-2.5 py-2.5 transition-colors hover:bg-white"
                      >
                        <Icon name={o.icono} className="h-4 w-4 shrink-0 text-marina-500" />
                        <span className="flex-1 text-[13.5px] font-medium text-marina-900">{o.corto}</span>
                        <Icon name="arrow-right" className="h-3.5 w-3.5 text-marina-300 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </aside>
        </div>
      </section>

      <CTA />
    </>
  )
}

import { Link, Navigate, useParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { useSeo } from '../hooks/useSeo'
import { documentos } from '../data/legal'

const INDICE = [
  ['tratamiento-de-datos', 'Tratamiento de datos'],
  ['terminos', 'Términos de uso'],
  ['cookies', 'Política de cookies'],
]

export default function Legal() {
  const { doc } = useParams()
  const d = documentos[doc]

  useSeo({
    title: d ? d.titulo : 'Documentos legales',
    description: d ? d.lead : '',
    path: `/legal/${doc}`,
  })

  if (!d) return <Navigate to="/legal/tratamiento-de-datos" replace />

  return (
    <>
      <PageHero eyebrow={d.eyebrow} title={d.titulo} lead={d.lead} />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-marina-500">
                Documentos
              </p>
              <ul className="mt-4 space-y-1">
                {INDICE.map(([slug, label]) => (
                  <li key={slug}>
                    <Link
                      to={`/legal/${slug}`}
                      className={`block rounded-lg px-3.5 py-2.5 text-[14px] transition-colors ${
                        slug === doc
                          ? 'bg-marina-600 font-semibold text-white'
                          : 'text-marina-800 hover:bg-marina-50'
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-6 flex items-center gap-2 border-t border-marina-100 pt-5 text-[12.5px] text-marina-600">
                <Icon name="clock" className="h-3.5 w-3.5" />
                {d.actualizado}
              </p>
            </div>
          </aside>

          <Reveal className="lg:col-span-9">
            <article className="prose-legal">
              {d.secciones.map((s) => (
                <section key={s.h} className="mb-10">
                  <h2 className="!mb-4 !mt-0 !text-[1.4rem]">{s.h}</h2>
                  {s.p?.map((t) => (
                    <p key={t} className="!text-[15px] !leading-relaxed">
                      {t}
                    </p>
                  ))}
                  {s.lista && (
                    <ul className="!text-[15px]">
                      {s.lista.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </article>
          </Reveal>
        </div>
      </section>
    </>
  )
}

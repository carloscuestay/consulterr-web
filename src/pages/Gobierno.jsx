import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import CTA from '../components/CTA'
import { useSeo } from '../hooks/useSeo'
import { empresa, gobierno, composicionAccionaria } from '../data/empresa'

export default function Gobierno() {
  useSeo({
    title: 'Gobierno corporativo',
    description:
      'Órganos sociales, mayorías decisorias, controles estatutarios, libros sociales y cláusula compromisoria de CONSULTERR S.A.S. conforme a la Ley 1258 de 2008.',
    path: '/gobierno-corporativo',
  })

  return (
    <>
      <PageHero
        eyebrow="Transparencia societaria"
        title="Gobierno corporativo"
        lead={`Estructura de decisión, controles y garantías de ${empresa.sigla}, conforme a los estatutos aprobados en el acto de constitución y a la ${empresa.marcoLegal}.`}
      />

      {/* Órganos */}
      <section className="section">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow"><span className="h-px w-6 bg-marina-400" />Artículo 8°</p>
            <h2 className="mt-5 text-[2rem] leading-[1.15] sm:text-[2.5rem]">Órganos sociales</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {gobierno.organos.map((o, i) => (
              <Reveal key={o.nombre} delay={i * 100} className="card">
                <span className="eyebrow">{o.rol}</span>
                <h3 className="mt-3 text-[1.4rem] leading-snug">{o.nombre}</h3>
                <p className="mt-4 text-[14.5px] leading-relaxed text-marina-700/85">{o.detalle}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mayorías */}
      <section className="section bg-marina-50/70">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow"><span className="h-px w-6 bg-marina-400" />Artículo 12°</p>
            <h2 className="mt-5 text-[2rem] leading-[1.15] sm:text-[2.4rem]">Quórum y mayorías</h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-marina-700/85">
              El quórum deliberatorio exige la mayoría absoluta de las acciones suscritas. Las
              decisiones estructurales requieren mayorías calificadas, de modo que ningún
              accionista —cada uno con el 25%— pueda imponerlas por sí solo.
            </p>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-8">
            <div className="overflow-hidden rounded-2xl border border-marina-200 bg-white shadow-card">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">Mayorías decisorias por tipo de asunto</caption>
                <thead>
                  <tr className="border-b border-marina-200 bg-marina-50/80">
                    <th scope="col" className="px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-marina-600">
                      Asunto
                    </th>
                    <th scope="col" className="px-6 py-3.5 text-right text-[11px] font-semibold uppercase tracking-[0.14em] text-marina-600">
                      Mayoría requerida
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-marina-100">
                  {gobierno.mayorias.map((m) => (
                    <tr key={m.asunto} className="transition-colors hover:bg-marina-50/50">
                      <td className="px-6 py-4 text-marina-800">{m.asunto}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-right font-semibold text-marina-600">
                        {m.umbral}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Controles */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow"><span className="h-px w-6 bg-marina-400" />Artículos 17°, 22° y 23°</p>
            <h2 className="mt-5 text-[2rem] leading-[1.15] sm:text-[2.4rem]">
              Controles y prohibiciones estatutarias
            </h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-marina-700/85">
              Los estatutos incorporan límites expresos a la actuación de los administradores y
              mecanismos de protección del patrimonio social y de los accionistas minoritarios.
            </p>

            <div className="mt-8 rounded-2xl border border-marina-200 bg-marina-50/70 p-7">
              <h3 className="flex items-center gap-2.5 text-lg">
                <Icon name="gavel" className="h-5 w-5 text-marina-600" />
                Cláusula compromisoria
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-marina-700/85">
                Toda controversia relativa al contrato de sociedad se resuelve ante un Tribunal de
                Arbitramento de tres (3) árbitros, designados de común acuerdo o, a falta de
                acuerdo, por el Centro de Conciliación y Arbitraje de la Cámara de Comercio de
                Cartagena de Indias. El Tribunal decide en derecho y sesiona en Cartagena.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <ul className="space-y-3">
              {gobierno.controles.map((c) => (
                <li
                  key={c}
                  className="flex gap-4 rounded-xl border border-marina-200/70 bg-white px-5 py-4 shadow-card"
                >
                  <Icon name="shield-check" className="mt-0.5 h-5 w-5 shrink-0 text-marina-500" />
                  <span className="text-[14.5px] leading-relaxed text-marina-800">{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Composición + libros */}
      <section className="section bg-marina-900 text-white">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-marina-300">
              <span className="h-px w-6 bg-marina-400" />
              Artículo 5° · Capital
            </p>
            <h2 className="mt-5 text-[2rem] leading-[1.15] text-white sm:text-[2.4rem]">
              Capital y composición accionaria
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-marina-200/85">
              Capital autorizado, suscrito y pagado por{' '}
              <strong className="font-semibold text-white">$100.000.000 COP</strong>, representado
              en 100.000 acciones ordinarias de valor nominal $1.000 cada una, pagado en su
              totalidad en el acto de constitución.
            </p>

            <ul className="mt-9 space-y-3">
              {composicionAccionaria.map((a) => (
                <li
                  key={a.nombre}
                  className="flex items-center gap-5 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4"
                >
                  <span className="w-14 shrink-0 font-serif text-2xl text-white">{a.participacion}%</span>
                  <span className="flex-1">
                    <span className="block text-[14.5px] font-medium text-white">{a.nombre}</span>
                    <span className="mt-0.5 block text-[12.5px] text-marina-300/75">{a.tipo}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
              <h3 className="flex items-center gap-2.5 text-lg text-white">
                <Icon name="file-text" className="h-5 w-5 text-marina-300" />
                Libros sociales
              </h3>
              <ul className="mt-5 space-y-3">
                {gobierno.libros.map((l) => (
                  <li key={l} className="flex gap-3 text-[14px] text-marina-200/85">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-marina-400" />
                    {l}
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-white/10 pt-5 text-[13px] leading-relaxed text-marina-300/75">
                Registrados ante la {empresa.registro.camara}. El período fiscal va del 1° de enero
                al 31 de diciembre de cada año.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-7">
              <h3 className="flex items-center gap-2.5 text-lg text-white">
                <Icon name="scale" className="h-5 w-5 text-marina-300" />
                Reserva legal
              </h3>
              <p className="mt-4 text-[14px] leading-relaxed text-marina-200/85">
                Apropiación anual mínima del 10% de las utilidades líquidas hasta alcanzar el 50%
                del capital suscrito. No se distribuyen utilidades mientras existan pérdidas de
                ejercicios anteriores que afecten el capital.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        titulo="¿Requiere documentación societaria para un proceso de contratación?"
        texto="Le remitimos certificado de existencia y representación legal, estados financieros y demás soportes exigidos por el pliego."
      />
    </>
  )
}

import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import Logo from '../components/Logo'
import Reveal from '../components/Reveal'
import CTA from '../components/CTA'
import { useSeo } from '../hooks/useSeo'
import { empresa, proposito, valores, cifras } from '../data/empresa'
import { servicios, sectores, metodologia } from '../data/servicios'

export default function Home() {
  useSeo({
    title: 'Interventoría, consultoría y asesoría público-privada',
    description:
      'CONSULTERR S.A.S. — Asesores y Consultores Territoriales. Interventoría, hacienda pública, planeación territorial, servicios públicos, consultoría jurídica, financiera y tecnología para entidades públicas y privadas en Colombia.',
    path: '/',
  })

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-marina-950 text-white">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            backgroundImage:
              'radial-gradient(70rem 40rem at 78% -12%, rgba(46,109,164,.62), transparent 62%),' +
              'radial-gradient(48rem 30rem at 8% 108%, rgba(26,63,107,.85), transparent 60%)',
          }}
        />
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]">
          <Logo variant="isotipo" tone="blanco" className="absolute right-[-6%] top-1/2 h-[620px] w-auto -translate-y-1/2" />
        </div>

        <div className="container-x relative grid gap-14 py-20 lg:grid-cols-12 lg:items-center lg:py-28">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11.5px] font-medium uppercase tracking-[0.14em] text-marina-200 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-marina-400" />
                {empresa.domicilio.ciudad} · {empresa.domicilio.pais}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-7 text-[2.45rem] font-normal leading-[1.06] text-white sm:text-6xl lg:text-[4.1rem]">
                Rigor técnico para la
                <span className="relative mx-2.5 inline-block">
                  <span className="relative z-10 italic text-marina-300">inversión</span>
                </span>
                que transforma el territorio
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 max-w-2xl text-[17px] leading-relaxed text-marina-200/85 sm:text-lg">
                Somos una firma multidisciplinaria de interventoría, consultoría y asesoría
                público-privada. Integramos ingeniería, hacienda pública, derecho y tecnología
                en un mismo equipo para que cada peso invertido tenga soporte, control y
                resultado verificable.
              </p>
            </Reveal>

            <Reveal delay={230}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link to="/servicios" className="btn-light">
                  Ver líneas de servicio
                  <Icon name="arrow-right" className="h-4 w-4" />
                </Link>
                <Link to="/contacto" className="btn-outline-light">
                  Solicitar propuesta
                </Link>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-white/10 pt-9 sm:grid-cols-4">
                {cifras.map((c) => (
                  <div key={c.etiqueta}>
                    <dt className="font-serif text-3xl text-white">
                      {c.valor}
                      {c.unidad && <span className="ml-1 text-sm font-sans font-normal text-marina-400">{c.unidad}</span>}
                    </dt>
                    <dd className="mt-1.5 text-[12.5px] leading-snug text-marina-300/75">{c.etiqueta}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={220} className="lg:col-span-5">
            <div className="relative rounded-3xl border border-white/12 bg-white/[0.045] p-2 backdrop-blur-sm">
              <div className="rounded-[1.15rem] bg-white p-7 text-marina-900 shadow-lift sm:p-9">
                <p className="eyebrow">Objeto social</p>
                <h2 className="mt-3 text-2xl leading-snug">Siete líneas de especialidad</h2>
                <ul className="mt-6 space-y-0.5">
                  {servicios.map((s) => (
                    <li key={s.slug}>
                      <Link
                        to={`/servicios/${s.slug}`}
                        className="group flex items-center gap-3.5 rounded-xl px-2.5 py-2.5 transition-colors hover:bg-marina-50"
                      >
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-marina-100 text-[11px] font-bold text-marina-600 transition-colors group-hover:bg-marina-600 group-hover:text-white">
                          {s.id}
                        </span>
                        <span className="flex-1 text-[14.5px] font-medium leading-snug">{s.corto}</span>
                        <Icon
                          name="arrow-right"
                          className="h-4 w-4 shrink-0 text-marina-300 transition-all group-hover:translate-x-0.5 group-hover:text-marina-600"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SECTORES (marquesina) ───────────────────────────────────── */}
      <section className="border-b border-marina-100 bg-marina-50/60 py-7">
        <div className="container-x">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-marina-500">
            Trabajamos con
          </p>
        </div>
        <div className="relative mt-5 overflow-hidden">
          <div className="flex w-max animate-marquee gap-3">
            {[...sectores, ...sectores].map((s, i) => (
              <span
                key={i}
                className="flex items-center gap-2.5 whitespace-nowrap rounded-full border border-marina-200 bg-white px-5 py-2.5 text-[13.5px] font-medium text-marina-800"
              >
                <Icon name={s.icono} className="h-4 w-4 text-marina-500" />
                {s.nombre}
              </span>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-marina-50/90 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-marina-50/90 to-transparent" />
        </div>
      </section>

      {/* ── PROPÓSITO ───────────────────────────────────────────────── */}
      <section className="section">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">
              <span className="h-px w-6 bg-marina-400" />
              Quiénes somos
            </p>
            <h2 className="mt-5 text-[2rem] leading-[1.15] sm:text-[2.6rem]">
              Una firma nacida para elevar el estándar técnico de lo público
            </h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-marina-700/85">
              {empresa.razonSocial}, que opera bajo la sigla {empresa.sigla}, se constituyó
              en {empresa.anioConstitucion} en {empresa.domicilio.ciudad} como{' '}
              {empresa.naturaleza.toLowerCase()} bajo la {empresa.marcoLegal}, con un capital
              suscrito y pagado en su totalidad y una composición accionaria que reúne
              experiencia en ingeniería, tecnología y desarrollo territorial.
            </p>
            <p className="mt-4 text-[15.5px] leading-relaxed text-marina-700/85">
              {proposito.promesa}
            </p>
            <Link
              to="/nosotros"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-marina-600 transition-all hover:gap-3"
            >
              Conocer la compañía
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {valores.map((v, i) => (
              <Reveal key={v.titulo} delay={i * 60} className="card-hover">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-marina-100 text-marina-600">
                  <Icon name={v.icono} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg">{v.titulo}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-marina-700/80">{v.texto}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICIOS ───────────────────────────────────────────────── */}
      <section className="section bg-marina-50/70">
        <div className="container-x">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">
              <span className="h-px w-6 bg-marina-400" />
              Qué hacemos
            </p>
            <h2 className="mt-5 text-[2rem] leading-[1.15] sm:text-[2.6rem]">
              Siete frentes de trabajo que se resuelven bajo un mismo techo
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-marina-700/85">
              Cada línea corresponde a un literal del objeto social y cuenta con equipo,
              metodología y entregables propios. La ventaja está en la intersección: un
              problema de recaudo casi siempre es también un problema de datos, y una obra
              observada casi siempre es también un problema contractual.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {servicios.map((s, i) => (
              <Reveal key={s.slug} delay={i * 50}>
                <Link
                  to={`/servicios/${s.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-marina-200/70 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-marina-300 hover:shadow-lift"
                >
                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-marina-100 text-marina-600 transition-colors group-hover:bg-marina-600 group-hover:text-white">
                      <Icon name={s.icono} className="h-5.5 w-5.5" />
                    </span>
                    <span className="font-serif text-2xl text-marina-200 transition-colors group-hover:text-marina-400">
                      {s.id}
                    </span>
                  </div>
                  <h3 className="mt-6 text-[1.3rem] leading-snug">{s.titulo}</h3>
                  <p className="mt-3 flex-1 text-[14px] leading-relaxed text-marina-700/80">{s.resumen}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-marina-600 transition-all group-hover:gap-2.5">
                    Ver detalle
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}

            <Reveal delay={350}>
              <Link
                to="/contacto"
                className="group flex h-full min-h-[240px] flex-col justify-between rounded-2xl bg-marina-800 p-7 text-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:bg-marina-600 hover:shadow-lift"
              >
                <Icon name="sparkles" className="h-6 w-6 text-marina-300" />
                <div>
                  <h3 className="text-[1.3rem] leading-snug text-white">
                    ¿Su necesidad cruza varias líneas?
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-marina-200/85">
                    Armamos el equipo a la medida del encargo, con un solo interlocutor y un
                    solo cronograma.
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2.5">
                    Hablemos
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── METODOLOGÍA ─────────────────────────────────────────────── */}
      <section className="section">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">
              <span className="h-px w-6 bg-marina-400" />
              Cómo trabajamos
            </p>
            <h2 className="mt-5 text-[2rem] leading-[1.15] sm:text-[2.5rem]">
              Un método que deja expediente, no impresiones
            </h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-marina-700/85">
              Aplicamos la misma secuencia en todos los encargos, sea una interventoría de obra
              o una reforma al estatuto tributario. Cambia el contenido; no cambia el estándar.
            </p>
            <Link
              to="/metodologia"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-marina-600 transition-all hover:gap-3"
            >
              Ver la metodología completa
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </Reveal>

          <ol className="relative lg:col-span-8">
            <span className="absolute left-[27px] top-3 hidden h-[calc(100%-2rem)] w-px bg-marina-200 sm:block" />
            {metodologia.map((m, i) => (
              <Reveal key={m.paso} delay={i * 70} as="li" className="relative flex gap-6 pb-9 last:pb-0">
                <span className="z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border border-marina-200 bg-white font-serif text-lg text-marina-600 shadow-card">
                  {m.paso}
                </span>
                <div className="pt-2.5">
                  <h3 className="text-xl">{m.titulo}</h3>
                  <p className="mt-2.5 max-w-2xl text-[14.5px] leading-relaxed text-marina-700/80">{m.texto}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── MISIÓN / VISIÓN ─────────────────────────────────────────── */}
      <section className="section bg-marina-900 text-white">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          {[
            { k: 'Misión', t: proposito.mision, icon: 'target' },
            { k: 'Visión', t: proposito.vision, icon: 'compass' },
          ].map((b, i) => (
            <Reveal
              key={b.k}
              delay={i * 100}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-9 backdrop-blur-sm"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-marina-200">
                <Icon name={b.icon} className="h-5 w-5" />
              </span>
              <h2 className="mt-6 text-2xl text-white">{b.k}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-marina-200/85">{b.t}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  )
}

import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import Logo from '../components/Logo'
import Reveal from '../components/Reveal'
import CTA from '../components/CTA'
import Carrusel from '../components/Carrusel'
import Imagen from '../components/Imagen'
import { useSeo } from '../hooks/useSeo'
import { empresa, proposito, valores, cifras } from '../data/empresa'
import { servicios, sectores, metodologia } from '../data/servicios'
import { imagenServicio } from '../data/imagenes'

export default function Home() {
  useSeo({
    title: 'Interventoría, consultoría y asesoría público-privada',
    description:
      'CONSULTERR S.A.S. — Asesores y Consultores Territoriales. Interventoría, hacienda pública, planeación territorial, servicios públicos, consultoría jurídica, financiera y tecnología para entidades públicas y privadas en Colombia.',
    path: '/',
  })

  return (
    <>
      {/* ── CARRUSEL ─────────────────────────────────────────────────── */}
      <Carrusel />

      {/* ── PROPUESTA + CIFRAS ──────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-marina-900 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
          <Logo variant="isotipo" tone="blanco" className="absolute -right-16 top-1/2 h-[420px] w-auto -translate-y-1/2" />
        </div>
        <div className="container-x relative grid gap-12 py-16 lg:grid-cols-12 lg:items-center lg:py-20">
          <Reveal className="lg:col-span-6">
            <h1 className="text-[1.9rem] leading-[1.12] text-white sm:text-[2.5rem]">
              Rigor técnico para la{' '}
              <span className="italic text-marina-300">inversión</span> que transforma el territorio
            </h1>
            <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-marina-200/85">
              Somos una firma multidisciplinaria de interventoría, consultoría y asesoría
              público-privada. Integramos ingeniería, hacienda pública, derecho y tecnología en un
              mismo equipo para que cada peso invertido tenga soporte, control y resultado
              verificable.
            </p>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-6">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              {cifras.map((c) => (
                <div key={c.etiqueta}>
                  <dt className="font-serif text-[2rem] leading-none text-white">
                    {c.valor}
                    {c.unidad && (
                      <span className="ml-1.5 font-sans text-sm font-normal text-marina-400">
                        {c.unidad}
                      </span>
                    )}
                  </dt>
                  <dd className="mt-2 text-[13px] font-medium leading-snug text-marina-200">
                    {c.etiqueta}
                    <span className="mt-0.5 block font-normal text-marina-300/70">{c.detalle}</span>
                  </dd>
                </div>
              ))}
            </dl>
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

      {/* ── QUIÉNES SOMOS ───────────────────────────────────────────── */}
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
              {empresa.razonSocial}, que opera bajo la sigla {empresa.sigla}, es una{' '}
              {empresa.naturaleza.toLowerCase()} con domicilio principal en{' '}
              {empresa.domicilio.ciudad}. Reúne ingeniería, tecnología, derecho y finanzas públicas
              en un mismo equipo, con siete líneas de especialidad que operan sobre el mismo
              expediente.
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
              metodología y entregables propios. La ventaja está en la intersección: un problema de
              recaudo casi siempre es también un problema de datos, y una obra observada casi
              siempre es también un problema contractual.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {servicios.map((s, i) => (
              <Reveal key={s.slug} delay={i * 50}>
                <Link
                  to={`/servicios/${s.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-marina-200/70 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-marina-300 hover:shadow-lift"
                >
                  <div className="relative">
                    <Imagen
                      img={imagenServicio(s.slug)}
                      aspecto="3 / 2"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="w-full"
                      imgClassName="transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                    <span className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-lg bg-white/95 font-serif text-lg text-marina-700 shadow-card backdrop-blur">
                      {s.id}
                    </span>
                    <span className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-lg bg-marina-800/90 text-white backdrop-blur transition-colors group-hover:bg-marina-600">
                      <Icon name={s.icono} className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-[1.28rem] leading-snug">{s.titulo}</h3>
                    <p className="mt-3 flex-1 text-[14px] leading-relaxed text-marina-700/80">
                      {s.resumen}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-marina-600 transition-all group-hover:gap-2.5">
                      Ver detalle
                      <Icon name="arrow-right" className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}

            <Reveal delay={350}>
              <Link
                to="/contacto"
                className="group flex h-full min-h-[280px] flex-col justify-between rounded-2xl bg-marina-800 p-7 text-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:bg-marina-600 hover:shadow-lift"
              >
                <Icon name="sparkles" className="h-6 w-6 text-marina-300" />
                <div>
                  <h3 className="text-[1.3rem] leading-snug text-white">
                    ¿Su necesidad cruza varias líneas?
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-marina-200/85">
                    Armamos el equipo a la medida del encargo, con un solo interlocutor y un solo
                    cronograma.
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
              Aplicamos la misma secuencia en todos los encargos, sea una interventoría de obra o
              una reforma al estatuto tributario. Cambia el contenido; no cambia el estándar.
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
                  <p className="mt-2.5 max-w-2xl text-[14.5px] leading-relaxed text-marina-700/80">
                    {m.texto}
                  </p>
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

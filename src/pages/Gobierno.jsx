import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import CTA from '../components/CTA'
import { useSeo } from '../hooks/useSeo'
import { empresa, gobierno } from '../data/empresa'

export default function Gobierno() {
  useSeo({
    title: 'Gobierno y cumplimiento',
    description:
      'Independencia, manejo de conflictos de interés, régimen anticorrupción, protección de datos y gestión documental de CONSULTERR S.A.S.',
    path: '/gobierno-corporativo',
  })

  return (
    <>
      <PageHero
        eyebrow="Transparencia y control"
        title="Gobierno y cumplimiento"
        lead={`Cómo se administra ${empresa.sigla}, qué compromisos de conducta asume frente a cada encargo y qué documentación remite a las entidades que la contratan.`}
      />

      {/* Administración */}
      <section className="section">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow"><span className="h-px w-6 bg-marina-400" />Administración</p>
            <h2 className="mt-5 text-[2rem] leading-[1.15] sm:text-[2.5rem]">
              Quién obliga a la sociedad y quién responde por el entregable
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {gobierno.administracion.map((o, i) => (
              <Reveal key={o.nombre} delay={i * 100} className="card">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-marina-600 text-white">
                  <Icon name={o.icono} className="h-5 w-5" />
                </span>
                <span className="eyebrow mt-5 block">{o.rol}</span>
                <h3 className="mt-2 text-[1.4rem] leading-snug">{o.nombre}</h3>
                <p className="mt-4 text-[14.5px] leading-relaxed text-marina-700/85">{o.detalle}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-8">
            <div className="rounded-2xl border-l-2 border-marina-500 bg-marina-50/70 py-6 pl-7 pr-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-marina-500">
                Información societaria y financiera
              </p>
              <p className="mt-3 max-w-4xl text-[15px] leading-relaxed text-marina-800">
                Por decisión de la compañía, este sitio no publica información patrimonial ni de
                composición societaria. Los datos que exijan los pliegos —capacidad jurídica,
                financiera y organizacional— se acreditan ante la entidad contratante con los
                documentos oficiales correspondientes, a solicitud y por los canales formales.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Compromisos de conducta */}
      <section className="section bg-marina-50/70">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow"><span className="h-px w-6 bg-marina-400" />Compromisos de conducta</p>
            <h2 className="mt-5 text-[2rem] leading-[1.15] sm:text-[2.5rem]">
              Reglas que aplican a todos los encargos
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-marina-700/85">
              No dependen de la cuantía ni del cliente: hacen parte de cada propuesta y de cada
              contrato que firma la sociedad.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gobierno.compromisos.map((c, i) => (
              <Reveal key={c.titulo} delay={i * 60} className="card-hover">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-marina-100 text-marina-600">
                  <Icon name={c.icono} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg">{c.titulo}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-marina-700/80">{c.texto}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Documentación y controversias */}
      <section className="section bg-marina-900 text-white">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-marina-300">
              <span className="h-px w-6 bg-marina-400" />
              Para procesos de selección
            </p>
            <h2 className="mt-5 text-[2rem] leading-[1.15] text-white sm:text-[2.4rem]">
              Documentación que remitimos
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-marina-200/85">
              Indíquenos el proceso y el pliego y preparamos el paquete completo dentro del término
              de la convocatoria.
            </p>
            <ul className="mt-9 grid gap-3 sm:grid-cols-2">
              {gobierno.documentos.map((d) => (
                <li
                  key={d}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4"
                >
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-marina-400" />
                  <span className="text-[14px] leading-snug text-marina-200/90">{d}</span>
                </li>
              ))}
            </ul>
            <Link to="/contacto" className="btn-light mt-9">
              Solicitar documentación
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
              <h3 className="flex items-center gap-2.5 text-lg text-white">
                <Icon name="gavel" className="h-5 w-5 text-marina-300" />
                {gobierno.controversias.titulo}
              </h3>
              <p className="mt-4 text-[14px] leading-relaxed text-marina-200/85">
                {gobierno.controversias.texto}
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-7">
              <h3 className="flex items-center gap-2.5 text-lg text-white">
                <Icon name="file-text" className="h-5 w-5 text-marina-300" />
                Canal de atención
              </h3>
              <p className="mt-4 text-[14px] leading-relaxed text-marina-200/85">
                Consultas, reclamos y solicitudes de información sobre tratamiento de datos
                personales o conducta empresarial:{' '}
                <a
                  href={`mailto:${empresa.contacto.email}`}
                  className="font-semibold text-white underline decoration-marina-400 underline-offset-4"
                >
                  {empresa.contacto.email}
                </a>
                .
              </p>
              <Link
                to="/legal/tratamiento-de-datos"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-marina-300 transition-all hover:gap-3 hover:text-white"
              >
                Política de tratamiento de datos
                <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        titulo="¿Requiere verificar nuestra capacidad para un proceso?"
        texto="Indíquenos el número del proceso y la entidad, y remitimos la documentación exigida por el pliego."
      />
    </>
  )
}

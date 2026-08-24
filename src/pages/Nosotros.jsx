import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import CTA from '../components/CTA'
import { useSeo } from '../hooks/useSeo'
import { empresa, proposito, valores, composicionAccionaria } from '../data/empresa'
import { sectores } from '../data/servicios'

const cop = (n) =>
  new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(n)

export default function Nosotros() {
  useSeo({
    title: 'Nosotros',
    description:
      'CONSULTERR S.A.S. es una Sociedad por Acciones Simplificada constituida en Cartagena de Indias bajo la Ley 1258 de 2008, dedicada a la interventoría, consultoría y asesoría público-privada.',
    path: '/nosotros',
  })

  return (
    <>
      <PageHero
        eyebrow="La compañía"
        title="Ingeniería, hacienda pública, derecho y tecnología en un mismo equipo"
        lead={`${empresa.razonSocial}, que opera bajo la sigla ${empresa.sigla}, reúne a cuatro accionistas fundadores con trayectoria en desarrollo territorial, investigación social y tecnologías de la información, con domicilio principal en ${empresa.domicilio.ciudad}.`}
      />

      {/* Identidad societaria */}
      <section className="section">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow"><span className="h-px w-6 bg-marina-400" />Identidad</p>
            <h2 className="mt-5 text-[2rem] leading-[1.15] sm:text-[2.5rem]">
              Constituida para responder por lo que firma
            </h2>
            <div className="mt-7 space-y-5 text-[15.5px] leading-relaxed text-marina-700/85">
              <p>
                CONSULTERR nace de una constatación simple: en el territorio colombiano los
                problemas rara vez llegan clasificados. Un municipio que no recauda tiene a la vez
                un problema tributario, uno de datos, uno jurídico y uno de capacidad
                institucional. Contratar cuatro firmas distintas para eso multiplica los costos y
                diluye la responsabilidad.
              </p>
              <p>
                La sociedad se organizó entonces con siete líneas de especialidad que operan sobre
                el mismo expediente y bajo un mismo estándar de calidad. Su composición accionaria
                —tres personas jurídicas con experiencia acreditada en desarrollo territorial,
                investigación social e ingeniería y tecnología, más un accionista fundador
                individual— fue diseñada para que esa integración sea real y no comercial.
              </p>
              <p>{proposito.promesa}</p>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5">
            <div className="rounded-2xl border border-marina-200 bg-marina-50/60 p-8">
              <h3 className="text-lg">Ficha societaria</h3>
              <dl className="mt-6 divide-y divide-marina-200/70 text-sm">
                {[
                  ['Razón social', empresa.razonSocial],
                  ['Sigla', empresa.sigla],
                  ['Naturaleza', empresa.naturaleza],
                  ['Marco legal', empresa.marcoLegal],
                  ['Constitución', String(empresa.anioConstitucion)],
                  ['Duración', empresa.duracion],
                  ['Domicilio', `${empresa.domicilio.ciudad}, ${empresa.domicilio.departamento}`],
                  ['Dirección', empresa.domicilio.direccion],
                  ['Capital autorizado', cop(empresa.capital.autorizado)],
                  ['Capital suscrito', cop(empresa.capital.suscrito)],
                  ['Capital pagado', cop(empresa.capital.pagado)],
                  ['Acciones', `${empresa.capital.acciones.toLocaleString('es-CO')} ordinarias`],
                  ['Valor nominal', cop(empresa.capital.valorNominal)],
                  ['Registro mercantil', empresa.registro.camara],
                ].map(([k, v]) => (
                  <div key={k} className="grid grid-cols-5 gap-3 py-3">
                    <dt className="col-span-2 text-marina-600">{k}</dt>
                    <dd className="col-span-3 font-medium text-marina-900">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 text-[12px] leading-relaxed text-marina-600/80">
                Información societaria de carácter público, consultable en el Registro Mercantil.
                No se publican datos personales de accionistas ni administradores, conforme a la
                Ley 1581 de 2012.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Misión / Visión */}
      <section className="section bg-marina-50/70">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          {[
            { k: 'Misión', t: proposito.mision, icon: 'target' },
            { k: 'Visión', t: proposito.vision, icon: 'compass' },
          ].map((b, i) => (
            <Reveal key={b.k} delay={i * 100} className="card">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-marina-600 text-white">
                <Icon name={b.icon} className="h-5 w-5" />
              </span>
              <h2 className="mt-6 text-2xl">{b.k}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-marina-700/85">{b.t}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Valores */}
      <section className="section">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow"><span className="h-px w-6 bg-marina-400" />Principios</p>
            <h2 className="mt-5 text-[2rem] leading-[1.15] sm:text-[2.5rem]">
              Seis reglas que no se negocian por contrato
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* Composición accionaria */}
      <section className="section bg-marina-900 text-white">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-marina-300">
              <span className="h-px w-6 bg-marina-400" />
              Estructura
            </p>
            <h2 className="mt-5 text-[2rem] leading-[1.15] text-white sm:text-[2.5rem]">
              Composición accionaria
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-marina-200/85">
              Cuatro accionistas fundadores en partes iguales. Ninguno controla la sociedad por sí
              solo: las decisiones estructurales exigen el 70% de las acciones suscritas.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {composicionAccionaria.map((a, i) => (
              <Reveal
                key={a.nombre}
                delay={i * 70}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
              >
                <div className="flex items-baseline justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-marina-400">
                    {a.tipo}
                  </span>
                  <span className="font-serif text-3xl text-white">{a.participacion}%</span>
                </div>
                <h3 className="mt-4 text-[1.05rem] leading-snug text-white">{a.nombre}</h3>
                <p className="mt-3 text-[13px] leading-relaxed text-marina-200/75">{a.nota}</p>
                <div className="mt-5 h-1 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-marina-400" style={{ width: `${a.participacion}%` }} />
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300} className="mt-10">
            <Link to="/gobierno-corporativo" className="btn-outline-light">
              Ver el gobierno corporativo
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* A quién servimos */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow"><span className="h-px w-6 bg-marina-400" />A quién servimos</p>
            <h2 className="mt-5 text-[2rem] leading-[1.15] sm:text-[2.5rem]">
              Entidades públicas y privadas, dentro y fuera de Colombia
            </h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-marina-700/85">
              La sociedad puede celebrar toda clase de contratos permitidos por la ley, participar
              en procesos de contratación pública y privada y conformar consorcios, uniones
              temporales y otras formas de colaboración empresarial.
            </p>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
            {sectores.map((s, i) => (
              <Reveal
                key={s.nombre}
                delay={i * 45}
                className="flex items-center gap-4 rounded-xl border border-marina-200/70 bg-white px-5 py-4 shadow-card transition-colors hover:border-marina-300"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-marina-100 text-marina-600">
                  <Icon name={s.icono} className="h-4.5 w-4.5" />
                </span>
                <span className="text-[14.5px] font-medium text-marina-900">{s.nombre}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}

import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import CTA from '../components/CTA'
import { useSeo } from '../hooks/useSeo'
import { metodologia } from '../data/servicios'

const compromisos = [
  {
    titulo: 'Un responsable con nombre',
    texto:
      'Cada encargo tiene un director técnico identificado que firma los entregables y responde por ellos ante la entidad.',
    icono: 'users',
  },
  {
    titulo: 'Norma citada, no aludida',
    texto:
      'Todo concepto indica el artículo, decreto o resolución que lo sustenta, con la versión vigente a la fecha del entregable.',
    icono: 'scale',
  },
  {
    titulo: 'Dato verificable',
    texto:
      'Las cifras se entregan con su fuente, fecha de corte y metodología de cálculo, en formato reutilizable.',
    icono: 'file-text',
  },
  {
    titulo: 'Expediente ordenado',
    texto:
      'Al cierre la entidad recibe el archivo completo del encargo, indexado y conforme a las tablas de retención documental.',
    icono: 'shield-check',
  },
  {
    titulo: 'Transferencia de conocimiento',
    texto:
      'No dejamos dependencia: capacitamos al equipo de planta para que pueda operar y actualizar lo entregado.',
    icono: 'sparkles',
  },
  {
    titulo: 'Conflictos declarados',
    texto:
      'Antes de aceptar un encargo declaramos por escrito cualquier situación que pueda comprometer la independencia.',
    icono: 'eye',
  },
]

export default function Metodologia() {
  useSeo({
    title: 'Metodología',
    description:
      'El método de trabajo de CONSULTERR S.A.S.: diagnóstico y línea base, marco normativo, diseño de la solución, implementación acompañada y verificación de cierre.',
    path: '/metodologia',
  })

  return (
    <>
      <PageHero
        eyebrow="Cómo trabajamos"
        title="Un método que deja expediente, no impresiones"
        lead="Aplicamos la misma secuencia de cinco fases en todos los encargos, sea una interventoría de obra o una reforma al estatuto tributario municipal. Cambia el contenido; no cambia el estándar."
      />

      <section className="section">
        <div className="container-x">
          <ol className="relative mx-auto max-w-4xl">
            <span className="absolute left-[31px] top-6 hidden h-[calc(100%-4rem)] w-px bg-marina-200 sm:block" />
            {metodologia.map((m, i) => (
              <Reveal key={m.paso} delay={i * 80} as="li" className="relative flex gap-7 pb-12 last:pb-0">
                <span className="z-10 grid h-16 w-16 shrink-0 place-items-center rounded-full border border-marina-200 bg-white font-serif text-xl text-marina-600 shadow-card">
                  {m.paso}
                </span>
                <div className="flex-1 rounded-2xl border border-marina-200/70 bg-white p-7 shadow-card">
                  <h2 className="text-[1.4rem]">{m.titulo}</h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-marina-700/85">{m.texto}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-marina-50/70">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow"><span className="h-px w-6 bg-marina-400" />Compromisos de entrega</p>
            <h2 className="mt-5 text-[2rem] leading-[1.15] sm:text-[2.5rem]">
              Lo que la entidad recibe en todos los casos
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-marina-700/85">
              Estos seis compromisos hacen parte de cada propuesta y de cada contrato, con
              independencia del objeto, la cuantía o el plazo.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {compromisos.map((c, i) => (
              <Reveal key={c.titulo} delay={i * 60} className="card-hover">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-marina-600 text-white">
                  <Icon name={c.icono} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg">{c.titulo}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-marina-700/80">{c.texto}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}

import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { useSeo } from '../hooks/useSeo'
import { empresa } from '../data/empresa'
import { servicios } from '../data/servicios'

const VACIO = {
  nombre: '', entidad: '', cargo: '', email: '', telefono: '',
  linea: '', mensaje: '', habeas: false,
}

export default function Contacto() {
  useSeo({
    title: 'Contacto',
    description: `Contacte a ${empresa.sigla} en ${empresa.domicilio.ciudad}, ${empresa.domicilio.departamento}. Solicite una propuesta técnica para interventoría, consultoría o asesoría.`,
    path: '/contacto',
  })

  const [f, setF] = useState(VACIO)
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)

  const set = (k) => (e) => {
    const v = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setF((p) => ({ ...p, [k]: v }))
    setErrores((p) => ({ ...p, [k]: undefined }))
  }

  const validar = () => {
    const e = {}
    if (f.nombre.trim().length < 3) e.nombre = 'Indique su nombre completo.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email)) e.email = 'Correo electrónico no válido.'
    if (f.mensaje.trim().length < 20) e.mensaje = 'Describa la necesidad en al menos 20 caracteres.'
    if (!f.habeas) e.habeas = 'Debe autorizar el tratamiento de sus datos para continuar.'
    setErrores(e)
    return Object.keys(e).length === 0
  }

  /**
   * Envío sin backend: se compone un correo con los datos del formulario.
   * Para conectar un backend real (Formspree, Resend, API propia) sustituya
   * el cuerpo de esta función por la llamada correspondiente.
   */
  const onSubmit = (e) => {
    e.preventDefault()
    if (!validar()) return
    const linea = servicios.find((s) => s.slug === f.linea)
    const cuerpo = [
      `Nombre: ${f.nombre}`,
      `Entidad / empresa: ${f.entidad || '—'}`,
      `Cargo: ${f.cargo || '—'}`,
      `Correo: ${f.email}`,
      `Teléfono: ${f.telefono || '—'}`,
      `Línea de interés: ${linea ? linea.titulo : '—'}`,
      '',
      'Necesidad:',
      f.mensaje,
      '',
      '—',
      'Enviado desde el formulario de contacto de consulterr.com',
    ].join('\n')

    window.location.href =
      `mailto:${empresa.contacto.email}` +
      `?subject=${encodeURIComponent(`Solicitud de propuesta — ${f.entidad || f.nombre}`)}` +
      `&body=${encodeURIComponent(cuerpo)}`

    setEnviado(true)
  }

  const inputCls = (k) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-[14.5px] text-marina-900 placeholder:text-marina-400 transition-colors focus:outline-none focus:ring-2 focus:ring-marina-600/30 ${
      errores[k] ? 'border-red-400' : 'border-marina-200 focus:border-marina-500'
    }`

  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Cuéntenos el alcance y le devolvemos una propuesta"
        lead="Entre más concreto sea el requerimiento —objeto, plazo estimado y entidad contratante— más precisa será la respuesta técnica y económica que podamos preparar."
      />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          {/* Formulario */}
          <Reveal className="lg:col-span-7">
            {enviado ? (
              <div className="rounded-2xl border border-marina-200 bg-marina-50/70 p-9 text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-marina-600 text-white">
                  <Icon name="check" className="h-6 w-6" />
                </span>
                <h2 className="mt-6 text-2xl">Se abrió su cliente de correo</h2>
                <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-marina-700/85">
                  Revise el mensaje y púlselo enviar. Si su equipo no abrió automáticamente,
                  escríbanos a{' '}
                  <a href={`mailto:${empresa.contacto.email}`} className="font-semibold text-marina-600 underline">
                    {empresa.contacto.email}
                  </a>
                  . Respondemos dentro del siguiente día hábil.
                </p>
                <button type="button" onClick={() => { setF(VACIO); setEnviado(false) }} className="btn-ghost mt-7">
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-marina-200 bg-white p-7 shadow-card sm:p-9">
                <h2 className="text-2xl">Solicitud de propuesta</h2>
                <p className="mt-2 text-[14.5px] text-marina-700/80">
                  Los campos marcados con <span className="text-red-500">*</span> son obligatorios.
                </p>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label htmlFor="nombre" className="mb-1.5 block text-[13px] font-semibold text-marina-800">
                      Nombre completo <span className="text-red-500">*</span>
                    </label>
                    <input id="nombre" type="text" value={f.nombre} onChange={set('nombre')}
                      className={inputCls('nombre')} placeholder="Nombres y apellidos"
                      aria-invalid={!!errores.nombre} aria-describedby={errores.nombre ? 'e-nombre' : undefined} />
                    {errores.nombre && <p id="e-nombre" className="mt-1.5 text-[12.5px] text-red-600">{errores.nombre}</p>}
                  </div>

                  <div>
                    <label htmlFor="entidad" className="mb-1.5 block text-[13px] font-semibold text-marina-800">
                      Entidad o empresa
                    </label>
                    <input id="entidad" type="text" value={f.entidad} onChange={set('entidad')}
                      className={inputCls('entidad')} placeholder="Alcaldía, empresa, fundación…" />
                  </div>

                  <div>
                    <label htmlFor="cargo" className="mb-1.5 block text-[13px] font-semibold text-marina-800">
                      Cargo
                    </label>
                    <input id="cargo" type="text" value={f.cargo} onChange={set('cargo')}
                      className={inputCls('cargo')} placeholder="Secretario, gerente, supervisor…" />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-[13px] font-semibold text-marina-800">
                      Correo electrónico <span className="text-red-500">*</span>
                    </label>
                    <input id="email" type="email" value={f.email} onChange={set('email')}
                      className={inputCls('email')} placeholder="nombre@entidad.gov.co"
                      aria-invalid={!!errores.email} aria-describedby={errores.email ? 'e-email' : undefined} />
                    {errores.email && <p id="e-email" className="mt-1.5 text-[12.5px] text-red-600">{errores.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="telefono" className="mb-1.5 block text-[13px] font-semibold text-marina-800">
                      Teléfono
                    </label>
                    <input id="telefono" type="tel" value={f.telefono} onChange={set('telefono')}
                      className={inputCls('telefono')} placeholder="+57 300 000 0000" />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="linea" className="mb-1.5 block text-[13px] font-semibold text-marina-800">
                      Línea de servicio de interés
                    </label>
                    <select id="linea" value={f.linea} onChange={set('linea')} className={inputCls('linea')}>
                      <option value="">Seleccione una línea…</option>
                      {servicios.map((s) => (
                        <option key={s.slug} value={s.slug}>{s.id} — {s.titulo}</option>
                      ))}
                      <option value="varias">Involucra varias líneas</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="mensaje" className="mb-1.5 block text-[13px] font-semibold text-marina-800">
                      Describa la necesidad <span className="text-red-500">*</span>
                    </label>
                    <textarea id="mensaje" rows={6} value={f.mensaje} onChange={set('mensaje')}
                      className={inputCls('mensaje')}
                      placeholder="Objeto del encargo, plazo estimado, entidad contratante y cualquier antecedente relevante."
                      aria-invalid={!!errores.mensaje} aria-describedby={errores.mensaje ? 'e-mensaje' : undefined} />
                    {errores.mensaje && <p id="e-mensaje" className="mt-1.5 text-[12.5px] text-red-600">{errores.mensaje}</p>}
                  </div>
                </div>

                <div className="mt-7 rounded-xl bg-marina-50 p-5">
                  <label htmlFor="habeas" className="flex cursor-pointer gap-3.5">
                    <input id="habeas" type="checkbox" checked={f.habeas} onChange={set('habeas')}
                      className="mt-0.5 h-4.5 w-4.5 shrink-0 rounded border-marina-300 text-marina-600 focus:ring-marina-600"
                      aria-invalid={!!errores.habeas} />
                    <span className="text-[13px] leading-relaxed text-marina-700">
                      Autorizo a {empresa.sigla} el tratamiento de mis datos personales con la
                      finalidad de atender esta solicitud, conforme a la Ley 1581 de 2012 y a la{' '}
                      <Link to="/legal/tratamiento-de-datos" className="font-semibold text-marina-600 underline">
                        Política de Tratamiento de Datos Personales
                      </Link>
                      . <span className="text-red-500">*</span>
                    </span>
                  </label>
                  {errores.habeas && <p className="mt-2 text-[12.5px] text-red-600">{errores.habeas}</p>}
                </div>

                <button type="submit" className="btn-primary mt-7 w-full sm:w-auto">
                  <Icon name="send" className="h-4 w-4" />
                  Enviar solicitud
                </button>
              </form>
            )}
          </Reveal>

          {/* Datos de contacto */}
          <Reveal delay={120} className="lg:col-span-5">
            <div className="space-y-5">
              <div className="rounded-2xl border border-marina-200 bg-marina-50/70 p-7">
                <h2 className="text-lg">Datos de contacto</h2>
                <ul className="mt-6 space-y-5 text-[14.5px]">
                  <li className="flex gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white text-marina-600 shadow-card">
                      <Icon name="map-pin" className="h-4.5 w-4.5" />
                    </span>
                    <span>
                      <span className="block text-[12px] font-semibold uppercase tracking-[0.12em] text-marina-500">
                        Domicilio principal
                      </span>
                      <span className="mt-1 block text-marina-800">
                        {empresa.domicilio.direccion}
                        <br />
                        {empresa.domicilio.ciudad}, {empresa.domicilio.departamento}, {empresa.domicilio.pais}
                      </span>
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white text-marina-600 shadow-card">
                      <Icon name="mail" className="h-4.5 w-4.5" />
                    </span>
                    <span>
                      <span className="block text-[12px] font-semibold uppercase tracking-[0.12em] text-marina-500">
                        Correo electrónico
                      </span>
                      <a href={`mailto:${empresa.contacto.email}`} className="mt-1 block text-marina-800 hover:text-marina-600">
                        {empresa.contacto.email}
                      </a>
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white text-marina-600 shadow-card">
                      <Icon name="clock" className="h-4.5 w-4.5" />
                    </span>
                    <span>
                      <span className="block text-[12px] font-semibold uppercase tracking-[0.12em] text-marina-500">
                        Horario de atención
                      </span>
                      <span className="mt-1 block text-marina-800">{empresa.contacto.horario}</span>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-marina-200 bg-white p-7 shadow-card">
                <h2 className="text-lg">Para procesos de contratación</h2>
                <p className="mt-3 text-[14px] leading-relaxed text-marina-700/85">
                  Si requiere documentación societaria para un proceso de selección —certificado de
                  existencia y representación legal, RUT, estados financieros, certificaciones de
                  experiencia o pólizas—, indíquelo en el mensaje y adjuntamos el paquete completo.
                </p>
                <Link to="/gobierno-corporativo" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-marina-600 transition-all hover:gap-3">
                  Ver información societaria
                  <Icon name="arrow-right" className="h-4 w-4" />
                </Link>
              </div>

              <div className="overflow-hidden rounded-2xl border border-marina-200 shadow-card">
                <iframe
                  title={`Ubicación de ${empresa.sigla} en ${empresa.domicilio.ciudad}`}
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-75.55%2C10.35%2C-75.42%2C10.46&amp;layer=mapnik"
                  className="h-64 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="bg-white px-5 py-3.5 text-[12.5px] text-marina-600">
                  {empresa.domicilio.ciudad}, {empresa.domicilio.departamento} — {empresa.domicilio.pais}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

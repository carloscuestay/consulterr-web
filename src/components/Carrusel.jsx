import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import Imagen from './Imagen'
import { carrusel } from '../data/imagenes'

const INTERVALO = 6500

/**
 * Carrusel de la página de inicio.
 *
 * Accesibilidad:
 *  · Región con roledescription="carrusel" y aria-live que solo anuncia cuando
 *    el usuario navega manualmente (no en cada avance automático).
 *  · Flechas ← → para cambiar de lámina, y los puntos son una lista de pestañas.
 *  · Se detiene al pasar el ratón, al enfocar con teclado, cuando la pestaña
 *    del navegador queda oculta y con `prefers-reduced-motion`.
 *  · Gestos de arrastre en pantallas táctiles.
 */
export default function Carrusel() {
  const [actual, setActual] = useState(0)
  const [enPausa, setEnPausa] = useState(false)
  const [manual, setManual] = useState(false)
  const [reducido, setReducido] = useState(false)
  const contenedor = useRef(null)
  const tactil = useRef({ x: 0, activo: false })
  const idBase = useId()
  const total = carrusel.length

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const aplicar = () => setReducido(mq.matches)
    aplicar()
    mq.addEventListener('change', aplicar)
    return () => mq.removeEventListener('change', aplicar)
  }, [])

  const ir = useCallback((i, porUsuario = false) => {
    setActual(((i % total) + total) % total)
    if (porUsuario) setManual(true)
  }, [total])

  const siguiente = useCallback((u = false) => ir(actual + 1, u), [actual, ir])
  const anterior = useCallback((u = false) => ir(actual - 1, u), [actual, ir])

  // Avance automático
  useEffect(() => {
    if (enPausa || reducido) return
    const t = setTimeout(() => setActual((a) => (a + 1) % total), INTERVALO)
    return () => clearTimeout(t)
  }, [actual, enPausa, reducido, total])

  // Pausa cuando la pestaña no está visible
  useEffect(() => {
    const v = () => setEnPausa(document.hidden)
    document.addEventListener('visibilitychange', v)
    return () => document.removeEventListener('visibilitychange', v)
  }, [])

  const teclado = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); siguiente(true) }
    if (e.key === 'ArrowLeft') { e.preventDefault(); anterior(true) }
  }

  const inicioTactil = (e) => {
    tactil.current = { x: e.touches[0].clientX, activo: true }
    setEnPausa(true)
  }
  const finTactil = (e) => {
    if (!tactil.current.activo) return
    const dx = e.changedTouches[0].clientX - tactil.current.x
    if (Math.abs(dx) > 45) (dx < 0 ? siguiente : anterior)(true)
    tactil.current.activo = false
    setEnPausa(false)
  }

  return (
    <section
      ref={contenedor}
      className="relative isolate overflow-hidden bg-marina-950"
      aria-roledescription="carrusel"
      aria-label="Líneas de servicio de CONSULTERR"
      onMouseEnter={() => setEnPausa(true)}
      onMouseLeave={() => setEnPausa(false)}
      onFocusCapture={() => setEnPausa(true)}
      onBlurCapture={() => setEnPausa(false)}
      onTouchStart={inicioTactil}
      onTouchEnd={finTactil}
      onKeyDown={teclado}
      tabIndex={-1}
    >
      <div className="relative h-[68vh] min-h-[480px] max-h-[760px] w-full sm:h-[74vh]">
        {carrusel.map((d, i) => {
          const activa = i === actual
          return (
            <article
              key={d.base}
              id={`${idBase}-lamina-${i}`}
              role="group"
              aria-roledescription="diapositiva"
              aria-label={`${i + 1} de ${total}: ${d.titulo}`}
              aria-hidden={!activa}
              className={`absolute inset-0 transition-opacity duration-[900ms] ease-out ${
                activa ? 'opacity-100' : 'pointer-events-none opacity-0'
              }`}
            >
              <Imagen
                img={d}
                prioridad={i === 0}
                sizes="100vw"
                absoluta
                className="h-full w-full"
                imgClassName={
                  reducido
                    ? ''
                    : `transition-transform duration-[9000ms] ease-out ${activa ? 'scale-[1.06]' : 'scale-100'}`
                }
              />
              {/* Velos que garantizan el contraste del texto */}
              <div className="absolute inset-0 bg-gradient-to-r from-marina-950 via-marina-950/68 to-marina-950/5" />
              <div className="absolute inset-0 bg-gradient-to-t from-marina-950/85 via-transparent to-marina-950/45" />

              <div className="container-x relative flex h-full items-center">
                <div className="max-w-2xl pb-16 sm:pb-20">
                  <p
                    className={`inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-marina-300 transition-all duration-700 ${
                      activa ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                    }`}
                    style={{ transitionDelay: activa ? '160ms' : '0ms' }}
                  >
                    <span className="h-px w-7 bg-marina-400" />
                    {d.eyebrow}
                  </p>

                  <h2
                    className={`mt-5 text-[2.1rem] leading-[1.08] text-white transition-all duration-700 sm:text-5xl lg:text-[3.5rem] ${
                      activa ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                    style={{ transitionDelay: activa ? '250ms' : '0ms' }}
                  >
                    {d.titulo}
                  </h2>

                  <p
                    className={`mt-6 max-w-xl text-[15.5px] leading-relaxed text-marina-200/90 transition-all duration-700 sm:text-[17px] ${
                      activa ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                    style={{ transitionDelay: activa ? '340ms' : '0ms' }}
                  >
                    {d.texto}
                  </p>

                  <div
                    className={`mt-8 flex flex-col gap-3 transition-all duration-700 sm:flex-row ${
                      activa ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                    style={{ transitionDelay: activa ? '430ms' : '0ms' }}
                  >
                    <Link to={d.enlace} className="btn-light" tabIndex={activa ? 0 : -1}>
                      Ver esta línea
                      <Icon name="arrow-right" className="h-4 w-4" />
                    </Link>
                    <Link to="/contacto" className="btn-outline-light" tabIndex={activa ? 0 : -1}>
                      Solicitar propuesta
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          )
        })}

        {/* Controles */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0">
          <div className="container-x pointer-events-auto flex items-center justify-between gap-6 pb-6 sm:pb-8">
            <div role="tablist" aria-label="Diapositivas" className="flex items-center gap-2.5">
              {carrusel.map((d, i) => (
                <button
                  key={d.base}
                  role="tab"
                  type="button"
                  aria-selected={i === actual}
                  aria-controls={`${idBase}-lamina-${i}`}
                  aria-label={`Diapositiva ${i + 1}: ${d.eyebrow}`}
                  onClick={() => ir(i, true)}
                  className="group relative h-8 py-3"
                >
                  <span
                    className={`block h-[3px] rounded-full transition-all duration-500 ${
                      i === actual
                        ? 'w-11 bg-white'
                        : 'w-5 bg-white/35 group-hover:w-7 group-hover:bg-white/60'
                    }`}
                  />
                </button>
              ))}
              <span className="ml-2 font-serif text-sm text-white/55 tabular-nums">
                {String(actual + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => anterior(true)}
                aria-label="Diapositiva anterior"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white transition-colors hover:border-white/60 hover:bg-white/10"
              >
                <Icon name="arrow-right" className="h-4 w-4 rotate-180" />
              </button>
              <button
                type="button"
                onClick={() => siguiente(true)}
                aria-label="Diapositiva siguiente"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white transition-colors hover:border-white/60 hover:bg-white/10"
              >
                <Icon name="arrow-right" className="h-4 w-4" />
              </button>
            </div>
          </div>
          {/* Barra de progreso del avance automático */}
          {!reducido && (
            <div className="h-[3px] w-full bg-white/10">
              <div
                key={`${actual}-${enPausa}`}
                className="h-full bg-marina-400"
                style={{
                  animation: enPausa ? 'none' : `barra ${INTERVALO}ms linear forwards`,
                }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Anuncio para lectores de pantalla, solo tras navegación manual */}
      <p className="sr-only" aria-live="polite">
        {manual ? `Diapositiva ${actual + 1} de ${total}: ${carrusel[actual].titulo}` : ''}
      </p>
    </section>
  )
}

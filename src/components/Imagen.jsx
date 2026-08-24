import { useState } from 'react'
import { fuentes } from '../data/imagenes'

/**
 * Imagen responsiva con WebP + JPEG de respaldo y carga progresiva sobre un
 * marcador de posición borroso (LQIP), para que no haya salto de maquetación.
 *
 * `img`      entrada del manifiesto src/data/imagenes.js
 * `sizes`    pista de tamaño para el navegador
 * `prioridad` true en la primera imagen visible: se carga de inmediato
 * `absoluta` la sitúa en `absolute inset-0` para usarla como fondo
 */
export default function Imagen({
  img,
  className = '',
  imgClassName = '',
  sizes = '100vw',
  prioridad = false,
  aspecto = null,
  absoluta = false,
}) {
  const [cargada, setCargada] = useState(false)
  if (!img) return null
  const f = fuentes(img)

  return (
    <div
      className={`${absoluta ? 'absolute inset-0' : 'relative'} overflow-hidden bg-marina-100 ${className}`}
      style={aspecto ? { aspectRatio: aspecto } : undefined}
    >
      {f.lqip && (
        <img
          src={f.lqip}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full scale-110 object-cover blur-xl transition-opacity duration-700 ${
            cargada ? 'opacity-0' : 'opacity-100'
          }`}
        />
      )}
      <picture>
        {f.webpSet && <source type="image/webp" srcSet={f.webpSet} sizes={sizes} />}
        {f.srcSet && <source type="image/jpeg" srcSet={f.srcSet} sizes={sizes} />}
        <img
          src={f.src}
          alt={img.alt}
          loading={prioridad ? 'eager' : 'lazy'}
          decoding={prioridad ? 'sync' : 'async'}
          fetchPriority={prioridad ? 'high' : 'auto'}
          onLoad={() => setCargada(true)}
          className={`relative h-full w-full object-cover transition-opacity duration-700 ${
            cargada ? 'opacity-100' : 'opacity-0'
          } ${imgClassName}`}
        />
      </picture>
      {img.credito && (
        <span className="absolute bottom-1.5 right-2 rounded bg-marina-950/55 px-1.5 py-0.5 text-[10px] text-white/80 backdrop-blur-sm">
          {img.credito}
        </span>
      )}
    </div>
  )
}

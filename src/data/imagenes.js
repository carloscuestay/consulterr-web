/**
 * Manifiesto de imágenes del portal
 * ------------------------------------------------------------------
 * Las imágenes que se sirven hoy son ILUSTRACIONES ORIGINALES creadas para
 * CONSULTERR S.A.S. (fuentes vectoriales en `marca/ilustraciones/`, generadas
 * por `marca/src/build_ilustraciones.py`). No provienen de bancos de imágenes
 * ni arrastran licencias de terceros: son obra propia de la sociedad.
 *
 * ─────────────────────────────────────────────────────────────────────
 *  CÓMO SUSTITUIRLAS POR FOTOGRAFÍAS REALES
 * ─────────────────────────────────────────────────────────────────────
 *  1. Deje la fotografía en `public/fotos/` con el nombre `<base>.jpg`,
 *     donde `<base>` es el valor del campo `base` de cada entrada.
 *     Ejemplo:  public/fotos/carrusel-obra-civil.jpg
 *  2. Cambie `foto: false` por `foto: true` en esa entrada.
 *  3. Actualice `alt` para que describa la foto real, y `credito` con el
 *     autor y la licencia si la imagen es de un tercero.
 *
 *  Tamaños recomendados: carrusel 2400×1350 px (16:9) · servicios 1200×800 px (3:2).
 *  Verifique siempre que la licencia permita el uso comercial y conserve la
 *  constancia de la licencia junto con el archivo.
 */

const RUTA_ILUSTRACIONES = 'ilustraciones'
const RUTA_FOTOS = 'fotos'

/** Anchos exportados por tipo (deben coincidir con build_ilustraciones.py). */
const ANCHOS = {
  carrusel: [800, 1400, 2000],
  servicio: [480, 800, 1200],
}

const base = import.meta.env.BASE_URL || '/'
const url = (p) => `${base}${p}`.replace(/\/{2,}/g, '/')

/**
 * Devuelve las rutas de una imagen del manifiesto.
 * Si `foto` es true se usa el JPG único de `public/fotos/`;
 * si no, el juego responsivo WebP/JPEG de las ilustraciones.
 */
export function fuentes(img) {
  if (img.foto) {
    const u = url(`${RUTA_FOTOS}/${img.base}.jpg`)
    return { src: u, srcSet: null, webpSet: null, lqip: null }
  }
  const anchos = ANCHOS[img.tipo]
  const p = (ext, w) => `${url(`${RUTA_ILUSTRACIONES}/${img.base}-${w}w.${ext}`)} ${w}w`
  return {
    src: url(`${RUTA_ILUSTRACIONES}/${img.base}-${anchos[1]}w.jpg`),
    srcSet: anchos.map((w) => p('jpg', w)).join(', '),
    webpSet: anchos.map((w) => p('webp', w)).join(', '),
    lqip: url(`${RUTA_ILUSTRACIONES}/${img.base}-lqip.jpg`),
  }
}

/** Diapositivas del carrusel del inicio. */
export const carrusel = [
  {
    base: 'carrusel-obra-civil',
    tipo: 'carrusel',
    foto: false,
    credito: null,
    eyebrow: 'Interventoría y supervisión',
    titulo: 'La obra que se vigila bien es la que dura',
    texto:
      'Interventoría técnica, financiera y jurídica de obra civil, con informes auditables y control de calidad en sitio.',
    enlace: '/servicios/interventoria-y-supervision',
    alt: 'Viaducto en construcción sobre un valle al amanecer, con grúas torre trabajando sobre el tablero.',
  },
  {
    base: 'carrusel-agua-potable',
    tipo: 'carrusel',
    foto: false,
    credito: null,
    eyebrow: 'Servicios públicos y ambiente',
    titulo: 'Agua potable, saneamiento y control ambiental',
    texto:
      'PGIRS, PSMV, PUEAA, estudios tarifarios y diseño de infraestructura de acueducto, alcantarillado y aseo.',
    enlace: '/servicios/servicios-publicos-y-ambiente',
    alt: 'Planta de tratamiento de agua potable vista desde lo alto, con decantadores circulares y tuberías.',
  },
  {
    base: 'carrusel-puerto',
    tipo: 'carrusel',
    foto: false,
    credito: null,
    eyebrow: 'Consultoría jurídica',
    titulo: 'Derecho portuario, marítimo y contratación estatal',
    texto:
      'Estructuración contractual, conceptos con línea normativa citada y defensa en procesos de responsabilidad fiscal.',
    enlace: '/servicios/consultoria-juridica',
    alt: 'Terminal portuaria de Cartagena de Indias con grúas pórtico, contenedores y las murallas en primer plano.',
  },
  {
    base: 'carrusel-territorio',
    tipo: 'carrusel',
    foto: false,
    credito: null,
    eyebrow: 'Planeación territorial',
    titulo: 'Leer el territorio antes de intervenirlo',
    texto:
      'Planes de desarrollo, POT, planes de gestión del riesgo y proyectos estructurados para pasar el filtro del DNP.',
    enlace: '/servicios/planeacion-territorial',
    alt: 'Paisaje de cordillera con un río, un poblado y curvas de nivel topográficas superpuestas.',
  },
  {
    base: 'carrusel-ciudad-datos',
    tipo: 'carrusel',
    foto: false,
    credito: null,
    eyebrow: 'Hacienda pública · Tecnología',
    titulo: 'Decisiones públicas respaldadas en evidencia',
    texto:
      'Presupuesto, recaudo y marco fiscal apoyados en sistemas de información, analítica de datos e inteligencia artificial.',
    enlace: '/servicios/hacienda-publica',
    alt: 'Silueta de una ciudad al atardecer con una capa de datos y nodos de información superpuesta.',
  },
]

/** Imagen de apoyo por línea de servicio, indexada por slug. */
export const imagenesServicio = {
  'hacienda-publica': {
    base: 'servicio-hacienda-publica',
    tipo: 'servicio',
    foto: false,
    credito: null,
    alt: 'Edificio institucional con columnas junto a un gráfico de barras ascendente y un documento sellado.',
  },
  'tecnologia-e-ia': {
    base: 'servicio-tecnologia-e-ia',
    tipo: 'servicio',
    foto: false,
    credito: null,
    alt: 'Bastidores de servidor, una pantalla con una serie de datos y un grafo de nodos conectados.',
  },
  'planeacion-territorial': {
    base: 'servicio-planeacion-territorial',
    tipo: 'servicio',
    foto: false,
    credito: null,
    alt: 'Plano de zonificación urbana desplegado sobre una mesa, con curvas de nivel y una estación total.',
  },
  'servicios-publicos-y-ambiente': {
    base: 'servicio-servicios-publicos-y-ambiente',
    tipo: 'servicio',
    foto: false,
    credito: null,
    alt: 'Decantadores circulares de una planta de tratamiento de agua enlazados por tuberías, con vegetación alrededor.',
  },
  'consultoria-juridica': {
    base: 'servicio-consultoria-juridica',
    tipo: 'servicio',
    foto: false,
    credito: null,
    alt: 'Balanza de la justicia frente a una columnata, junto a documentos con sello.',
  },
  'financiera-social-y-empresarial': {
    base: 'servicio-financiera-social-y-empresarial',
    tipo: 'servicio',
    foto: false,
    credito: null,
    alt: 'Gráfico de barras y línea de tendencia ascendente junto a un anillo de composición y siluetas de personas.',
  },
  'interventoria-y-supervision': {
    base: 'servicio-interventoria-y-supervision',
    tipo: 'servicio',
    foto: false,
    credito: null,
    alt: 'Estructura de edificación en construcción con andamios y grúas torre, un casco de obra y un acta en primer plano.',
  },
}

export const imagenServicio = (slug) => imagenesServicio[slug] || null

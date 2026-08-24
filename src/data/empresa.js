/**
 * Datos institucionales de CONSULTERR S.A.S.
 * ------------------------------------------------------------------
 * Fuente: Documento privado de constitución (Ley 1258 de 2008), 2026.
 *
 * NOTA DE PROTECCIÓN DE DATOS (Ley 1581 de 2012):
 * Este archivo contiene únicamente información societaria de naturaleza
 * pública —la que consta en el Registro Mercantil y es consultable por
 * cualquier persona—. No se publican números de cédula, direcciones de
 * residencia ni datos personales de accionistas o administradores.
 */

export const empresa = {
  razonSocial: 'ASESORES CONSULTORES E INTERVENTORES TERRITORIALES S.A.S.',
  sigla: 'CONSULTERR S.A.S.',
  marca: 'CONSULTERR',
  descriptor: 'Asesores & Consultores Territoriales',
  claim: 'Interventoría, consultoría y asesoría público-privada',
  naturaleza: 'Sociedad por Acciones Simplificada',
  marcoLegal: 'Ley 1258 de 2008',
  anioConstitucion: 2026,
  duracion: 'Indefinida',
  domicilio: {
    ciudad: 'Cartagena de Indias',
    departamento: 'Bolívar',
    pais: 'Colombia',
    direccion: 'Nuevo Paraguay, Mz. 3 Lote 16',
    completo: 'Nuevo Paraguay Mz. 3 Lote 16, Cartagena de Indias, Bolívar, Colombia',
  },
  capital: {
    autorizado: 100000000,
    suscrito: 100000000,
    pagado: 100000000,
    acciones: 100000,
    valorNominal: 1000,
    moneda: 'COP',
  },
  registro: {
    camara: 'Cámara de Comercio de Cartagena',
    // Se diligencian una vez surtida la inscripción en el Registro Mercantil.
    nit: 'En trámite de asignación',
    matricula: 'En trámite de inscripción',
  },
  contacto: {
    // Correo de contacto habilitado por la sociedad.
    email: 'contacto@consulterr.com',
    emailAlterno: 'carloscuestay@gmail.com',
    // Sustituya por la línea corporativa cuando esté habilitada.
    telefono: '+57 300 000 0000',
    whatsapp: '+573000000000',
    horario: 'Lunes a viernes, 8:00 a.m. – 6:00 p.m. (COT, UTC-5)',
  },
  redes: {
    linkedin: 'https://www.linkedin.com/company/consulterr',
    instagram: 'https://www.instagram.com/consulterr',
    facebook: 'https://www.facebook.com/consulterr',
    x: 'https://x.com/consulterr',
    tiktok: 'https://www.tiktok.com/@consulterr',
    youtube: 'https://www.youtube.com/@consulterr',
  },
  sitio: {
    dominio: 'https://www.consulterr.com',
    nombre: 'CONSULTERR S.A.S.',
  },
}

export const proposito = {
  mision:
    'Fortalecer la capacidad institucional de entidades públicas y organizaciones privadas mediante servicios de interventoría, consultoría y asesoría técnicamente rigurosos, jurídicamente sólidos y ejecutados con estándares verificables, que se traduzcan en mejor gasto público, obras bien construidas y decisiones respaldadas en evidencia.',
  vision:
    'Ser en 2032 la firma de referencia del Caribe colombiano en interventoría y consultoría territorial, reconocida por integrar ingeniería, hacienda pública, derecho y tecnología en un mismo equipo, y por elevar el estándar técnico con el que se planea, contrata y vigila la inversión pública en Colombia.',
  promesa:
    'Cada entregable de CONSULTERR se sostiene sobre norma citada, dato verificable y responsable identificable.',
}

export const valores = [
  {
    titulo: 'Rigor técnico',
    texto:
      'Ningún concepto sale sin soporte normativo, memoria de cálculo o evidencia de campo. La firma responde por lo que firma.',
    icono: 'ruler',
  },
  {
    titulo: 'Independencia',
    texto:
      'La interventoría exige distancia. Declaramos y administramos conflictos de interés antes de aceptar cualquier encargo.',
    icono: 'scale',
  },
  {
    titulo: 'Transparencia',
    texto:
      'Trazabilidad completa: quién hizo qué, cuándo y con qué fuente. Los informes se entregan auditables, no narrados.',
    icono: 'eye',
  },
  {
    titulo: 'Cumplimiento',
    texto:
      'Contratación estatal, protección de datos, gestión documental y régimen anticorrupción como línea base, no como añadido.',
    icono: 'shield',
  },
  {
    titulo: 'Multidisciplinariedad',
    texto:
      'Ingeniería, finanzas públicas, derecho, ambiente y tecnología trabajando sobre el mismo expediente.',
    icono: 'users',
  },
  {
    titulo: 'Arraigo territorial',
    texto:
      'Conocemos el municipio colombiano por dentro: sus tiempos, sus restricciones fiscales y sus realidades operativas.',
    icono: 'map',
  },
]

export const gobierno = {
  organos: [
    {
      nombre: 'Asamblea General de Accionistas',
      rol: 'Máximo órgano de dirección',
      detalle:
        'Integrada por todos los accionistas inscritos en el Libro de Registro de Acciones. Se reúne ordinariamente al menos una vez al año dentro del primer trimestre para aprobar estados financieros y decidir sobre distribución de utilidades.',
    },
    {
      nombre: 'Representante Legal — Gerente General',
      rol: 'Administración y representación',
      detalle:
        'Designado por la Asamblea para períodos de dos (2) años, reelegible indefinidamente. Ejerce la representación judicial y extrajudicial y celebra los actos comprendidos en el objeto social hasta 5.000 SMMLV sin autorización previa.',
    },
  ],
  mayorias: [
    { asunto: 'Reformas estatutarias', umbral: '70% de las acciones suscritas' },
    { asunto: 'Transformación, fusión, escisión o disolución anticipada', umbral: '70%' },
    { asunto: 'Ingreso de nuevos accionistas', umbral: '70%' },
    { asunto: 'Creación de acciones privilegiadas', umbral: '70%' },
    { asunto: 'Operaciones superiores a 3.000 SMMLV', umbral: '70%' },
    { asunto: 'Pago de dividendos en acciones liberadas', umbral: '80%' },
    { asunto: 'Decisiones ordinarias', umbral: 'Mayoría de votos presentes' },
  ],
  controles: [
    'Reserva legal del 10% anual de las utilidades líquidas hasta alcanzar el 50% del capital suscrito.',
    'Prohibición de constituir la sociedad en garante de obligaciones de terceros sin autorización expresa de la Asamblea.',
    'Prohibición de firmar títulos valores sin contraprestación directa a favor de la sociedad.',
    'Prohibición de operar en conflicto de interés sin aprobación previa de la Asamblea.',
    'Prohibición de distribuir utilidades antes de enjugar pérdidas de ejercicios anteriores.',
    'Derecho de preferencia estatutario en la negociación de acciones.',
    'Cláusula compromisoria: arbitraje en derecho ante el Centro de Conciliación y Arbitraje de la Cámara de Comercio de Cartagena.',
  ],
  libros: [
    'Libro de Registro de Accionistas',
    'Libro de Actas de la Asamblea General de Accionistas',
    'Libros de contabilidad exigidos por la ley',
  ],
}

/**
 * Composición accionaria — información societaria pública.
 * Se identifican las personas jurídicas fundadoras; la participación de
 * personas naturales se reporta de forma agregada, sin datos personales.
 */
export const composicionAccionaria = [
  {
    nombre: 'Fundación FUNDETERC',
    tipo: 'Persona jurídica',
    participacion: 25,
    nota: 'Fundación para el desarrollo territorial, con domicilio en Cartagena de Indias.',
  },
  {
    nombre: 'Fundación FISEP',
    tipo: 'Persona jurídica',
    participacion: 25,
    nota: 'Fundación de investigación social y estudios públicos, con domicilio en Cartagena de Indias.',
  },
  {
    nombre: 'INGETIC S.A.S.',
    tipo: 'Persona jurídica',
    participacion: 25,
    nota: 'Sociedad de ingeniería y tecnologías de la información, con domicilio en Cartagena de Indias.',
  },
  {
    nombre: 'Accionista fundador — persona natural',
    tipo: 'Persona natural',
    participacion: 25,
    nota: 'Participación individual. Su identificación consta en el Registro Mercantil y en el Libro de Registro de Accionistas.',
  },
]

export const cifras = [
  { valor: '100.000', unidad: 'acciones', etiqueta: 'Capital suscrito y pagado', detalle: '$100.000.000 COP' },
  { valor: '7', unidad: 'líneas', etiqueta: 'Áreas de especialidad', detalle: 'De hacienda pública a interventoría' },
  { valor: '4', unidad: 'socios', etiqueta: 'Accionistas fundadores', detalle: '3 personas jurídicas + 1 natural' },
  { valor: '100%', unidad: '', etiqueta: 'Capital pagado en constitución', detalle: 'Sin capital por suscribir' },
]

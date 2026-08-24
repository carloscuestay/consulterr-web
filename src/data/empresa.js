/**
 * Datos institucionales de CONSULTERR S.A.S.
 * ------------------------------------------------------------------
 * ALCANCE DE LO QUE SE PUBLICA
 *
 * Este archivo contiene únicamente información de presentación comercial e
 * identificación de la sociedad. Por decisión de la compañía NO se publica
 * información patrimonial ni de composición societaria: capital autorizado,
 * suscrito o pagado, número o valor de acciones, identidad o participación de
 * accionistas, mayorías decisorias expresadas en porcentaje de acciones ni
 * reservas.
 *
 * Tampoco se publican datos personales de accionistas o administradores
 * (documentos de identidad, direcciones de residencia), conforme a la
 * Ley 1581 de 2012 y el Decreto 1074 de 2015.
 *
 * Quien requiera esa información para un proceso de contratación debe
 * solicitarla por los canales formales: se remite el certificado de existencia
 * y representación legal expedido por la Cámara de Comercio.
 */

export const empresa = {
  razonSocial: 'ASESORES CONSULTORES E INTERVENTORES TERRITORIALES S.A.S.',
  sigla: 'CONSULTERR S.A.S.',
  marca: 'CONSULTERR',
  descriptor: 'Asesores & Consultores Territoriales',
  claim: 'Interventoría, consultoría y asesoría público-privada',
  naturaleza: 'Sociedad por Acciones Simplificada',
  marcoLegal: 'Ley 1258 de 2008',
  duracion: 'Indefinida',
  domicilio: {
    ciudad: 'Cartagena de Indias',
    departamento: 'Bolívar',
    pais: 'Colombia',
    direccion: 'Nuevo Paraguay, Mz. 3 Lote 16',
    completo: 'Nuevo Paraguay Mz. 3 Lote 16, Cartagena de Indias, Bolívar, Colombia',
  },
  registro: {
    camara: 'Cámara de Comercio de Cartagena',
    // Se diligencian una vez surtida la inscripción en el Registro Mercantil.
    nit: 'En trámite de asignación',
    matricula: 'En trámite de inscripción',
  },
  contacto: {
    email: 'gerencia@consulterr.com.co',
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
    dominio: 'https://www.consulterr.com.co',
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

/**
 * Gobierno y cumplimiento — se describen los compromisos de conducta y los
 * controles internos de la firma, no su estructura patrimonial.
 */
export const gobierno = {
  administracion: [
    {
      nombre: 'Representación legal',
      rol: 'Quién obliga a la sociedad',
      detalle:
        'La sociedad actúa a través de su Representante Legal, designado conforme a los estatutos e inscrito en el Registro Mercantil. Su nombre, facultades y limitaciones constan en el certificado de existencia y representación legal que expide la Cámara de Comercio, documento que remitimos a solicitud de cualquier entidad contratante.',
      icono: 'shield-check',
    },
    {
      nombre: 'Dirección técnica por encargo',
      rol: 'Quién responde por el entregable',
      detalle:
        'Cada contrato tiene un director técnico identificado que firma los productos y responde por ellos ante la entidad. La asignación se comunica por escrito al inicio del encargo y cualquier cambio se notifica formalmente antes de que ocurra.',
      icono: 'users',
    },
  ],

  compromisos: [
    {
      titulo: 'Independencia e imparcialidad',
      texto:
        'Antes de aceptar un encargo verificamos y declaramos por escrito cualquier situación que pueda comprometer la objetividad del equipo. Si aparece sobrevenidamente, se informa a la entidad y se aparta al profesional involucrado.',
      icono: 'scale',
    },
    {
      titulo: 'Conflictos de interés',
      texto:
        'No asumimos simultáneamente la consultoría y la interventoría de un mismo proyecto, ni asesoramos a dos partes con intereses contrapuestos en un mismo proceso.',
      icono: 'eye',
    },
    {
      titulo: 'Régimen anticorrupción',
      texto:
        'Política de cero pagos indebidos, dádivas o atenciones que puedan interpretarse como incentivo. Aplica a socios comerciales, subcontratistas y personal vinculado, y su incumplimiento termina la relación.',
      icono: 'shield',
    },
    {
      titulo: 'Protección de datos',
      texto:
        'Tratamiento de datos personales conforme a la Ley 1581 de 2012 y al Decreto 1074 de 2015, con autorización previa, finalidad definida y supresión al terminar el encargo.',
      icono: 'file-text',
    },
    {
      titulo: 'Gestión documental',
      texto:
        'Los expedientes se organizan conforme a los lineamientos del Archivo General de la Nación y se entregan indexados al cierre, de modo que la entidad conserve la trazabilidad completa.',
      icono: 'ruler',
    },
    {
      titulo: 'Confidencialidad',
      texto:
        'La información de la entidad no se usa para fines distintos del encargo ni se comparte con terceros, salvo requerimiento de autoridad competente. El deber subsiste después de terminado el contrato.',
      icono: 'shield-check',
    },
  ],

  controversias: {
    titulo: 'Solución de controversias',
    texto:
      'Los estatutos de la sociedad incorporan cláusula compromisoria: las controversias societarias se resuelven ante un Tribunal de Arbitramento que decide en derecho, con sede en el Centro de Conciliación y Arbitraje de la Cámara de Comercio de Cartagena de Indias. En materia contractual, la firma privilegia los mecanismos alternativos de solución de conflictos antes de acudir a la vía judicial.',
  },

  documentos: [
    'Certificado de existencia y representación legal',
    'Registro Único Tributario (RUT)',
    'Certificaciones de experiencia del equipo propuesto',
    'Estados financieros y certificación del revisor fiscal o contador',
    'Certificados de aportes al sistema de seguridad social',
    'Pólizas y garantías exigidas por el pliego',
  ],
}

/** Cifras de presentación: capacidad y método, sin contenido patrimonial. */
export const cifras = [
  {
    valor: '7',
    unidad: 'líneas',
    etiqueta: 'Áreas de especialidad',
    detalle: 'De hacienda pública a interventoría',
  },
  {
    valor: '5',
    unidad: 'fases',
    etiqueta: 'Método de trabajo',
    detalle: 'Del diagnóstico al cierre verificado',
  },
  {
    valor: '4',
    unidad: 'disciplinas',
    etiqueta: 'Equipo multidisciplinario',
    detalle: 'Ingeniería, derecho, finanzas y tecnología',
  },
  {
    valor: 'Nacional',
    unidad: '',
    etiqueta: 'Cobertura',
    detalle: 'Con base en Cartagena de Indias',
  },
]

/** Formas de participación en procesos de contratación. */
export const modalidades = [
  {
    titulo: 'Contratación directa',
    texto:
      'Consultoría, asesoría e interventoría contratadas directamente por la entidad o la empresa, con propuesta técnica y económica formal.',
    icono: 'file-text',
  },
  {
    titulo: 'Procesos de selección',
    texto:
      'Participación en licitaciones, concursos de méritos, selección abreviada y mínima cuantía, conforme a la Ley 80 de 1993 y la Ley 1150 de 2007.',
    icono: 'gavel',
  },
  {
    titulo: 'Consorcios y uniones temporales',
    texto:
      'Conformación de estructuras plurales con firmas aliadas cuando el objeto exige capacidad o experiencia complementaria.',
    icono: 'heart-handshake',
  },
  {
    titulo: 'Convenios y cooperación',
    texto:
      'Convenios interadministrativos, de asociación y proyectos con banca multilateral y cooperación internacional.',
    icono: 'banknote',
  },
]

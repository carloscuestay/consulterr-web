import { empresa } from './empresa'

const E = empresa

export const documentos = {
  'tratamiento-de-datos': {
    titulo: 'Política de Tratamiento de Datos Personales',
    eyebrow: 'Ley 1581 de 2012',
    lead: `Política adoptada por ${E.sigla} en cumplimiento de la Ley 1581 de 2012, el Decreto 1074 de 2015 y demás normas concordantes sobre protección de datos personales en Colombia.`,
    actualizado: 'Vigente desde 2026',
    secciones: [
      {
        h: '1. Responsable del tratamiento',
        p: [
          `${E.razonSocial} —${E.sigla}—, sociedad comercial domiciliada en ${E.domicilio.ciudad}, ${E.domicilio.departamento}, con dirección en ${E.domicilio.direccion}, actúa como Responsable del Tratamiento de los datos personales recolectados a través de este sitio web y de sus canales de atención.`,
          `Canal de atención para el ejercicio de derechos: ${E.contacto.email}.`,
        ],
      },
      {
        h: '2. Datos que recolectamos',
        p: [
          'A través del formulario de contacto recolectamos únicamente los datos que el titular suministra voluntariamente: nombre completo, entidad o empresa, cargo, correo electrónico, número telefónico y la descripción de la necesidad planteada.',
          'Este sitio no recolecta datos sensibles en los términos del artículo 5° de la Ley 1581 de 2012, ni datos de niñas, niños y adolescentes.',
        ],
      },
      {
        h: '3. Finalidades del tratamiento',
        lista: [
          'Atender, tramitar y responder las solicitudes de información, cotización o propuesta técnica.',
          'Elaborar y remitir ofertas comerciales y propuestas de servicios.',
          'Gestionar la relación precontractual y contractual derivada de la solicitud.',
          'Dar cumplimiento a obligaciones legales, contables y de reporte a autoridades competentes.',
          'Remitir información institucional relacionada con los servicios de la sociedad, cuando el titular lo haya autorizado.',
        ],
      },
      {
        h: '4. Derechos del titular',
        p: ['Conforme al artículo 8° de la Ley 1581 de 2012, el titular de los datos tiene derecho a:'],
        lista: [
          'Conocer, actualizar y rectificar sus datos personales.',
          'Solicitar prueba de la autorización otorgada, salvo en los casos exceptuados por la ley.',
          'Ser informado, previa solicitud, sobre el uso que se ha dado a sus datos.',
          'Presentar quejas ante la Superintendencia de Industria y Comercio por infracciones a la ley.',
          'Revocar la autorización y/o solicitar la supresión del dato, cuando proceda.',
          'Acceder de forma gratuita a sus datos personales que hayan sido objeto de tratamiento.',
        ],
      },
      {
        h: '5. Procedimiento para el ejercicio de derechos',
        p: [
          `Las consultas y reclamos deben dirigirse a ${E.contacto.email}, indicando el nombre del titular, la descripción de los hechos, la dirección de notificación y los documentos que se quieran hacer valer.`,
          'Las consultas se atienden en un término máximo de diez (10) días hábiles, prorrogable por cinco (5) días hábiles más. Los reclamos se atienden en un término máximo de quince (15) días hábiles, prorrogable por ocho (8) días hábiles más, informando al titular los motivos de la demora.',
        ],
      },
      {
        h: '6. Seguridad de la información',
        p: [
          'La sociedad adopta medidas técnicas, humanas y administrativas razonables para proteger los datos personales contra adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento, incluyendo cifrado en tránsito, control de acceso por rol y retención limitada al tiempo necesario para la finalidad.',
        ],
      },
      {
        h: '7. Transferencia y transmisión',
        p: [
          'Los datos no se venden, arriendan ni comparten con terceros con fines comerciales. Pueden ser transmitidos a proveedores de servicios tecnológicos que actúan como encargados bajo contrato, y transferidos a autoridades competentes cuando exista requerimiento legal.',
        ],
      },
      {
        h: '8. Vigencia',
        p: [
          'Esta política rige a partir de su publicación. Las bases de datos se conservarán mientras subsista la finalidad que justificó su recolección y durante los términos de conservación exigidos por la normativa contable, tributaria y de contratación estatal aplicable.',
        ],
      },
    ],
  },

  terminos: {
    titulo: 'Términos y condiciones de uso',
    eyebrow: 'Condiciones del sitio',
    lead: `Condiciones aplicables al acceso y uso del sitio web institucional de ${E.sigla}.`,
    actualizado: 'Vigente desde 2026',
    secciones: [
      {
        h: '1. Titularidad del sitio',
        p: [
          `Este sitio web es propiedad de ${E.razonSocial} —${E.sigla}—, sociedad por acciones simplificada constituida conforme a la Ley 1258 de 2008, con domicilio principal en ${E.domicilio.ciudad}, ${E.domicilio.departamento}, Colombia.`,
        ],
      },
      {
        h: '2. Objeto y alcance de la información',
        p: [
          'El contenido de este sitio tiene carácter informativo sobre los servicios de la sociedad. No constituye oferta mercantil vinculante, concepto jurídico, asesoría técnica particular ni recomendación profesional aplicable a un caso concreto.',
          'Toda prestación de servicios se rige exclusivamente por el contrato o la orden de servicio suscrita entre las partes.',
        ],
      },
      {
        h: '3. Propiedad intelectual',
        p: [
          'El logotipo, la denominación CONSULTERR, los textos, la arquitectura de información, el diseño gráfico y el código fuente del sitio son propiedad de la sociedad o se usan bajo licencia. Su reproducción, distribución o transformación sin autorización escrita está prohibida.',
          'Las referencias a normas, entidades públicas y estándares se citan con fines informativos y pertenecen a sus respectivos titulares.',
        ],
      },
      {
        h: '4. Uso permitido',
        lista: [
          'Consultar y descargar la información para uso personal o institucional legítimo.',
          'Citar el contenido indicando la fuente y el enlace correspondiente.',
        ],
      },
      {
        h: '5. Uso prohibido',
        lista: [
          'Emplear el sitio para fines ilícitos o contrarios a la buena fe.',
          'Intentar acceder a áreas restringidas, alterar el funcionamiento del sitio o introducir código malicioso.',
          'Extraer contenido de forma masiva y automatizada sin autorización.',
          'Suplantar la identidad de la sociedad, de sus administradores o de terceros.',
        ],
      },
      {
        h: '6. Limitación de responsabilidad',
        p: [
          'La sociedad procura mantener la información actualizada y exacta, pero no garantiza que esté libre de errores ni que el sitio opere de manera ininterrumpida. No responde por daños derivados del uso del sitio ni por el contenido de sitios de terceros enlazados.',
        ],
      },
      {
        h: '7. Ley aplicable y resolución de controversias',
        p: [
          'Estos términos se rigen por la ley colombiana. Las controversias relativas al uso del sitio se someterán a los jueces de la República de Colombia con competencia en Cartagena de Indias, sin perjuicio de la cláusula compromisoria estatutaria aplicable a las relaciones societarias.',
        ],
      },
    ],
  },

  cookies: {
    titulo: 'Política de cookies',
    eyebrow: 'Tecnologías de seguimiento',
    lead: 'Información sobre el uso de cookies y almacenamiento local en este sitio web.',
    actualizado: 'Vigente desde 2026',
    secciones: [
      {
        h: '1. Qué son las cookies',
        p: [
          'Las cookies son pequeños archivos que un sitio web almacena en el navegador del visitante para recordar información entre visitas o durante la navegación.',
        ],
      },
      {
        h: '2. Cookies que usa este sitio',
        p: [
          'Este sitio es de carácter informativo y está construido como una aplicación estática. No instala cookies publicitarias, de perfilamiento ni de seguimiento entre sitios.',
        ],
        lista: [
          'Cookies técnicas estrictamente necesarias: garantizan el funcionamiento básico del sitio y la seguridad de la navegación.',
          'Almacenamiento local del navegador: puede usarse para recordar preferencias de visualización del propio visitante. Esta información no se transmite a la sociedad.',
        ],
      },
      {
        h: '3. Servicios de terceros',
        p: [
          'La página de contacto incorpora un mapa embebido de OpenStreetMap y las tipografías se sirven desde Google Fonts. Estos proveedores pueden registrar la dirección IP de la solicitud conforme a sus propias políticas de privacidad.',
        ],
      },
      {
        h: '4. Cómo gestionar las cookies',
        p: [
          'El visitante puede configurar su navegador para bloquear o eliminar cookies en cualquier momento. El bloqueo de cookies técnicas puede afectar el funcionamiento de algunas secciones del sitio.',
        ],
      },
      {
        h: '5. Contacto',
        p: [
          `Para consultas sobre esta política escriba a ${E.contacto.email}.`,
        ],
      },
    ],
  },
}

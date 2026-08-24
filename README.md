# CONSULTERR S.A.S. — Portal web e identidad visual

Portal corporativo y sistema gráfico de **ASESORES CONSULTORES E INTERVENTORES TERRITORIALES S.A.S.** (CONSULTERR S.A.S.), sociedad por acciones simplificada constituida en Cartagena de Indias conforme a la Ley 1258 de 2008.

Todo el contenido institucional del sitio proviene del documento privado de constitución de la sociedad.

---

## Contenido del repositorio

```
.
├── src/                  Aplicación React (portal web)
│   ├── components/       Header, Footer, Logo, Carrusel, Imagen, iconos
│   ├── pages/            Inicio, Nosotros, Servicios, Metodología,
│   │                     Gobierno y cumplimiento, Contacto, Legales, 404
│   ├── data/             Contenido institucional (empresa, servicios,
│   │                     legal) y el manifiesto de imágenes
│   └── hooks/            useSeo — títulos, meta y Open Graph por ruta
├── public/               Favicon, manifest, robots.txt, sitemap, logos SVG
│   └── ilustraciones/    12 escenas en WebP + JPEG responsivos
├── marca/                Kit de identidad visual completo
│   ├── logos/            SVG + PNG de todas las variantes + favicon.ico
│   ├── firma-correo/     Firma HTML y generador para diligenciar
│   ├── papeleria/        Membrete, tarjeta y carátula (SVG · PDF · PNG 300 dpi)
│   ├── redes/            24 plantillas por plataforma (SVG editable + PNG)
│   ├── manual/           Manual de marca en PDF (13 páginas)
│   ├── ilustraciones/    Fuentes vectoriales de las 12 escenas
│   └── src/              Scripts Python que generan todo lo anterior
├── scripts/postbuild.mjs Copia index.html a 404.html (fallback SPA)
└── .github/workflows/    Despliegue automático en GitHub Pages
```

---

## Puesta en marcha

Requisitos: **Node.js 20 o superior**.

```bash
npm install       # instala dependencias
npm run dev       # servidor de desarrollo en http://localhost:5173
npm run build     # compila a dist/
npm run preview   # sirve dist/ en http://localhost:4173
```

### Stack

| Pieza | Tecnología |
|---|---|
| Bundler | Vite |
| Interfaz | React 19 + React Router 7 |
| Estilos | Tailwind CSS 3 |
| Iconos | lucide-react + iconos de marca propios |
| Tipografías | Source Serif 4 · Plus Jakarta Sans (Google Fonts) |

Sin backend: es un sitio estático. El formulario de contacto compone un correo con `mailto:`; para conectar un servicio real (Formspree, Resend, API propia) se sustituye la función `onSubmit` en `src/pages/Contacto.jsx`.

---

## Publicar el sitio

### GitHub Pages (incluido)

1. Cree el repositorio en GitHub y suba el código (el ZIP se entrega sin
   historial de Git, así que el primer paso es inicializarlo):

   ```bash
   git init
   git add .
   git commit -m "Portal web e identidad visual CONSULTERR S.A.S."
   git branch -M main
   git remote add origin https://github.com/<usuario>/consulterr-web.git
   git push -u origin main
   ```

2. En GitHub: **Settings → Pages → Source: GitHub Actions**.
3. El flujo `.github/workflows/deploy.yml` compila y publica en cada push a `main`.

> El flujo ajusta `VITE_BASE` al nombre del repositorio automáticamente. Si usa un dominio propio o el repositorio `<usuario>.github.io`, cambie ese valor a `/` en el workflow.

### Vercel o Netlify

Conecte el repositorio y acepte la detección automática:

- Comando de compilación: `npm run build`
- Directorio de salida: `dist`

El archivo `public/_redirects` ya resuelve el enrutado del lado del cliente en Netlify; en Vercel funciona sin configuración adicional.

### Dominio propio

1. Apunte el dominio al hosting elegido.
2. En `src/data/empresa.js`, actualice `empresa.sitio.dominio`.
3. Actualice el mismo dominio en `public/robots.txt` y `public/sitemap.xml`.

---

## Editar el contenido

Casi todo el texto institucional está centralizado y no requiere tocar componentes:

| Qué | Dónde |
|---|---|
| Razón social, domicilio, contacto, redes, dominio | `src/data/empresa.js` |
| Las 7 líneas de servicio, sectores, metodología | `src/data/servicios.js` |
| Compromisos de gobierno y cumplimiento | `src/data/empresa.js` → `gobierno` |
| Política de datos, términos, cookies | `src/data/legal.js` |
| Diapositivas del carrusel e imágenes de servicio | `src/data/imagenes.js` |

Al completar el NIT y la matrícula mercantil tras la inscripción en el Registro Mercantil, actualice `empresa.registro` — el pie de página los toma de ahí.

### Qué NO publica el sitio

Por decisión de la compañía, el portal no expone información patrimonial ni de composición societaria: capital autorizado, suscrito o pagado, número o valor de acciones, identidad o participación de accionistas, mayorías decisorias por porcentaje de acciones ni reservas. Esa información se acredita ante la entidad contratante por los canales formales, con el certificado de existencia y representación legal y los estados financieros.

Tampoco se publican datos personales de accionistas ni administradores, conforme a la Ley 1581 de 2012 y el Decreto 1074 de 2015.

---

## Imágenes del portal

Las imágenes que se sirven hoy son **ilustraciones originales** creadas para la sociedad (fuentes vectoriales en `marca/ilustraciones/`). No provienen de bancos de imágenes ni arrastran licencias de terceros.

Para sustituirlas por fotografías reales:

1. Deje la foto en `public/fotos/` con el nombre `<base>.jpg`, donde `<base>` es el campo `base` de la entrada en `src/data/imagenes.js`. Ejemplo: `public/fotos/carrusel-obra-civil.jpg`.
2. Cambie `foto: false` por `foto: true` en esa entrada.
3. Actualice `alt` con la descripción de la foto real y, si es de un tercero, `credito` con el autor y la licencia.

Tamaños recomendados: carrusel 2400 × 1350 px (16:9), servicios 1200 × 800 px (3:2). Verifique siempre que la licencia permita uso comercial y conserve la constancia junto al archivo.

## Regenerar la identidad visual

El logotipo del componente `src/components/Logo.jsx` **se genera**, no se edita a mano: contiene la tipografía convertida a trazados para que se vea idéntica sin depender de webfonts.

```bash
pip install cairosvg fonttools pillow pypdf --break-system-packages

npm run marca                          # logos SVG + PNG + favicon + Logo.jsx
python3 marca/src/build_firma.py       # firma de correo
python3 marca/src/build_papeleria.py   # papelería
python3 marca/src/build_redes.py       # plantillas de redes
python3 marca/src/build_manual.py      # manual de marca en PDF
python3 marca/src/build_ilustraciones.py  # las 12 escenas del portal
```

Los scripts usan las fuentes TeX Gyre Termes (serif) y Poppins (sans) instaladas en el sistema. En un equipo sin ellas, ajuste las rutas al inicio de `marca/src/build_logo.py`.

---

## Accesibilidad y rendimiento

- Contraste conforme a WCAG 2.1 AA en toda la paleta.
- Navegación completa por teclado, con enlace «Saltar al contenido» y foco visible.
- Las animaciones se desactivan con `prefers-reduced-motion`.
- Rutas divididas por código: la primera carga entrega solo el inicio.
- Imágenes responsivas en WebP con respaldo JPEG y carga progresiva sobre un marcador borroso, sin salto de maquetación.
- El carrusel se detiene al pasar el ratón, al enfocar con teclado y cuando la pestaña queda oculta; se navega con ← → y admite gestos táctiles.
- Datos estructurados `ProfessionalService` en `index.html` para buscadores.

---

## Protección de datos

El sitio publica únicamente información societaria de carácter público —la consultable en el Registro Mercantil—. No expone documentos de identidad, direcciones de residencia ni datos personales de accionistas o administradores, conforme a la Ley 1581 de 2012 y el Decreto 1074 de 2015.

---

## Licencia

© 2026 ASESORES CONSULTORES E INTERVENTORES TERRITORIALES S.A.S. Todos los derechos reservados.

El código, el logotipo, la denominación CONSULTERR y los textos institucionales son propiedad de la sociedad. Su uso por parte de proveedores y aliados se autoriza únicamente para piezas encargadas por la firma.

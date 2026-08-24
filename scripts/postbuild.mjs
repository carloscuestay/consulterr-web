/**
 * Post-build:
 *  1. Copia index.html a 404.html — así GitHub Pages y otros hostings estáticos
 *     resuelven las rutas profundas de React Router (/servicios/…).
 *  2. Informa el tamaño del bundle generado.
 */
import { copyFileSync, readdirSync, statSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const dist = 'dist'
if (!existsSync(join(dist, 'index.html'))) {
  console.error('✗ No se encontró dist/index.html. ¿Corrió `npm run build`?')
  process.exit(1)
}
copyFileSync(join(dist, 'index.html'), join(dist, '404.html'))
console.log('✓ dist/404.html creado (fallback SPA)')

const walk = (d) =>
  readdirSync(d).flatMap((f) => {
    const p = join(d, f)
    return statSync(p).isDirectory() ? walk(p) : [[p, statSync(p).size]]
  })

const total = walk(dist).reduce((a, [, s]) => a + s, 0)
console.log(`✓ Build total: ${(total / 1024).toFixed(0)} kB`)

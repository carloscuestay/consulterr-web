import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// `base` se controla con la variable de entorno VITE_BASE.
//  - Dominio propio o Vercel/Netlify   →  '/'            (por defecto)
//  - GitHub Pages en un subdirectorio  →  '/consulterr-web/'
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    // Las rutas ya se dividen con React.lazy(); el resto lo agrupa el bundler.
    chunkSizeWarningLimit: 700,
  },
})

import { useEffect } from 'react'
import { empresa } from '../data/empresa'

/** Gestiona <title>, meta description, canonical y Open Graph sin dependencias. */
export function useSeo({ title, description, path = '', image = '/marca/consulterr-vertical-color.svg' }) {
  useEffect(() => {
    const full = title ? `${title} — ${empresa.sigla}` : `${empresa.sigla} — ${empresa.claim}`
    document.title = full

    const set = (selector, attrs) => {
      let el = document.head.querySelector(selector)
      if (!el) {
        el = document.createElement(attrs.tag || 'meta')
        Object.entries(attrs).forEach(([k, v]) => k !== 'tag' && el.setAttribute(k, v))
        document.head.appendChild(el)
      }
      Object.entries(attrs).forEach(([k, v]) => k !== 'tag' && el.setAttribute(k, v))
      return el
    }

    const url = `${empresa.sitio.dominio}${path}`
    set('meta[name="description"]', { name: 'description', content: description })
    set('link[rel="canonical"]', { tag: 'link', rel: 'canonical', href: url })
    set('meta[property="og:title"]', { property: 'og:title', content: full })
    set('meta[property="og:description"]', { property: 'og:description', content: description })
    set('meta[property="og:url"]', { property: 'og:url', content: url })
    set('meta[property="og:type"]', { property: 'og:type', content: 'website' })
    set('meta[property="og:site_name"]', { property: 'og:site_name', content: empresa.sigla })
    set('meta[property="og:image"]', { property: 'og:image', content: empresa.sitio.dominio + image })
    set('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    set('meta[name="twitter:title"]', { name: 'twitter:title', content: full })
    set('meta[name="twitter:description"]', { name: 'twitter:description', content: description })
  }, [title, description, path, image])
}

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SITE_URL } from '../data/site'

type Meta = {
  title: string
  description: string
  noindex?: boolean
}

function setMeta(attr: 'name' | 'property', key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = value
}

/** Per-route title, description, canonical URL and social tags. */
export function usePageMeta({ title, description, noindex }: Meta) {
  const { pathname } = useLocation()

  useEffect(() => {
    const fullTitle = pathname === '/' ? title : `${title} | Taona Ori International`
    const url = `${SITE_URL}${pathname === '/' ? '/' : pathname}`
    document.title = fullTitle
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('name', 'robots', noindex ? 'noindex' : 'index, follow')

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url
  }, [title, description, noindex, pathname])
}

import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { CONTACT, NAV_LINKS } from '../data/site'

export function Wordmark() {
  return (
    <span className="flex flex-col leading-none">
      <span className="font-display text-lg font-bold tracking-[0.16em] uppercase">Taona Ori</span>
      <span className="font-display mt-1 text-[0.66rem] font-semibold tracking-[0.42em] text-orange-500 uppercase">
        International
      </span>
    </span>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()
  const location = useLocation()
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const onPointer = (e: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('pointerdown', onPointer)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('pointerdown', onPointer)
    }
  }, [open])

  const solid = scrolled || open

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? 'bg-navy-900/95 shadow-lg shadow-navy-950/25 backdrop-blur-md' : 'bg-gradient-to-b from-navy-950/60 to-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link to="/" className="text-white" aria-label="Taona Ori International, home">
          <Wordmark />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `relative font-display text-sm font-medium tracking-wide transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:bg-orange-500 after:transition-all ${
                  isActive ? 'text-white after:w-full' : 'text-white/75 after:w-0 hover:text-white hover:after:w-full'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href={CONTACT.phoneHref}
            className="press flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 font-display text-sm font-semibold whitespace-nowrap text-white hover:border-orange-500 hover:text-orange-500"
          >
            <Phone size={15} aria-hidden /> <span className="hidden xl:inline">{CONTACT.phone}</span>
            <span className="xl:hidden">Call us</span>
          </a>
        </nav>

        <button
          className="press -mr-2 grid size-11 place-items-center text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden bg-navy-900 lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-8">
              {NAV_LINKS.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `border-b border-white/10 py-4 font-display text-lg ${isActive ? 'text-orange-500' : 'text-white'}`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <a href={CONTACT.phoneHref} className="flex items-center gap-2 pt-5 font-display text-orange-500">
                <Phone size={16} aria-hidden /> {CONTACT.phone}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

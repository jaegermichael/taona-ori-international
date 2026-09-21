import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { CONTACT, NAV_LINKS } from '../data/site'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? 'bg-navy-900/95 backdrop-blur-md shadow-lg shadow-navy-900/20' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link to="/" className="font-display text-lg font-bold tracking-[0.18em] text-white uppercase">
          Taona Ori <span className="text-orange-500">International</span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `font-display text-sm font-medium tracking-wide transition-colors ${
                  isActive ? 'text-orange-500' : 'text-white/80 hover:text-white'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href={CONTACT.phoneHref}
            className="flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 font-display text-sm font-semibold text-white transition-colors hover:border-orange-500 hover:text-orange-500"
          >
            <Phone size={15} /> {CONTACT.phone}
          </a>
        </nav>

        <button
          className="text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden bg-navy-900 md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-8">
              {NAV_LINKS.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `border-b border-white/10 py-4 font-display text-lg ${
                      isActive ? 'text-orange-500' : 'text-white'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <a href={CONTACT.phoneHref} className="pt-5 font-display text-orange-500">
                {CONTACT.phone}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

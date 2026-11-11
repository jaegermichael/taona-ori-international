import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react'
import { CONTACT, NAV_LINKS, SERVICES, whatsappLink } from '../data/site'
import { Wordmark } from './Nav'

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="mx-auto max-w-7xl px-6 pt-20 lg:px-10">
        <p className="font-display max-w-4xl text-4xl leading-[1.05] font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Planning a wall, a floor or a whole build?{' '}
          <span className="font-serif font-normal text-orange-500 italic">Let's talk stone.</span>
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/contact"
            className="press inline-flex w-fit items-center rounded-full bg-orange-500 px-8 py-4 font-display font-semibold text-navy-950 hover:bg-white"
          >
            Request a quote
          </Link>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="press inline-flex w-fit items-center gap-2 rounded-full border border-white/25 px-8 py-4 font-display font-semibold hover:border-orange-500 hover:text-orange-500"
          >
            <MessageCircle size={18} aria-hidden /> WhatsApp
          </a>
        </div>
      </div>

      <div className="mx-auto mt-20 grid max-w-7xl gap-12 border-t border-white/10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <Wordmark />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/60">
            Zimbabwean-owned construction and design company specialising in stone work, cladding,
            and bespoke building solutions. Est. 2019.
          </p>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold tracking-[0.2em] text-white/50 uppercase">Explore</h2>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-white/75 transition-colors hover:text-orange-500">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold tracking-[0.2em] text-white/50 uppercase">Services</h2>
          <ul className="mt-5 space-y-3">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="text-sm text-white/75 transition-colors hover:text-orange-500">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold tracking-[0.2em] text-white/50 uppercase">Contact</h2>
          <ul className="mt-5 space-y-4 text-sm text-white/75">
            <li className="flex items-start gap-3">
              <Phone size={16} className="mt-0.5 shrink-0 text-orange-500" aria-hidden />
              <a href={CONTACT.phoneHref} className="hover:text-orange-500">{CONTACT.phone}</a>
            </li>
            <li className="flex items-start gap-3">
              <MessageCircle size={16} className="mt-0.5 shrink-0 text-orange-500" aria-hidden />
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
                WhatsApp
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={16} className="mt-0.5 shrink-0 text-orange-500" aria-hidden />
              <a href={`mailto:${CONTACT.email}`} className="break-all hover:text-orange-500">{CONTACT.email}</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-orange-500" aria-hidden />
              <span>{CONTACT.locations.join(' · ')}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 pb-24 text-xs text-white/45 sm:flex-row sm:justify-between sm:pb-6 lg:px-10">
          <p>© {new Date().getFullYear()} Taona Ori International. All rights reserved.</p>
          <p>Fully registered and compliant with Zimbabwean laws and industry regulations.</p>
        </div>
      </div>
    </footer>
  )
}

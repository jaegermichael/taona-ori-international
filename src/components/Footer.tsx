import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'
import { CONTACT, NAV_LINKS, SERVICES } from '../data/site'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <p className="font-display text-xl font-bold tracking-[0.15em] uppercase">
            Taona Ori <span className="text-orange-500">International</span>
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Zimbabwean-owned construction and design company specializing in premium stone work,
            cladding, and bespoke building solutions. Est. 2019.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold tracking-[0.2em] text-white/50 uppercase">
            Explore
          </h3>
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
          <h3 className="font-display text-sm font-semibold tracking-[0.2em] text-white/50 uppercase">
            Services
          </h3>
          <ul className="mt-5 space-y-3">
            {SERVICES.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link to="/services" className="text-sm text-white/75 transition-colors hover:text-orange-500">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold tracking-[0.2em] text-white/50 uppercase">
            Contact
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-white/75">
            <li className="flex items-start gap-3">
              <Phone size={16} className="mt-0.5 shrink-0 text-orange-500" />
              <a href={CONTACT.phoneHref} className="hover:text-orange-500">{CONTACT.phone}</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={16} className="mt-0.5 shrink-0 text-orange-500" />
              <a href={`mailto:${CONTACT.email}`} className="break-all hover:text-orange-500">{CONTACT.email}</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-orange-500" />
              <span>{CONTACT.locations.join(' · ')}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-white/40 sm:flex-row sm:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} Taona Ori International. All rights reserved.</p>
          <p>Fully registered and compliant with Zimbabwean laws and industry regulations.</p>
        </div>
      </div>
    </footer>
  )
}

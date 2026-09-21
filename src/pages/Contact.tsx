import { useState, type FormEvent } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'
import Reveal from '../components/Reveal'
import PageHeader from '../components/PageHeader'
import { CONTACT, SERVICES } from '../data/site'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  const inputCls =
    'w-full border-b-2 border-charcoal-900/15 bg-transparent py-3 font-body text-charcoal-900 outline-none transition-colors focus:border-orange-500'

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let us bring your vision to life through stone."
        intro="Request a quote or start a conversation about your project. We serve Harare, Victoria Falls, Kwekwe — and other locations on request."
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-20 lg:grid-cols-12">
          {/* Details */}
          <div className="lg:col-span-4">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-charcoal-900">
                Contact information
              </h2>
              <ul className="mt-8 space-y-6">
                <li className="flex items-start gap-4">
                  <Phone size={20} className="mt-1 shrink-0 text-orange-500" />
                  <div>
                    <p className="font-display text-sm tracking-wider text-charcoal-900/50 uppercase">Phone</p>
                    <a href={CONTACT.phoneHref} className="mt-1 block font-display text-lg font-semibold hover:text-orange-500">
                      {CONTACT.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Mail size={20} className="mt-1 shrink-0 text-orange-500" />
                  <div>
                    <p className="font-display text-sm tracking-wider text-charcoal-900/50 uppercase">Email</p>
                    <a href={`mailto:${CONTACT.email}`} className="mt-1 block font-display text-lg font-semibold break-all hover:text-orange-500">
                      {CONTACT.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin size={20} className="mt-1 shrink-0 text-orange-500" />
                  <div>
                    <p className="font-display text-sm tracking-wider text-charcoal-900/50 uppercase">Areas we serve</p>
                    <ul className="mt-2 space-y-1 font-display font-semibold">
                      {CONTACT.locations.map((l) => (
                        <li key={l}>{l}</li>
                      ))}
                      <li className="text-charcoal-900/50">Other locations on request</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal delay={0.1}>
              {sent ? (
                <div className="border-l-2 border-orange-500 pl-8">
                  <h2 className="font-display text-3xl font-bold tracking-tight text-charcoal-900">
                    Thank you.
                  </h2>
                  <p className="mt-4 leading-relaxed text-charcoal-900/70">
                    Your enquiry has been noted. Please also reach us directly at{' '}
                    <a href={CONTACT.phoneHref} className="font-semibold text-navy-800">
                      {CONTACT.phone}
                    </a>{' '}
                    or{' '}
                    <a href={`mailto:${CONTACT.email}`} className="font-semibold text-navy-800">
                      {CONTACT.email}
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="font-display text-sm font-semibold tracking-wider text-charcoal-900/60 uppercase">
                      Name
                    </label>
                    <input id="name" name="name" required className={inputCls} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="font-display text-sm font-semibold tracking-wider text-charcoal-900/60 uppercase">
                      Phone
                    </label>
                    <input id="phone" name="phone" type="tel" className={inputCls} />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="font-display text-sm font-semibold tracking-wider text-charcoal-900/60 uppercase">
                      Email
                    </label>
                    <input id="email" name="email" type="email" required className={inputCls} />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="service" className="font-display text-sm font-semibold tracking-wider text-charcoal-900/60 uppercase">
                      Service required
                    </label>
                    <select id="service" name="service" className={inputCls} defaultValue="">
                      <option value="" disabled>
                        Select a service…
                      </option>
                      {SERVICES.map((s) => (
                        <option key={s.slug} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="location" className="font-display text-sm font-semibold tracking-wider text-charcoal-900/60 uppercase">
                      Project location
                    </label>
                    <input id="location" name="location" className={inputCls} />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="font-display text-sm font-semibold tracking-wider text-charcoal-900/60 uppercase">
                      Tell us about your project
                    </label>
                    <textarea id="message" name="message" rows={4} className={inputCls} />
                  </div>
                  <button
                    type="submit"
                    className="w-fit rounded-full bg-orange-500 px-10 py-4 font-display font-semibold text-white transition-colors hover:bg-orange-600 sm:col-span-2"
                  >
                    Send enquiry
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}

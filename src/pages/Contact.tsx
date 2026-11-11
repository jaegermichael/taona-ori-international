import { useRef, useState, type FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { MapPin, Phone, Mail, MessageCircle, Send } from 'lucide-react'
import Reveal from '../components/Reveal'
import PageHeader, { Accent } from '../components/PageHeader'
import { CONTACT, SERVICES, whatsappLink } from '../data/site'
import { usePageMeta } from '../lib/usePageMeta'

type Field = 'name' | 'phone' | 'email' | 'service' | 'location' | 'message'
type Errors = Partial<Record<Field | 'contact', string>>
type Channel = 'whatsapp' | 'email'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(v: Record<Field, string>): Errors {
  const errors: Errors = {}
  if (!v.name) errors.name = 'Please enter your name.'
  if (!v.phone && !v.email) errors.contact = 'Add a phone number or an email address so we can reply.'
  if (v.email && !EMAIL_RE.test(v.email)) errors.email = 'This email address doesn’t look right.'
  if (v.phone && v.phone.replace(/\D/g, '').length < 7) errors.phone = 'This phone number looks too short.'
  if (!v.message) errors.message = 'Tell us a little about the project.'
  return errors
}

function composeMessage(v: Record<Field, string>) {
  const details = [
    `Name: ${v.name}`,
    v.phone && `Phone: ${v.phone}`,
    v.email && `Email: ${v.email}`,
    v.service && `Service: ${v.service}`,
    v.location && `Project location: ${v.location}`,
  ].filter(Boolean)
  return ['Project enquiry from the Taona Ori International website', '', ...details, '', v.message].join('\n')
}

export default function Contact() {
  usePageMeta({
    title: 'Contact & Quotes',
    description: `Request a quote for stone cladding, flooring or construction. Call ${CONTACT.phone}, WhatsApp us or email ${CONTACT.email}.`,
  })

  const [params] = useSearchParams()
  const preselected = SERVICES.find((s) => s.slug === params.get('service'))?.title ?? ''
  const [errors, setErrors] = useState<Errors>({})
  const [handedOff, setHandedOff] = useState<Channel | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const submitter = (e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null
    const channel: Channel = submitter?.value === 'email' ? 'email' : 'whatsapp'
    const data = new FormData(e.currentTarget)
    const v = Object.fromEntries(
      (['name', 'phone', 'email', 'service', 'location', 'message'] as Field[]).map((k) => [k, String(data.get(k) ?? '').trim()]),
    ) as Record<Field, string>

    const found = validate(v)
    setErrors(found)
    if (Object.keys(found).length) {
      setHandedOff(null)
      const order: [keyof Errors, Field][] = [
        ['name', 'name'],
        ['phone', 'phone'],
        ['contact', 'phone'],
        ['email', 'email'],
        ['message', 'message'],
      ]
      const firstId = order.find(([key]) => found[key])?.[1]
      if (firstId) formRef.current?.querySelector<HTMLElement>(`#${firstId}`)?.focus()
      return
    }

    const text = composeMessage(v)
    if (channel === 'whatsapp') {
      window.open(whatsappLink(text), '_blank', 'noopener,noreferrer')
    } else {
      const subject = `Project enquiry${v.service ? `: ${v.service}` : ''}`
      window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`
    }
    setHandedOff(channel)
  }

  const labelCls = 'font-display text-sm font-semibold tracking-wider text-charcoal-900/70 uppercase'
  const inputCls = (invalid?: boolean) =>
    `w-full border-b-2 bg-transparent py-3 font-body text-charcoal-900 outline-none transition-colors focus:border-orange-500 ${
      invalid ? 'border-red-700' : 'border-charcoal-900/20'
    }`
  const errorText = (id: string, msg?: string) =>
    msg ? (
      <p id={id} className="mt-2 text-sm font-medium text-red-700">
        {msg}
      </p>
    ) : null

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let's bring your vision <Accent>to life in stone.</Accent>
          </>
        }
        intro="Request a quote or start a conversation about your project. We work in Harare, Victoria Falls and Kwekwe, and other locations on request."
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-20 lg:grid-cols-12">
          {/* Details */}
          <div className="lg:col-span-4">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-charcoal-900">Talk to us directly</h2>
              <ul className="mt-8 space-y-6">
                <li className="flex items-start gap-4">
                  <Phone size={20} className="mt-1 shrink-0 text-orange-700" aria-hidden />
                  <div>
                    <p className="font-display text-sm tracking-wider text-charcoal-900/60 uppercase">Phone</p>
                    <a href={CONTACT.phoneHref} className="mt-1 block font-display text-lg font-semibold hover:text-navy-800">
                      {CONTACT.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MessageCircle size={20} className="mt-1 shrink-0 text-orange-700" aria-hidden />
                  <div>
                    <p className="font-display text-sm tracking-wider text-charcoal-900/60 uppercase">WhatsApp</p>
                    <a
                      href={whatsappLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block font-display text-lg font-semibold hover:text-navy-800"
                    >
                      Chat with us
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Mail size={20} className="mt-1 shrink-0 text-orange-700" aria-hidden />
                  <div>
                    <p className="font-display text-sm tracking-wider text-charcoal-900/60 uppercase">Email</p>
                    <a href={`mailto:${CONTACT.email}`} className="mt-1 block font-display text-lg font-semibold break-all hover:text-navy-800">
                      {CONTACT.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin size={20} className="mt-1 shrink-0 text-orange-700" aria-hidden />
                  <div>
                    <p className="font-display text-sm tracking-wider text-charcoal-900/60 uppercase">Areas we serve</p>
                    <ul className="mt-2 space-y-1 font-display font-semibold">
                      {CONTACT.locations.map((l) => (
                        <li key={l}>{l}</li>
                      ))}
                      <li className="text-charcoal-900/60">Other locations on request</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal delay={0.1}>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-charcoal-900">Request a quote</h2>
              <p className="mt-3 mb-10 max-w-xl leading-relaxed text-charcoal-900/70">
                Fill this in and choose how to send it. Your details open in WhatsApp or your email app, ready to send.
                Nothing reaches us until you press send there.
              </p>

              <form ref={formRef} onSubmit={handleSubmit} noValidate className="grid gap-8 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelCls}>
                    Name <span aria-hidden className="text-orange-700">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={inputCls(!!errors.name)}
                  />
                  {errorText('name-error', errors.name)}
                </div>
                <div>
                  <label htmlFor="phone" className={labelCls}>
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    aria-invalid={!!(errors.phone || errors.contact)}
                    aria-describedby={errors.phone ? 'phone-error' : errors.contact ? 'contact-error' : undefined}
                    className={inputCls(!!(errors.phone || errors.contact))}
                  />
                  {errorText('phone-error', errors.phone)}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className={labelCls}>
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    aria-invalid={!!(errors.email || errors.contact)}
                    aria-describedby={errors.email ? 'email-error' : errors.contact ? 'contact-error' : undefined}
                    className={inputCls(!!(errors.email || errors.contact))}
                  />
                  {errorText('email-error', errors.email)}
                  {errorText('contact-error', errors.contact)}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="service" className={labelCls}>
                    Service required
                  </label>
                  <select id="service" name="service" className={inputCls()} defaultValue={preselected}>
                    <option value="">Select a service…</option>
                    {SERVICES.map((s) => (
                      <option key={s.slug} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="location" className={labelCls}>
                    Project location
                  </label>
                  <input id="location" name="location" autoComplete="address-level2" className={inputCls()} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className={labelCls}>
                    Tell us about your project <span aria-hidden className="text-orange-700">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={inputCls(!!errors.message)}
                  />
                  {errorText('message-error', errors.message)}
                </div>

                <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row">
                  <button
                    type="submit"
                    name="channel"
                    value="whatsapp"
                    className="press inline-flex w-fit items-center gap-3 rounded-full bg-orange-500 px-8 py-4 font-display font-semibold text-navy-950 hover:bg-navy-900 hover:text-white"
                  >
                    <MessageCircle size={18} aria-hidden /> Send via WhatsApp
                  </button>
                  <button
                    type="submit"
                    name="channel"
                    value="email"
                    className="press inline-flex w-fit items-center gap-3 rounded-full border border-charcoal-900/25 px-8 py-4 font-display font-semibold text-charcoal-900 hover:border-navy-800 hover:text-navy-800"
                  >
                    <Send size={18} aria-hidden /> Send by email
                  </button>
                </div>

                <div aria-live="polite" className="sm:col-span-2">
                  {handedOff && (
                    <p className="border-l-2 border-orange-500 pl-5 leading-relaxed text-charcoal-900/80">
                      {handedOff === 'whatsapp'
                        ? 'WhatsApp should now be open with your message filled in. Press send there to reach us. '
                        : 'Your email app should now be open with your message filled in. Press send there to reach us. '}
                      If nothing opened, call us on{' '}
                      <a href={CONTACT.phoneHref} className="font-semibold text-navy-800 underline">
                        {CONTACT.phone}
                      </a>
                      .
                    </p>
                  )}
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}

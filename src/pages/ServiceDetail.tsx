import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, MessageCircle } from 'lucide-react'
import Reveal from '../components/Reveal'
import Photo from '../components/Photo'
import PageHeader from '../components/PageHeader'
import NotFound from './NotFound'
import { CONTACT, PHOTOS, PROCESS_STEPS, SERVICES, whatsappLink } from '../data/site'
import { usePageMeta } from '../lib/usePageMeta'

export default function ServiceDetail() {
  const { slug } = useParams()
  const index = SERVICES.findIndex((s) => s.slug === slug)
  const service = SERVICES[index]

  usePageMeta({
    title: service ? `${service.title} in Zimbabwe` : 'Service not found',
    description: service
      ? `${service.text} Serving ${CONTACT.locations.join(', ')}.`
      : 'The service you were looking for could not be found.',
    noindex: !service,
  })

  if (!service) return <NotFound what="service" backTo="/services" backLabel="All services" />

  const others = [1, 2, 3].map((n) => SERVICES[(index + n) % SERVICES.length])

  return (
    <>
      <PageHeader eyebrow={`Service ${String(index + 1).padStart(2, '0')} / ${SERVICES.length}`} title={service.title} intro={service.text}>
        <Link
          to="/services"
          className="mt-10 inline-flex items-center gap-2 font-display text-sm text-white/70 transition-colors hover:text-orange-500"
        >
          <ArrowLeft size={16} aria-hidden /> All services
        </Link>
      </PageHeader>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className={service.image ? 'lg:col-span-6' : 'lg:col-span-7'}>
            <Reveal>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-charcoal-900">What this covers</h2>
              <ul className="mt-8 border-t border-charcoal-900/10">
                {service.tags.map((t) => (
                  <li key={t} className="flex items-center gap-4 border-b border-charcoal-900/10 py-4 font-display text-lg">
                    <Check size={18} className="shrink-0 text-orange-700" aria-hidden /> {t}
                  </li>
                ))}
              </ul>
              <p className="mt-8 max-w-xl leading-relaxed text-charcoal-900/70">
                Available in {CONTACT.locations.join(', ')}, and other locations on request. Tell us about your site and
                we'll arrange a consultation and assessment before quoting.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  to={`/contact?service=${service.slug}`}
                  className="press group inline-flex w-fit items-center gap-3 rounded-full bg-orange-500 px-8 py-4 font-display font-semibold text-navy-950 hover:bg-navy-900 hover:text-white"
                >
                  Request a quote
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden />
                </Link>
                <a
                  href={whatsappLink(`Hello Taona Ori International, I'd like a quote for ${service.title.toLowerCase()}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="press inline-flex w-fit items-center gap-2 rounded-full border border-charcoal-900/20 px-8 py-4 font-display font-semibold text-charcoal-900 hover:border-navy-800 hover:text-navy-800"
                >
                  <MessageCircle size={18} aria-hidden /> Ask on WhatsApp
                </a>
              </div>
            </Reveal>
          </div>

          {service.image && (
            <div className="lg:col-span-5 lg:col-start-8">
              <Reveal delay={0.1}>
                <figure>
                  <div className="overflow-hidden bg-navy-900">
                    <Photo photo={service.image} sizes="(min-width: 1024px) 40vw, 100vw" className="aspect-[4/5] w-full object-cover" />
                  </div>
                  <figcaption className="mt-3 font-serif text-lg text-charcoal-900/70 italic">{PHOTOS[service.image].caption}</figcaption>
                </figure>
              </Reveal>
            </div>
          )}
        </div>
      </section>

      <section className="bg-navy-900 py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="font-display text-2xl font-semibold tracking-tight">How the job runs</h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS_STEPS.map((step) => (
              <li key={step.n} className="border-t border-white/15 pt-5">
                <span className="font-serif text-3xl text-orange-500 italic">{step.n}</span>
                <p className="font-display mt-2 font-semibold">{step.title}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <h2 className="font-display text-3xl font-bold tracking-tight text-charcoal-900">Related services</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {others.map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}`} className="group block border-t-2 border-charcoal-900/10 pt-5 hover:border-orange-500">
              <h3 className="font-display flex items-start justify-between gap-3 text-xl font-semibold tracking-tight text-charcoal-900 group-hover:text-navy-800">
                {s.title}
                <ArrowUpRight size={20} className="mt-1 shrink-0 text-charcoal-900/30 transition-colors group-hover:text-orange-700" aria-hidden />
              </h3>
              <p className="mt-2 text-sm text-charcoal-900/60">{s.tags.join(' · ')}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}

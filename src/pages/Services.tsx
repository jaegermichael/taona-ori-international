import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import PageHeader from '../components/PageHeader'
import { PROCESS_STEPS, SERVICES, SITE_IMAGES } from '../data/site'

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Stone & surface solutions, from design to handover."
        intro="We supply high-quality stone materials and manage full installation — a seamless, end-to-end solution without the need for multiple contractors."
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-x-10 gap-y-20 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 0.08}>
              <article className={i % 2 === 1 ? 'md:mt-16' : ''}>
                <span className="font-display text-sm font-semibold text-orange-500">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="font-display mt-3 text-2xl font-semibold tracking-tight text-charcoal-900 lg:text-3xl">
                  {s.title}
                </h2>
                <p className="mt-4 leading-relaxed text-charcoal-900/70">{s.text}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-charcoal-900/5 px-4 py-1.5 text-xs font-medium text-charcoal-900/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-navy-900 py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="font-display text-sm font-semibold tracking-[0.3em] text-orange-500 uppercase">
              Our work process
            </p>
            <h2 className="font-display mt-6 max-w-2xl text-4xl font-bold tracking-tight lg:text-5xl">
              A structured process, at every stage
            </h2>
          </Reveal>

          <ol className="mt-16 border-t border-white/15">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.04}>
                <li className="grid grid-cols-[4rem_1fr] items-baseline gap-4 border-b border-white/15 py-8 sm:grid-cols-[6rem_1fr_2fr] sm:gap-10">
                  <span className="font-display text-3xl font-bold text-orange-500">{step.n}</span>
                  <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="col-span-2 mt-2 text-sm leading-relaxed text-white/60 sm:col-span-1 sm:mt-0">
                    {step.text}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Supply band */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden">
              <img
                src={SITE_IMAGES.sandstoneWall}
                alt="Finished stone cladding"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-charcoal-900 lg:text-4xl">
              Supply &amp; installation, end to end
            </h2>
            <p className="mt-6 leading-relaxed text-charcoal-900/70">
              We supply high-quality stone materials and manage full installation, offering clients
              a seamless solution without the need for multiple contractors — ensuring efficiency,
              quality control, and client satisfaction at every stage.
            </p>
            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-orange-500 px-8 py-4 font-display font-semibold text-white transition-colors hover:bg-orange-600"
            >
              Request a quote
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}

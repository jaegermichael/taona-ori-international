import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import Photo from '../components/Photo'
import PageHeader, { Accent } from '../components/PageHeader'
import { PROCESS_STEPS, SERVICES } from '../data/site'
import { usePageMeta } from '../lib/usePageMeta'

export default function Services() {
  usePageMeta({
    title: 'Stone & Construction Services',
    description:
      'Stone cladding and masonry, custom stone cutting, flooring and paving, epoxy flooring, interior and exterior stone design, building, renovations and project management in Zimbabwe.',
  })

  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={
          <>
            Stone &amp; surface work, <Accent>design to handover.</Accent>
          </>
        }
        intro="We supply high-quality stone and manage the full installation, so you deal with one contractor from start to finish."
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 0.08}>
              <article className={`group relative ${i % 2 === 1 ? 'md:mt-16' : ''}`}>
                {s.image && (
                  <div className="mb-7 overflow-hidden bg-navy-900">
                    <Photo
                      photo={s.image}
                      sizes="(min-width: 768px) 45vw, 100vw"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                )}
                <span className="font-serif text-2xl text-orange-700 italic">{String(i + 1).padStart(2, '0')}</span>
                <h2 className="font-display mt-2 text-2xl font-semibold tracking-tight text-charcoal-900 lg:text-3xl">
                  <Link to={`/services/${s.slug}`} className="after:absolute after:inset-0 group-hover:text-navy-800">
                    {s.title}
                  </Link>
                </h2>
                <p className="mt-4 leading-relaxed text-charcoal-900/70">{s.text}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="rounded-sm bg-charcoal-900/5 px-3 py-1.5 text-xs font-medium text-charcoal-900/75">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold text-navy-800">
                  Read more
                  <ArrowUpRight size={16} className="text-orange-700 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-navy-900 py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="font-display text-sm font-semibold tracking-[0.25em] text-orange-500 uppercase">Our work process</p>
            <h2 className="font-display mt-6 max-w-2xl text-4xl font-bold tracking-tight lg:text-5xl">
              A structured process <Accent>at every stage.</Accent>
            </h2>
          </Reveal>

          <ol className="mt-16 border-t border-white/15">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal as="li" key={step.n} delay={i * 0.04} className="grid grid-cols-[4rem_1fr] items-baseline gap-4 border-b border-white/15 py-8 sm:grid-cols-[6rem_1fr_2fr] sm:gap-10">
                  <span className="font-serif text-4xl text-orange-500 italic">{step.n}</span>
                  <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">{step.title}</h3>
                  <p className="col-span-2 mt-2 text-sm leading-relaxed text-white/65 sm:col-span-1 sm:mt-0">{step.text}</p>
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
              <Photo photo="sandstoneWall" sizes="(min-width: 1024px) 45vw, 100vw" className="aspect-[4/3] w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-charcoal-900 lg:text-4xl">
              Supply &amp; installation, end to end
            </h2>
            <p className="mt-6 leading-relaxed text-charcoal-900/70">
              We supply the stone and manage the full installation, so there's no need for several contractors. That keeps
              the job efficient and quality under one team's control at every stage.
            </p>
            <Link
              to="/contact"
              className="press group mt-8 inline-flex items-center gap-3 rounded-full bg-orange-500 px-8 py-4 font-display font-semibold text-navy-950 hover:bg-navy-900 hover:text-white"
            >
              Request a quote
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}

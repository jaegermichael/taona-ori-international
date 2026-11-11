import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import Reveal from '../components/Reveal'
import Photo from '../components/Photo'
import FinishExplorer from '../components/FinishExplorer'
import { Accent } from '../components/PageHeader'
import { CONTACT, PROJECTS, PROCESS_STEPS, SERVICES, VALUES } from '../data/site'
import { usePageMeta } from '../lib/usePageMeta'

function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '18%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1.04, reduce ? 1.04 : 1.12])

  return (
    <section ref={ref} className="relative flex min-h-[100svh] items-end overflow-hidden bg-navy-950">
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <Photo photo="wallNight1" priority className="h-full w-full object-cover object-[50%_40%]" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/55 to-navy-950/25" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-40 pb-10 lg:px-10">
        <Reveal y={40}>
          <p className="font-display text-xs font-semibold tracking-[0.25em] text-orange-500 uppercase sm:text-sm sm:tracking-[0.3em]">
            Zimbabwean stone craftsmanship
          </p>
          <h1 className="font-display mt-6 max-w-5xl text-[clamp(2.75rem,10vw,7.5rem)] leading-[0.95] font-bold tracking-[-0.03em] text-white">
            Stone, crafted into <Accent>architecture.</Accent>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/75">
            Cladding, flooring, custom-cut features and complete builds. We supply the stone and install it with our own teams.
          </p>
          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
            <Link
              to="/contact"
              className="press group inline-flex w-fit items-center gap-3 rounded-full bg-orange-500 px-8 py-4 font-display font-semibold text-navy-950 hover:bg-white"
            >
              Request a quote
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
            <Link
              to="/projects"
              className="font-display text-white/80 underline decoration-white/30 underline-offset-8 transition-colors hover:text-white hover:decoration-orange-500"
            >
              See our work
            </Link>
          </div>
        </Reveal>

        <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/15 pt-6 text-white sm:grid-cols-3">
          <div>
            <dt className="font-display text-xs tracking-[0.2em] text-white/50 uppercase">Established</dt>
            <dd className="font-display mt-1 text-lg font-semibold">2019</dd>
          </div>
          <div>
            <dt className="font-display text-xs tracking-[0.2em] text-white/50 uppercase">Working in</dt>
            <dd className="font-display mt-1 text-lg font-semibold">{CONTACT.locations.join(' · ')}</dd>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <dt className="font-display text-xs tracking-[0.2em] text-white/50 uppercase">One contractor</dt>
            <dd className="font-display mt-1 text-lg font-semibold">Supply, cutting &amp; installation</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

export default function Home() {
  usePageMeta({
    title: 'Taona Ori International | Stone Cladding & Construction in Zimbabwe',
    description:
      'Stone cladding, flooring and paving, custom stone cutting and construction in Harare, Victoria Falls and Kwekwe. Supply and installation by our own teams.',
  })

  const byLocation = CONTACT.locations.map((loc) => ({
    location: loc,
    projects: PROJECTS.filter((p) => p.location === loc),
  }))

  return (
    <>
      <Hero />

      {/* ── Intro ────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <h2 className="font-display text-3xl leading-snug font-semibold tracking-tight text-charcoal-900 sm:text-4xl lg:text-[2.9rem] lg:leading-[1.2]">
                A Zimbabwean-owned construction and design company specialising in{' '}
                <span className="font-serif font-normal text-navy-800 italic">premium stone work</span>, cladding and
                bespoke building for homes and businesses.
              </h2>
            </Reveal>
          </div>
          <div className="flex flex-col justify-end lg:col-span-3 lg:col-start-10">
            <Reveal delay={0.1}>
              <p className="leading-relaxed text-charcoal-900/70">
                We care about craftsmanship, durability and design that lasts, with finishes that lift a building.
              </p>
              <Link to="/about" className="group mt-6 inline-flex items-center gap-2 font-display font-semibold text-navy-800">
                About the company
                <ArrowUpRight
                  size={18}
                  className="text-orange-700 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <FinishExplorer />

      {/* ── Services ─────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="font-display max-w-2xl text-4xl font-bold tracking-tight text-charcoal-900 lg:text-5xl">
              Everything from the first cut <Accent>to handover.</Accent>
            </h2>
            <Link to="/services" className="group inline-flex w-fit items-center gap-2 font-display font-semibold text-navy-800">
              How we work
              <ArrowUpRight size={18} className="text-orange-700 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
            </Link>
          </div>
        </Reveal>

        <ul className="mt-14 border-t border-charcoal-900/10">
          {SERVICES.map((s, i) => (
            <li key={s.slug}>
              <Link
                to={`/services/${s.slug}`}
                className="group relative grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-4 overflow-hidden border-b border-charcoal-900/10 py-6 sm:grid-cols-[4rem_1fr_1.4fr_auto] sm:items-center sm:gap-8"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 -z-10 origin-left scale-x-0 bg-stone-200 transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
                />
                <span className="font-display text-sm text-orange-700 tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-display text-xl font-semibold tracking-tight text-charcoal-900 sm:text-2xl">{s.title}</span>
                <span className="hidden max-w-md text-sm leading-relaxed text-charcoal-900/60 sm:block">{s.tags.join(' · ')}</span>
                <ArrowRight
                  size={20}
                  className="text-charcoal-900/30 transition-all group-hover:translate-x-1 group-hover:text-orange-700"
                  aria-hidden
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Process ──────────────────────────────────────── */}
      <section className="bg-navy-900 py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="font-display text-sm font-semibold tracking-[0.25em] text-orange-500 uppercase">How we work</p>
            <h2 className="font-display mt-6 max-w-2xl text-4xl font-bold tracking-tight lg:text-5xl">
              Five steps, <Accent>no surprises.</Accent>
            </h2>
          </Reveal>

          <ol className="mt-16 grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-5">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal as="li" key={step.n} delay={i * 0.06} className="border-t-2 border-white/15 pt-6">
                  <span className="font-serif text-5xl text-orange-500 italic">{step.n}</span>
                  <h3 className="font-display mt-4 text-lg leading-snug font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Where we've worked ───────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <h2 className="font-display text-4xl font-bold tracking-tight text-charcoal-900 lg:text-5xl">
                Where we've <Accent>worked.</Accent>
              </h2>
              <p className="mt-6 max-w-sm leading-relaxed text-charcoal-900/70">
                Residential and commercial stone works across three regions of Zimbabwe.
              </p>
              <Link to="/projects" className="group mt-8 inline-flex items-center gap-2 font-display font-semibold text-navy-800">
                All projects
                <ArrowUpRight size={18} className="text-orange-700 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
              </Link>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            {byLocation.map(({ location, projects }, i) => (
              <Reveal key={location} delay={i * 0.06}>
                <div className="grid gap-4 border-t border-charcoal-900/15 py-7 sm:grid-cols-[11rem_1fr]">
                  <h3 className="font-serif text-3xl text-navy-800 italic">{location}</h3>
                  <ul className="flex flex-wrap gap-x-6 gap-y-2">
                    {projects.map((p) => (
                      <li key={p.slug}>
                        <Link
                          to={`/projects/${p.slug}`}
                          className="font-display text-lg font-medium text-charcoal-900 underline decoration-charcoal-900/20 underline-offset-4 transition-colors hover:text-navy-800 hover:decoration-orange-500"
                        >
                          {p.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────── */}
      <section className="border-t border-charcoal-900/10 bg-stone-200/50">
        <div className="mx-auto grid max-w-7xl gap-px px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
          {VALUES.map((v, i) => (
            <Reveal key={v} delay={i * 0.05}>
              <p className="font-display py-4 text-2xl font-semibold tracking-tight text-navy-900 lg:text-3xl">
                <span className="mr-3 font-serif text-lg text-orange-700 italic">{String(i + 1).padStart(2, '0')}</span>
                {v}
              </p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}

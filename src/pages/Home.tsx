import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import { PROJECTS, PROCESS_STEPS, SITE_IMAGES, SERVICES, VALUES } from '../data/site'

const HERO_IMG = SITE_IMAGES.wallNight1

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-navy-900">
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Illuminated random rubble stone boundary wall at night"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/55 to-navy-900/30" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-6 pt-44 pb-24 lg:px-10">
          <Reveal y={40}>
            <p className="font-display text-sm font-semibold tracking-[0.35em] text-orange-500 uppercase">
              Zimbabwean Stone Craftsmanship · Est. 2019
            </p>
            <h1 className="font-display mt-8 max-w-4xl text-6xl leading-[0.98] font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
              Stone. Crafted Into&nbsp;Architecture.
            </h1>
            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
              <Link
                to="/contact"
                className="group inline-flex w-fit items-center gap-3 rounded-full bg-orange-500 px-8 py-4 font-display font-semibold text-white transition-colors hover:bg-orange-600"
              >
                Request a quote
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/projects"
                className="font-display text-white/80 underline-offset-8 transition-colors hover:text-white hover:underline"
              >
                View our work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Intro ────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-display text-3xl leading-snug font-semibold tracking-tight text-charcoal-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.25]">
                Taona Ori International is a Zimbabwean-owned construction and design company
                specializing in{' '}
                <span className="text-navy-800">premium stone work</span>, cladding, and bespoke
                building solutions for residential and commercial projects.
              </h2>
            </Reveal>
          </div>
          <div className="flex flex-col justify-end gap-8 lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.1}>
              <p className="leading-relaxed text-charcoal-900/70">
                Driven by a passion for craftsmanship, durability, and timeless design, we deliver
                high-quality finishes that elevate architectural spaces — with a strong presence in
                Harare, Victoria Falls, and Kwekwe.
              </p>
              <Link
                to="/about"
                className="group mt-6 inline-flex items-center gap-2 font-display font-semibold text-navy-800"
              >
                About the company
                <ArrowUpRight size={18} className="text-orange-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Craft image band ─────────────────────────────── */}
      <section className="grid md:grid-cols-3">
        <div className="overflow-hidden md:col-span-2">
          <img
            src={SITE_IMAGES.slateFacade}
            alt="Stone cladding detail on a building facade"
            className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105 md:h-[28rem]"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src={SITE_IMAGES.quartzPillar}
            alt="Quartz stone cladding on a pillar"
            className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105 md:h-[28rem]"
          />
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="font-display max-w-xl text-4xl font-bold tracking-tight text-charcoal-900 lg:text-5xl">
              Full-lifecycle stone &amp; building services
            </h2>
            <Link
              to="/services"
              className="group inline-flex w-fit items-center gap-2 font-display font-semibold text-navy-800"
            >
              All services
              <ArrowUpRight size={18} className="text-orange-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 border-t border-charcoal-900/10">
          {SERVICES.slice(0, 6).map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.04}>
              <Link
                to="/services"
                className="group grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 border-b border-charcoal-900/10 py-6 transition-colors hover:bg-white sm:grid-cols-[4rem_1fr_2fr_auto] sm:items-center sm:gap-8"
              >
                <span className="font-display text-sm text-orange-500">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-display text-xl font-semibold tracking-tight text-charcoal-900 transition-colors group-hover:text-navy-800 sm:text-2xl">
                  {s.title}
                </span>
                <span className="hidden max-w-md text-sm leading-relaxed text-charcoal-900/55 sm:block">
                  {s.tags.join(' · ')}
                </span>
                <ArrowRight
                  size={20}
                  className="text-charcoal-900/30 transition-all group-hover:translate-x-1 group-hover:text-orange-500"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────── */}
      <section className="bg-navy-900 py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="font-display text-sm font-semibold tracking-[0.3em] text-orange-500 uppercase">
              How we work
            </p>
            <h2 className="font-display mt-6 max-w-2xl text-4xl font-bold tracking-tight lg:text-5xl">
              From first consultation to final handover
            </h2>
          </Reveal>

          <ol className="mt-16 grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-5">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.06}>
                <li className="border-t-2 border-white/15 pt-6">
                  <span className="font-display text-4xl font-bold text-orange-500">{step.n}</span>
                  <h3 className="font-display mt-4 text-lg leading-snug font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{step.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <h2 className="font-display text-4xl font-bold tracking-tight text-charcoal-900 lg:text-5xl">
                What we stand for
              </h2>
              <p className="mt-6 leading-relaxed text-charcoal-900/70">
                We combine skilled artisanship with modern construction techniques to ensure every
                project meets both aesthetic and structural standards.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="grid gap-8 sm:grid-cols-2">
              {VALUES.map((v, i) => (
                <Reveal key={v} delay={i * 0.06}>
                  <div className="border-l-2 border-orange-500 pl-6">
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-navy-900">{v}</h3>
                    <span className="mt-2 block font-display text-sm text-charcoal-900/40">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured work ────────────────────────────────── */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <h2 className="font-display max-w-xl text-4xl font-bold tracking-tight text-charcoal-900 lg:text-5xl">
                Selected projects
              </h2>
              <Link
                to="/projects"
                className="group inline-flex w-fit items-center gap-2 font-display font-semibold text-navy-800"
              >
                All projects
                <ArrowUpRight size={18} className="text-orange-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {PROJECTS.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link to={`/projects/${p.slug}`} className="group block">
                  <div className="overflow-hidden bg-navy-800">
                    <img
                      src={[SITE_IMAGES.wallNight2, SITE_IMAGES.sandstoneWall, SITE_IMAGES.slateFacade][i]}
                      alt={`${p.category} stone works, ${p.location}`}
                      className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-5 flex items-baseline justify-between gap-4">
                    <div>
                      <p className="font-display text-sm tracking-[0.2em] text-orange-500 uppercase">
                        {p.category} · {p.location}
                      </p>
                      <h3 className="font-display mt-2 text-2xl font-semibold tracking-tight text-charcoal-900 group-hover:text-navy-800">
                        {p.title}
                      </h3>
                    </div>
                    <ArrowUpRight size={20} className="shrink-0 text-charcoal-900/30 transition-colors group-hover:text-orange-500" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy-800 py-24 text-white lg:py-28">
        <img
          src={SITE_IMAGES.sandstoneWall}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <h2 className="font-display max-w-3xl text-4xl leading-tight font-bold tracking-tight lg:text-6xl">
              Let us bring your vision to life through stone.
            </h2>
            <Link
              to="/contact"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-orange-500 px-8 py-4 font-display font-semibold text-white transition-colors hover:bg-orange-600"
            >
              Start a conversation
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
